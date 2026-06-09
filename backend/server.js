require("dotenv").config();  // Load environment variables from .env file
const jwt = require("jsonwebtoken"); 
const verifyToken = require("./middleware/auth");

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const User = require("./models/User");// Import User model

const app = express();// Create express application

app.use(cors());// Allow requests from frontend applications
app.use(express.json()); // Parse incoming JSON data


const MONGO_URI = process.env.MONGO_URI; // Get MongoDB connection string from .env file

// Connect to MongoDB Atlas
mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error ❌", err.message));

// Health check route
app.get("/", (req, res) => {
  res.send("Backend is Running 🚀");
});

// Signup route
app.post("/signup", async(req, res) => {

    // Hash the user's password before storing it in the database
  const hashedPassword = await bcrypt.hash(
    req.body.password,
    10
  );

    // Check whether the email is already registered
  const existingUser = await User.findOne({ email: req.body.email });
if (existingUser) {
  return res.status(400).send("Email already exists");
}

  // Create a new user document
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword
  });

 try {
  await newUser.save();
  res.send("User Saved Successfully Please Login");
} catch (error) {
  res.status(400).send("Email already exists");
}
});

//login route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });  // Find user by email

   if (!user) {
      return res.status(400).send("Invalid email or password");
    }

    // Compare entered password with hashed password
    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).send("Invalid email or password");
    }

    //  JWT TOKEN GENERATION
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

     // Send user details and token to frontend
    res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    res.status(500).send("Server error");
  }
});

// Protected dashboard route accessible only with a valid JWT token
app.get("/dashboard", verifyToken, (req, res) => {
  res.json({
    message: "Dashboard Access Granted 🔐",
    user: req.user
  });
});

const PORT = 5000;// Server port number

// Start Express server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));