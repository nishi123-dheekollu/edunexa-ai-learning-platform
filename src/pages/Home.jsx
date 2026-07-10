import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const hour = new Date().getHours();

  const [progressData, setProgressData] = useState(null);
  const [loading, setLoading] = useState(true);

  let greeting = "";
  if (hour < 12) greeting = "Good Morning";
  else if (hour < 18) greeting = "Good Afternoon";
  else greeting = "Good Evening";

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const userId = localStorage.getItem("userId");
        const response = await axios.get(
          `http://localhost:5000/api/progress/${userId}`
        );
        setProgressData(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProgress();
  }, []);

  // Calculate stats from real data:
  const totalTopics = {
    html5: 43, css3: 42, javascript: 45, gitgithub: 28,
    reactjs: 40, nodejs: 35, expressjs: 25, mongodb: 28,
    restapis: 20, jwtauthentication: 18
  };
  const grandTotal = 324;

  let completedCourses = 0;
  let totalCompletedTopics = 0;

  if (progressData?.courses) {
    Object.entries(progressData.courses).forEach(([key, val]) => {
      if (val?.completed) completedCourses++;
      totalCompletedTopics += (val?.completedTopics?.length || 0);
    });
  }

  const overallProgress = grandTotal > 0
    ? Math.round((totalCompletedTopics / grandTotal) * 100)
    : 0;

  const streakCount = progressData?.streakCount || 0;

  return (
    <div className="home-page">
      <Sidebar />

      <div className="hero">
        <div className="top-header">
          <div className="welcome-section">
            <h1>{greeting}, {user?.name}</h1>
            <p>Continue your MERN Stack learning journey today.</p>
          </div>

          <div className="profile-mini">
            <div className="avatar">
              {user?.name?.charAt(0).toUpperCase()}
            </div>
            <div>
              <h4>{user?.name}</h4>
              <span>Active Learner</span>
            </div>
          </div>
        </div>

        <div className="stats-container">
          <div className="home-stat-card">
            <h2>10</h2>
            <p>Total Courses</p>
          </div>

          <div className="home-stat-card">
            <h2>{loading ? "..." : completedCourses}</h2>
            <p>Completed Courses</p>
          </div>

          <div className="home-stat-card">
            <h3>Learning Progress</h3>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${overallProgress}%` }}
              ></div>
            </div>
            <p>{loading ? "Loading..." : `${overallProgress}% Completed`}</p>
          </div>

          <div className="home-stat-card">
            <h3>🔥 Learning Streak</h3>
            <h2 style={{ color: "#0f5c4d" }}>
              {loading ? "..." : `${streakCount} ${streakCount === 1 ? "Day" : "Days"}`}
            </h2>
            <p>
              {streakCount > 0
                ? streakCount >= 7
                  ? "You're on fire! 🔥"
                  : "Keep it up!"
                : "Start learning today!"}
            </p>
          </div>
        </div>

        <h2 className="section-title">MERN Stack Learning Roadmap</h2>

        <div className="hero-banner">
          <h2>Complete MERN Roadmap</h2>
          <div className="roadmap-points">
            <p>✓ Frontend Development</p>
            <p>✓ Backend Development</p>
            <p>✓ MongoDB Database</p>
            <p>✓ JWT Authentication</p>
            <p>✓ Deployment</p>
          </div>
          <button
            className="start-learning-btn"
            onClick={() => navigate("/mycourses")}
          >
            Start Your Journey →
          </button>
        </div>

        <div className="quote-card">
          <h3>💡 Daily Motivation</h3>
          <p>Consistency beats talent when talent doesn't work hard.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;