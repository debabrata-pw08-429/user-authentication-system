import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { config } from "../../config/api";
import "./SignUp.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${config.endpoint}/signup,`, formData);
      alert(res.data.message);
      navigate("/signin");
    } catch (err) {
      alert(err.response?.data?.message || "Error occurred");
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Create Account</h2>
        <input
          name="firstName"
          onChange={handleChange}
          placeholder="First Name"
          required
        />
        <input
          name="lastName"
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
        <input
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input name="address" onChange={handleChange} placeholder="Address" />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Password"
          required
          minLength="6"
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
