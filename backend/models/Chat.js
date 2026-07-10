const mongoose = require("mongoose");

// Chat message schema
const chatSchema = new mongoose.Schema(
  {
    // User who owns this conversation
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    // Message sender (user or AI)
    sender: {
      type: String,
      enum: ["user", "ai"],
      required: true
    },

    // Message content
    text: {
      type: String,
      required: true
    }
  },
  {
    // Automatically adds createdAt and updatedAt
    timestamps: true
  }
);

module.exports = mongoose.model("Chat", chatSchema);