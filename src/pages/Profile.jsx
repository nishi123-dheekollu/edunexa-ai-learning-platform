import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import {FaBook,FaRobot,FaGraduationCap,FaChartLine} from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import EditProfileModal from "../components/EditProfileModal";
import ChangePasswordModal from "../components/ChangePasswordModal";

function Profile() {
  const [profile, setProfile] = useState(null);
  const [showEdit, setShowEdit] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userId = localStorage.getItem("userId");

        const response = await axios.get(
          `http://localhost:5000/api/profile/${userId}`
        );

        setProfile(response.data);

      } catch (error) {
        console.log(error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="home-page">

      <Sidebar />

      <div className="hero">

        <div className="profile-header">

          <h1>My Profile</h1>

        </div>

        {!profile ? (

          <h2>Loading...</h2>

        ) : (

          <div className="profile-container">

            <div className="profile-card">

              <button
  className="edit-profile-btn"
  onClick={() => setShowEdit(true)}
>
  <FiEdit2 />
</button>

              <div className="profile-top">

                <div className="profile-avatar">
                  {profile.name.charAt(0).toUpperCase()}
                </div>

                <h2>{profile.name}</h2>

                <span className="profile-role">
                  Full Stack Learner 🚀
                </span>

                <p className="profile-email">
                  {profile.email}
                </p>

              </div>

              <hr className="profile-divider" />

              <h3 className="stats-title">
                📚 Learning Statistics
              </h3>

              <div className="profile-stats">

                <div className="profile-stat-card">

                  <FaBook className="stat-icon" />

                  <h3>{profile.coursesCompleted}</h3>

                  <p>Courses Completed</p>

                </div>

                <div className="profile-stat-card">

                  <FaChartLine className="stat-icon" />

                  <h3>{profile.overallProgress}%</h3>

                  <p>Overall Progress</p>

                </div>

                <div className="profile-stat-card">

                  <FaRobot className="stat-icon" />

                  <h3>{profile.aiChats}</h3>

                  <p>AI Conversations</p>

                </div>

                <div className="profile-stat-card">

                  <FaGraduationCap className="stat-icon" />

                  <h3>Coming Soon</h3>

                  <p>Certificates</p>

                </div>

              </div>

              <hr className="profile-divider" />

              <button
                className="change-password-full-btn"
                onClick={() => setShowPasswordModal(true)}
              >
                🔒 Change Password
              </button>

            </div>

          </div>

        )}

        <EditProfileModal
          profile={profile}
          setProfile={setProfile}
          showEdit={showEdit}
          setShowEdit={setShowEdit}
        />

        <ChangePasswordModal
          showPasswordModal={showPasswordModal}
          setShowPasswordModal={setShowPasswordModal}
        />

      </div>

    </div>
  );
}

export default Profile;