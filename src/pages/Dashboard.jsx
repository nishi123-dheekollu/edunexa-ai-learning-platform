import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");  // Retrieve JWT token from local storage

    // Redirect user to login page if token is missing
    if (!token) {
      navigate("/login");
      return;
    }

    // Decode JWT token to access payload data
    try {
      const decoded = jwtDecode(token);

      // Check whether the token has expired
      if (decoded.exp * 1000 < Date.now()) {
        localStorage.removeItem("token");
        navigate("/login");
        return;
      }

    } catch (err) {
       // Handle invalid or corrupted toke
      localStorage.removeItem("token");
      navigate("/login");
      return;
    }

    // Fetch protected dashboard data from backend
    axios.get("http://localhost:5000/dashboard", {
      headers: {
        authorization: token
      }
    })
    .then(res => console.log(res.data))
    .catch(err => console.log(err));

  }, []);

  const handleLogout = () => {
     // Remove token and redirect user to login page
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <h1>Welcome to the dashboard</h1>

      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;