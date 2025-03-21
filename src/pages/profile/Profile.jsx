import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import SavedAddress from "./SavedAddress";
import OrderHistory from "./OrderHistory";
import HelpandSupport from "./HelpandSupport";

const Profile = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("personal-info");
  const [formData, setFormData] = useState({
    name: "Sophia Williams",
    phone: "+91 9995553331",
    email: "sophia@abcd.com",
  });

  // Update active tab when URL parameter changes
  useEffect(() => {
    const tabFromUrl = searchParams.get("tab");
    if (tabFromUrl) {
      setActiveTab(tabFromUrl);
    }
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "personal-info":
        return (
          <>
            <h2>
              Welcome, <span className="username">User_name !</span>
            </h2>

            <div className="profile-picture-section">
              <div className="profile-picture">
                <img src="/images/user/profilepicture.png" alt="Profile" />
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
                <button type="button" className="cancel-btn">
                  Cancel
                </button>
                <button type="submit" className="save-btn">
                  Save Profile
                </button>
              </div>
            </form>
          </>
        );
      case "saved-address":
        return <SavedAddress />;
      case "order-history":
        return <OrderHistory />;
      case "help-support":
        return <HelpandSupport />;
      default:
        return null;
    }
  };

  return (
    <div className="profile-page">
      <div className="breadcrumb">
        <Link to="/">Home</Link> / <span>My account</span>
      </div>

      <div className="profile-container">
        <div className="sidebar">
          <nav>
            <ul>
              <li
                className={activeTab === "personal-info" ? "active" : ""}
                onClick={() => setActiveTab("personal-info")}
              >
                Personal Info
              </li>
              <li
                className={activeTab === "saved-address" ? "active" : ""}
                onClick={() => setActiveTab("saved-address")}
              >
                Saved Address
              </li>
              <li
                className={activeTab === "order-history" ? "active" : ""}
                onClick={() => setActiveTab("order-history")}
              >
                Order History
              </li>
              <li
                className={activeTab === "help-support" ? "active" : ""}
                onClick={() => setActiveTab("help-support")}
              >
                Help & Support
              </li>
            </ul>
          </nav>
        </div>

        <div className="profile-content">{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default Profile;
