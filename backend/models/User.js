const mongoose = require("mongoose");

// Define the schema for user data
const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true // User name is mandatory
    },
    email: {
       type: String,
       required: true, // Email is mandatory
       unique: true  // Prevent duplicate email registrations
   },
   password: {
  type: String,
  required: true  // Store hashed password
}
});

// Create User model from schema
const User = mongoose.model("User", userSchema);
module.exports = User;  // Export the model for use in other files