import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../Sass/page/Profile/_Profile.scss";

const Profile = () => {
  const [formData, setFormData] = useState({
    name: "Sophia Williams",
    phone: "+91 9995553331",
    email: "sophia@abcd.com",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="profile-page">
      <div className="breadcrumb">
        <Link to="/">Home</Link> / My account
      </div>

      <h1 className="welcome-text">
        Welcome, <span className="username">User_name</span> !
      </h1>

      <div className="profile-container">
        <div className="profile-content">
          <div className="profile-picture-section">
            <div className="profile-picture">
              <img src="/images/user/profilepicture.png " alt="Profile" />
              <button className="remove-photo">×</button>
            </div>
            <button className="upload-btn">Upload new picture</button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>
                Name <span className="required">*</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label>
                Phone number <span className="required">*</span>
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
              <small className="whatsapp-note">
                Ensure the number provided is linked to WhatsApp to proceed
              </small>
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="form-footer">
              <p className="required-note">
                Fields marked with <span className="required">*</span> are
                required
              </p>
              <div className="button-group">
                <button type="button" className="cancel-btn">
                  Cancel
                </button>
                <button type="submit" className="save-btn">
                  Save Profile
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="sidebar">
          <nav>
            <ul>
              <li className="active">Personal Info</li>
              <li>
                <Link to="/saved-address">Saved Address</Link>
              </li>
              <li>
                <Link to="/order-history">Order History</Link>
              </li>
              <li>
                <Link to="/help-support">Help & Support</Link>
              </li>
              <li>
                <Link to="/logout" className="logout">
                  Logout
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Profile;
