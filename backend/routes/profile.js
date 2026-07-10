const express = require("express");
const router = express.Router();

const User = require("../models/User");
const Chat = require("../models/Chat");
const bcrypt = require("bcrypt");

// Get profile details
router.get("/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    const courses = Object.values(user.courses);

    const coursesCompleted = courses.filter(
      course => course.completed
    ).length;

    const totalTopics = {
  html5: 43,
  css3: 42,
  javascript: 45,
  gitgithub: 28,
  reactjs: 40,
  nodejs: 35,
  expressjs: 25,
  mongodb: 28,
  restapis: 20,
  jwtauthentication: 18
};

const grandTotal = Object.values(totalTopics).reduce(
  (sum, value) => sum + value,
  0
);

let completedTopics = 0;

courses.forEach(course => {
  completedTopics += course.completedTopics.length;
});

const overallProgress = Math.round(
  (completedTopics / grandTotal) * 100
);

    const aiChats = await Chat.countDocuments({
      userId: req.params.userId,
      sender: "ai"
    });

    res.json({
      name: user.name,
      email: user.email,
      joinedDate: user.createdAt,
      coursesCompleted,
      overallProgress,
      aiChats
    });

  } catch (error) {

    res.status(500).json({
      message: "Unable to fetch profile"
    });

  }
});

// Update user password
router.put("/:userId/password", async (req, res) => {

  try {

    const { currentPassword, newPassword } = req.body;

    const user = await User.findById(req.params.userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    const isMatch = await bcrypt.compare(
      currentPassword,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Current password is incorrect"
      });
    }

    const hashedPassword = await bcrypt.hash(
      newPassword,
      10
    );

    user.password = hashedPassword;

    await user.save();

    res.json({
      message: "Password updated successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: "Unable to update password"
    });

  }

});

// Update profile details
router.put("/:userId", async (req, res) => {

  try {

    const { name } = req.body;

    const user = await User.findById(req.params.userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    user.name = name;

    await user.save();

    res.json({
      name: user.name
    });

  } catch (error) {

    res.status(500).json({
      message: "Unable to update profile"
    });

  }

});
module.exports = router;