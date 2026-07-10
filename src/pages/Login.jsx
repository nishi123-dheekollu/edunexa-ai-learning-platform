import { MdEmail, MdPrivacyTip } from "react-icons/md";
import {FaLock, FaEye, FaEyeSlash, FaApple, FaMicrosoft, FaShieldAlt} from "react-icons/fa";
import {FcGoogle} from "react-icons/fc";
import {BiSupport} from "react-icons/bi";
import "../App.css";
import {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Login() {

 // Form state management for authentication
  const [islogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [name, setName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [success, setSuccess] = useState("");
  const [loginError, setLoginError] = useState("");

  const navigate = useNavigate();

  // Handle login and signup form submission
  const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Authenticate user and generate JWT token
  if (islogin) {
    setTimeout(() => {
    setLoginError("");
  }, 3000);

  try {
    const response = await axios.post("https://learning-platform-muyw.onrender.com/login", {
      email: loginEmail,
      password: loginPassword,
    });

    // Store JWT token in local storage for authenticated requests
    localStorage.setItem("token", response.data.token); 

    localStorage.setItem(
  "userId",
  response.data.user.id
);
    
    localStorage.setItem("user",JSON.stringify(response.data.user));

     setLoginError("");
  
    setSuccess(response.data);
    setLoginEmail("");
    setLoginPassword("");

    navigate("/home")
  } catch (error) {
    setSuccess("");
    setLoginError(error.response.data);
  }

  return;
}

  // Validate password confirmation before registration
  if (signupPassword !== confirmPassword) {
    setPasswordError("Passwords do not match");

    setTimeout(() => {
    setPasswordError("");
  }, 3000);
    return;
  }

  setPasswordError("");
  setEmailError("");
  setSuccess("");

  try {
    // Send user registration data to backend
  const response = await axios.post(
    "https://learning-platform-muyw.onrender.com/signup",
    {
      name,
      email: signupEmail,
      password: signupPassword
    }
  );

  setSuccess(response.data);
  setTimeout(() => {
  setSuccess("");
}, 3000);

  setName("");
  setSignupEmail("");
  setSignupPassword("");
  setConfirmPassword("");
  

} catch (error) {
    setSuccess("");
    setEmailError(error.response.data);

    setTimeout(() => {
    setEmailError("");
  }, 3000);
  }
};

  return (<div className="container">
    <div className="auth-wrapper">
    <div className="auth-card">
      
     {/* Authentication page heading */}
      <h1 className="title">{islogin? "Welcome Back" : "Create Account"}</h1>

      <p className="subtitle">{islogin? "Login to continue your learning journey" : "Sign up to get started"}</p>

      {/* Toggle between Login and Sign Up forms */}
      <div className="tabs">
        <button className={`tab ${islogin ? "login-active":""}`} onClick={() => setIsLogin(true)}>Login</button>
        <button className={`tab ${!islogin ? "login-active":""}`} onClick={() => setIsLogin(false)}>Sign Up</button>
      </div>

      {/* Authentication form */}
      <form className="form" onSubmit={handleSubmit}>
        
        {/* Signup form */}
        {/* Full name input field for new users */}
        {!islogin &&(<div className = "form-label">
          <label>Full Name </label>
          <div className="input-box">
            <input type="text" placeholder="Enter your Full Name" className="input" value={name} 
            onChange={(e) => setName(e.target.value)}/>
          </div>
          </div>)
}
  
{/* Email input field */}
        <div className="form-label">
            <label >Email Address</label>
            <div className="input-box">
                <MdEmail className="icon"/> 
                <input type="email" placeholder="Enter your Email" className="input"  
                value={islogin ? loginEmail : signupEmail} onChange={(e) => islogin ? setLoginEmail(e.target.value) : setSignupEmail(e.target.value)}/>
             </div>
        </div>

         {!islogin && emailError && (<p className="error-message">{emailError}</p>)}

{/* Password input with visibility toggle */}
        <div className= "form-label">
            <label >Password</label>
            <div className="input-box">
                <FaLock className="icon"/> 
                <input type={showPassword ? "text" : "password"} placeholder="Enter your Password" className= "input" value={islogin ? loginPassword : signupPassword} onChange={(e) => islogin ? setLoginPassword(e.target.value) : setSignupPassword(e.target.value)}/>
                <button type="button" className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>

            </div>
        </div>

    
        {/* Confirm password field for signup validation */}
        {!islogin &&(<div className="form-label">
          <label>Confirm Password</label>
          <div className= "input-box">
            <FaLock className="icon"/>
            <input type={showConfirmPassword ? "text" : "password"} placeholder="Confirm your Password" className="input" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <button type="button" className="toggle-password" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            </div>
            </div>)} 

        {!islogin && ( passwordError && <p className="error-message">{passwordError}</p>)}
        
        {/* Forgot password link placeholder */}
        {islogin &&(
        <div className="forgot-box">
          <p className="forgot-password">Forgot Password?</p>
        </div>)}

        {/* login form */}
        {islogin && (
          <button  type="submit" className="login-btn">Login</button>
        )}

        {islogin && ( loginError && <p className="loginerror-message">{loginError}</p>)}

        {/* signup form */}
        {!islogin && (<button  type="submit" className="login-btn">Sign Up</button>)}

         {!islogin && ( success && <p className="success-message">{success}</p>)}

      </form>

      {/* signup form */}
      {islogin && (
        <div className="signup-text">
          <p>Don't have an account? {" "}<span className="signup-link" onClick={() => setIsLogin(false)}>Sign Up</span></p>
        </div>
      )}

    </div>

    {/* Security and support information */}
        <div className="footer">

          <div>
             <FaShieldAlt /> 
             <span>Secure & Safe</span>
          </div>
           
           <div>
             <MdPrivacyTip /> 
             <span>Privacy Protected</span>
          </div>

          <div>
             <BiSupport />
             <span>24/7 Support</span>
          </div>
        </div>
    </div>

  </div>);
}

export default Login;