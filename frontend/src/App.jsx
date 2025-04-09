import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/signUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import UserDashboard from "./components/UserDashboard/UserDashboard";

function App() {
  return (
    <Router>
      <div>
        <h1 style={{ textAlign: "center" }}>J T R O N I X</h1>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<UserDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
