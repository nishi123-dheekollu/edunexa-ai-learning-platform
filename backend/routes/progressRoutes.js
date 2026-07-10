const express = require("express");
const router = express.Router();
const User = require("../models/User");

const courseTopicCounts = {
  html5: 43, css3: 42, javascript: 45, gitgithub: 28,
  reactjs: 40, nodejs: 35, expressjs: 25, mongodb: 28,
  restapis: 20, jwtauthentication: 18
};

// GET all progress for a user:
router.get("/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({
      courses: user.courses,
      streakCount: user.streakCount || 0,
      lastActiveDate: user.lastActiveDate
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PUT — save progress for a specific course:
router.put("/:courseName/:userId", async (req, res) => {
  try {
    const { courseName, userId } = req.params;
    const { completedTopics, currentTopic, progress } = req.body;

    if (!courseTopicCounts[courseName]) {
      return res.status(400).json({ message: "Invalid course name" });
    }

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Update course progress:
    user.courses[courseName].completedTopics = completedTopics;
    user.courses[courseName].currentTopic = currentTopic;
    user.courses[courseName].progress = progress;

    // Check if course is completed:
    const totalTopics = courseTopicCounts[courseName];
    if (completedTopics.length >= totalTopics) {
      user.courses[courseName].completed = true;
    }

    // Streak logic:
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (user.lastActiveDate) {
      const lastActive = new Date(user.lastActiveDate);
      lastActive.setHours(0, 0, 0, 0);
      const diffDays = Math.floor((today - lastActive) / (1000 * 60 * 60 * 24));

      if (diffDays === 0) {
        // Same day — no change
      } else if (diffDays === 1) {
        // Consecutive day — increment
        user.streakCount = (user.streakCount || 0) + 1;
      } else {
        // Gap — reset
        user.streakCount = 1;
      }
    } else {
      // First time
      user.streakCount = 1;
    }

    user.lastActiveDate = new Date();

    user.markModified("courses");
    await user.save();

    res.status(200).json({ message: "Progress saved successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;