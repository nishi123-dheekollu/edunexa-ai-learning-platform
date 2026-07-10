import { useState } from "react";
import axios from "axios";

function EditProfileModal({
  profile,
  setProfile,
  showEdit,
  setShowEdit
}) {

  const [name, setName] = useState(profile?.name || "");

  if (!showEdit) return null;

  const handleSave = async () => {

  try {

    const userId = localStorage.getItem("userId");

    const response = await axios.put(
      `https://learning-platform-muyw.onrender.com/api/profile/${userId}`,
      {
        name
      }
    );

    setProfile(prev => ({
      ...prev,
      name: response.data.name
    }));

    const user = JSON.parse(localStorage.getItem("user"));

    user.name = response.data.name;

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    setShowEdit(false);

  } catch (error) {

    console.log(error);

  }

};

  return (
    <div className="modal-overlay">

      <div className="edit-modal">

        <h2>Edit Profile</h2>

        <div className="form-group">

          <label>Full Name</label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

        </div>

        <div className="form-group">

          <label>Email</label>

          <input
            type="email"
            value={profile.email}
            disabled
          />

        </div>

        <div className="modal-buttons">

          <button
            className="cancel-btn"
            onClick={() => setShowEdit(false)}
          >
            Cancel
          </button>

          <button
  className="save-btn"
  onClick={handleSave}
>
  Save Changes
</button>

        </div>

      </div>

    </div>
  );
}

export default EditProfileModal;