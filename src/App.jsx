import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import MyCourses from "./pages/MyCourses";
import CourseDetails from "./pages/CourseDetails";
import AIMentor from "./pages/AIMentor";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          {/* Public routes accessible to all users */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        {/* Protected route accessible only to authenticated users */}
        <Route path="/home" element={ <ProtectedRoute> <Home /> </ProtectedRoute>}/> 

        <Route path="/mycourses" element={<MyCourses />} />

        <Route path="/course/:courseName" element={<CourseDetails />} />

        <Route path="/aimentor" element={<AIMentor />} />

        <Route path="/profile" element={ <ProtectedRoute> <Profile /> </ProtectedRoute>}/>
         
      </Routes>
      </BrowserRouter>

     
  );
}

export default App;