import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    identifier: "", // for email or phone
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Login</h1>
        <p className="login-subtitle">
          Log in to manage your account and orders.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="identifier"
              value={formData.identifier}
              onChange={handleChange}
              placeholder="Enter email address or phone number"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
          </div>

          <button type="submit" className="login-button">
            Continue
          </button>

          <div className="terms-text">
            By continuing, you agree to our{" "}
            <Link to="/terms">Terms of Service</Link> &{" "}
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </form>

        <div className="create-account">
          <div className="separator">Don't have an account?</div>
          <Link to="/signup" className="create-account-button">
            Create An Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
