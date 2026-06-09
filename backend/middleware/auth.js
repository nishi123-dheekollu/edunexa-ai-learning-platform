const jwt = require("jsonwebtoken");

// Middleware to verify JWT token for protected routes
const verifyToken = (req, res, next) => {
   // Extract token from request headers
  const token = req.headers.authorization;

   // Deny access if token is not provided
  if (!token) {
    return res.status(401).send("Access Denied. No token provided");
  }

  try {
       // Verify token using JWT secret key
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    // Attach decoded user information to request object
    req.user = verified;
    // Pass control to the next middleware or route handler
    next();
  } catch (error) {
    // Return error for invalid or expired token
    res.status(400).send("Invalid Token");
  }
};

module.exports = verifyToken;