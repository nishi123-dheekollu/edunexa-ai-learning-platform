import { useNavigate, useLocation } from "react-router-dom";
import {FaHome,FaBook,FaRobot,FaUser,FaChartLine} from "react-icons/fa";

// Sidebar component
function Sidebar() {

   // Navigation hook
  const navigate = useNavigate();
   // Get current route for active menu
  const location = useLocation();

  return (
    <div className="sidebar">

      <div>
        <h2>EduNexa</h2>

        <p className="tagline">
          Learn • Grow • Master
        </p>

        <ul>

         <li
 className={location.pathname === "/home" ? "active" : ""}
 onClick={() => navigate("/home")}
>
 <FaHome />
 <span>Home</span>
</li>

<li
 className={location.pathname === "/mycourses" ? "active" : ""}
 onClick={() => navigate("/mycourses")}
>
 <FaBook />
 <span>My Courses</span>
</li>

<li
 className={location.pathname === "/aimentor" ? "active" : ""}
 onClick={() => navigate("/aimentor")}
>
 <FaRobot />
 <span>AI Mentor</span>
</li>

<li
 className={location.pathname === "/profile" ? "active" : ""}
 onClick={() => navigate("/profile")}
>
 <FaUser />
 <span>Profile</span>
</li>
        </ul>

      </div>

      <button
  className="logout-btn"
  onClick={() => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("userId");
    navigate("/login");
  }}
>
  Logout
</button>

    </div>
  );
}

export default Sidebar;