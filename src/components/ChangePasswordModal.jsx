import { useState } from "react";
import axios from "axios";

function ChangePasswordModal({
  showPasswordModal,
  setShowPasswordModal
}) {

  const [currentPassword, setCurrentPassword] = useState("");

  const [newPassword, setNewPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

const [success, setSuccess] = useState("");

  if (!showPasswordModal) return null;

  const handleChangePassword = async () => {

  setError("");
  setSuccess("");

  if (!currentPassword || !newPassword || !confirmPassword) {
    setError("Please fill all fields.");
    return;
  }

  if (newPassword !== confirmPassword) {
    setError("New passwords do not match.");
    return;
  }

  try {

    const userId = localStorage.getItem("userId");

    const response = await axios.put(
      `http://localhost:5000/api/profile/${userId}/password`,
      {
        currentPassword,
        newPassword
      }
    );

    setSuccess(response.data.message);

    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");

    setTimeout(() => {
      setShowPasswordModal(false);
      setSuccess("");
    }, 1500);

  } catch (error) {

    setError(
      error.response?.data?.message ||
      "Unable to update password."
    );

  }

};

  return (

    <div className="modal-overlay">

      <div className="edit-modal">

        <h2>Change Password</h2>

        <div className="form-group">

          <label>Current Password</label>

          <input
            type="password"
            value={currentPassword}
            onChange={(e) =>
              setCurrentPassword(e.target.value)
            }
          />

        </div>

        <div className="form-group">

          <label>New Password</label>

          <input
            type="password"
            value={newPassword}
            onChange={(e) =>
              setNewPassword(e.target.value)
            }
          />

        </div>

        <div className="form-group">

          <label>Confirm Password</label>

          <input
            type="password"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
          />

        </div>

        {error && (
  <p className="error-message">
    {error}
  </p>
)}

{success && (
  <p className="success-message">
    {success}
  </p>
)}

        <div className="modal-buttons">

          <button
            className="cancel-btn"
            onClick={() => setShowPasswordModal(false)}
          >
            Cancel
          </button>

          <button
  className="save-btn"
  onClick={handleChangePassword}
>
  Change Password
</button>

        </div>

      </div>

    </div>

  );

}

export default ChangePasswordModal;