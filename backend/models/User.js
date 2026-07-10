const mongoose = require("mongoose");

const courseProgress = {
  completedTopics: { type: [Number], default: [] },
  currentTopic: { type: Number, default: 0 },
  progress: { type: Number, default: 0 },
  completed: { type: Boolean, default: false }
};

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    streakCount: { type: Number, default: 0 },
    lastActiveDate: { type: Date, default: null },

    courses: {
      html5: courseProgress,
      css3: courseProgress,
      javascript: courseProgress,
      gitgithub: courseProgress,
      reactjs: courseProgress,
      nodejs: courseProgress,
      expressjs: courseProgress,
      mongodb: courseProgress,
      restapis: courseProgress,
      jwtauthentication: courseProgress
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;