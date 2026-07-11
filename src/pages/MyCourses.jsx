import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaLock } from "react-icons/fa";
import { SiExpress, SiMongodb, SiJsonwebtokens } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// My Courses page 
function MyCourses() {
  const navigate = useNavigate();  /* Navigation hook */
  const slugify = (name) => name.toLowerCase().replace(/[^a-z0-9]/g, "");  // Convert course names into URL-friendly slugs 
  const [courseProgress, setCourseProgress] = useState({}); // Store course progress received from backend 
  const [loading, setLoading] = useState(true);  // Loading state while fetching progress 

// Learning roadmap order used for locking/unlocking courses 
  const courseOrder = [
    "html5", "css3", "javascript", "gitgithub",
    "reactjs", "nodejs", "expressjs", "mongodb",
    "restapis", "jwtauthentication"
  ];

// Fetch user's course progress 
  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const userId = localStorage.getItem("userId");
        const response = await axios.get(
          `https://learning-platform-muyw.onrender.com/api/progress/${userId}`
        );
        setCourseProgress(response.data.courses || {});
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProgress();
  }, []);

  // Static course information 
  const courses = [
    { id: 1, icon: <FaHtml5 color="#E34F26" />, name: "HTML5", level: "Beginner", topics: 43, duration: "3 Hours" },
    { id: 2, icon: <FaCss3Alt color="#1572B6" />, name: "CSS3", level: "Beginner", topics: 42, duration: "5 Hours" },
    { id: 3, icon: <FaJs color="#F7DF1E" />, name: "JavaScript", level: "Beginner", topics: 45, duration: "8 Hours" },
    { id: 4, icon: <FaGitAlt color="#F05032" />, name: "Git & GitHub", level: "Beginner", topics: 28, duration: "4 Hours" },
    { id: 5, icon: <FaReact color="#61DAFB" />, name: "React.js", level: "Intermediate", topics: 40, duration: "12 Hours" },
    { id: 6, icon: <FaNodeJs color="#68A063" />, name: "Node.js", level: "Intermediate", topics: 35, duration: "8 Hours" },
    { id: 7, icon: <SiExpress color="#000000" />, name: "Express.js", level: "Intermediate", topics: 25, duration: "5 Hours" },
    { id: 8, icon: <SiMongodb color="#47A248" />, name: "MongoDB", level: "Intermediate", topics: 28, duration: "6 Hours" },
    { id: 9, icon: <TbApi color="#6366F1" />, name: "REST APIs", level: "Advanced", topics: 20, duration: "4 Hours" },
    { id: 10, icon: <SiJsonwebtokens color="#FF9800" />, name: "JWT Authentication", level: "Advanced", topics: 18, duration: "3 Hours" },
  ];

 /* Check whether the current course is unlocked */
  const isUnlocked = (index) => {
    if (index === 0) return true; // First course always unlocked
    const prevSlug = courseOrder[index - 1];
    return courseProgress[prevSlug]?.completed === true;
  };

  /* Get progress percentage of a course */
  const getProgress = (index) => {
    const slug = courseOrder[index];
    return courseProgress[slug]?.progress || 0;
  };

  return (
    <div className="home-page">
      {/* Sidebar Navigation  */}
      <Sidebar />

      {/* Page Heading */}
      <div className="hero">
        <h1>My Learning Roadmap</h1>
        <p>Follow the roadmap and become a MERN Stack Developer.</p>

        {/* Display loading state until progress is fetched */}
        {loading ? (
          <p style={{ padding: "20px" }}>Loading your progress...</p>
        ) : (
          <div className="roadmap-container">
            {/* Course roadmap cards */}
            {courses.map((course, index) => {
              const unlocked = isUnlocked(index);
              const progress = getProgress(index);
              const slug = courseOrder[index];
              const completed = courseProgress[slug]?.completed || false;

              return (
                <div
                  className={`roadmap-card ${unlocked ? "unlocked-card" : "locked-card"}`}
                  key={course.id}
                >
                  <div className="roadmap-info">
                    <h3 className="course-title">
                      <span className="course-icon">{course.icon}</span>
                      {course.name}
                    </h3>

                    <p className="course-level">
                      {course.level} • {course.topics} Topics
                    </p>

                    <p className="course-duration">
                      Duration: {course.duration}
                    </p>

                    {/* Course progress */}
                    <p className="progress-percentage">{progress}% Complete</p>

                    {!unlocked && (
                      <p className="locked-text">
                        Complete {courses[index - 1]?.name} to unlock
                      </p>
                    )}
                  </div>

                  <button
                    className={`start-btn ${!unlocked ? "locked-btn" : ""}`}
                    disabled={!unlocked}
                    onClick={() => navigate(`/course/${slugify(course.name)}`)}
                  >
                    {!unlocked ? (
                      <><FaLock /><span>Locked</span></>
                    ) : completed ? (
                      "Continue"
                    ) : progress > 0 ? (
                      "Resume"
                    ) : (
                      "Start Course"
                    )}
                  </button>

                </div>
              );

            })}
          </div>

        )}

      </div>

    </div>

  );

}

export default MyCourses;