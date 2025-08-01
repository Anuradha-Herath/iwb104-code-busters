import React, { useState, useEffect } from 'react';
import './profile.css';
import TaskerNavbar from '../navbar/navbar';

const TaskerProfile = () => {
  const [taskerData, setTaskerData] = useState({
    fullName: 'John Smith',
    username: 'johnsmith_handyman',
    email: 'john.smith@email.com',
    phoneNumber: '+1 (555) 123-4567',
    addressLine1: '123 Main Street',
    addressLine2: 'Apt 2B',
    city: 'New York',
    stateProvince: 'NY',
    postalCode: '10001',
    country: 'United States',
    category: 'Home Repairs',
    experience: 'Advanced',
    hourlyRate: 45,
    bio: 'Professional handyman with 5+ years of experience in home repairs, electrical work, and plumbing. I take pride in delivering quality work and excellent customer service.',
    skills: 'Plumbing, Electrical work, Drywall repair, Painting, Furniture assembly, Tile installation',
    profileImage: null,
    rating: 4.8,
    totalJobs: 127,
    joinDate: '2022-03-15'
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ ...taskerData });

  const handleEdit = () => {
    setIsEditing(true);
    setEditData({ ...taskerData });
  };

  const handleSave = () => {
    setTaskerData({ ...editData });
    setIsEditing(false);
    // Here you would typically make an API call to save the data
    alert('Profile updated successfully!');
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditData({ ...taskerData });
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setEditData({ ...editData, [name]: files[0] });
    } else {
      setEditData({ ...editData, [name]: value });
    }
  };

  return (
    <div>
      <TaskerNavbar />
      <div className="tasker-profile">
        <div className="profile-container">
          {/* Profile Header */}
          <div className="profile-header">
            <div className="profile-image-section">
              <div className="profile-image">
                {taskerData.profileImage ? (
                  <img src={URL.createObjectURL(taskerData.profileImage)} alt="Profile" />
                ) : (
                  <div className="default-avatar">
                    {taskerData.fullName.charAt(0)}
                  </div>
                )}
              </div>
              {isEditing && (
                <input
                  type="file"
                  name="profileImage"
                  accept="image/*"
                  onChange={handleChange}
                  className="file-input"
                />
              )}
            </div>
            
            <div className="profile-info">
              <h1>{taskerData.fullName}</h1>
              <p className="username">@{taskerData.username}</p>
              <div className="profile-stats">
                <div className="stat">
                  <span className="stat-value">★ {taskerData.rating}</span>
                  <span className="stat-label">Rating</span>
                </div>
                <div className="stat">
                  <span className="stat-value">{taskerData.totalJobs}</span>
                  <span className="stat-label">Jobs Completed</span>
                </div>
                <div className="stat">
                  <span className="stat-value">${taskerData.hourlyRate}/hr</span>
                  <span className="stat-label">Rate</span>
                </div>
              </div>
              
              <div className="profile-actions">
                {!isEditing ? (
                  <button className="edit-btn" onClick={handleEdit}>
                    Edit Profile
                  </button>
                ) : (
                  <div className="edit-actions">
                    <button className="save-btn" onClick={handleSave}>
                      Save Changes
                    </button>
                    <button className="cancel-btn" onClick={handleCancel}>
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="profile-main-grid">
            {/* Left Column - Key Information */}
            <div className="profile-left-column">
              {/* Professional Information */}
              <div className="profile-section">
                <h2>Professional Information</h2>
                <div className="info-grid">
                  <div className="info-item">
                    <label>Category</label>
                    {isEditing ? (
                      <select
                        name="category"
                        value={editData.category}
                        onChange={handleChange}
                      >
                        <option value="Assembly">Assembly</option>
                        <option value="Mounting">Mounting</option>
                        <option value="Moving">Moving</option>
                        <option value="Cleaning">Cleaning</option>
                        <option value="Outdoor Help">Outdoor Help</option>
                        <option value="Home Repairs">Home Repairs</option>
                        <option value="Painting">Painting</option>
                      </select>
                    ) : (
                      <span className="category-badge">{taskerData.category}</span>
                    )}
                  </div>
                  
                  <div className="info-item">
                    <label>Experience Level</label>
                    {isEditing ? (
                      <select
                        name="experience"
                        value={editData.experience}
                        onChange={handleChange}
                      >
                        <option value="Beginner">Beginner (0-1 years)</option>
                        <option value="Intermediate">Intermediate (1-3 years)</option>
                        <option value="Advanced">Advanced (3-5 years)</option>
                        <option value="Expert">Expert (5+ years)</option>
                      </select>
                    ) : (
                      <span className="experience-badge">{taskerData.experience}</span>
                    )}
                  </div>
                  
                  <div className="info-item">
                    <label>Hourly Rate</label>
                    {isEditing ? (
                      <input
                        type="number"
                        name="hourlyRate"
                        value={editData.hourlyRate}
                        onChange={handleChange}
                        min="10"
                        max="200"
                      />
                    ) : (
                      <span className="rate">${taskerData.hourlyRate}/hr</span>
                    )}
                  </div>
                  
                  <div className="info-item full-width">
                    <label>Bio</label>
                    {isEditing ? (
                      <textarea
                        name="bio"
                        value={editData.bio}
                        onChange={handleChange}
                        rows="4"
                      />
                    ) : (
                      <p className="bio-text">{taskerData.bio}</p>
                    )}
                  </div>
                  
                  <div className="info-item full-width">
                    <label>Skills</label>
                    {isEditing ? (
                      <textarea
                        name="skills"
                        value={editData.skills}
                        onChange={handleChange}
                        rows="3"
                      />
                    ) : (
                      <div className="skills-container">
                        {taskerData.skills.split(', ').map((skill, index) => (
                          <span key={index} className="skill-tag">{skill}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Account Information */}
              <div className="profile-section">
                <h2>Account Information</h2>
                <div className="info-grid">
                  <div className="info-item">
                    <label>Member Since</label>
                    <span>{new Date(taskerData.joinDate).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  
                  <div className="info-item">
                    <label>Account Status</label>
                    <span className="status-active">Active</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact & Address */}
            <div className="profile-right-column">
              {/* Personal Information */}
              <div className="profile-section">
                <h2>Contact Information</h2>
                <div className="info-grid">
                  <div className="info-item">
                    <label>Full Name</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="fullName"
                        value={editData.fullName}
                        onChange={handleChange}
                      />
                    ) : (
                      <span>{taskerData.fullName}</span>
                    )}
                  </div>
                  
                  <div className="info-item">
                    <label>Email</label>
                    {isEditing ? (
                      <input
                        type="email"
                        name="email"
                        value={editData.email}
                        onChange={handleChange}
                      />
                    ) : (
                      <span>{taskerData.email}</span>
                    )}
                  </div>
                  
                  <div className="info-item">
                    <label>Phone Number</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="phoneNumber"
                        value={editData.phoneNumber}
                        onChange={handleChange}
                      />
                    ) : (
                      <span>{taskerData.phoneNumber}</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Address Information */}
              <div className="profile-section">
                <h2>Address Information</h2>
                <div className="info-grid">
                  <div className="info-item full-width">
                    <label>Address Line 1</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="addressLine1"
                        value={editData.addressLine1}
                        onChange={handleChange}
                      />
                    ) : (
                      <span>{taskerData.addressLine1}</span>
                    )}
                  </div>
                  
                  <div className="info-item full-width">
                    <label>Address Line 2</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="addressLine2"
                        value={editData.addressLine2}
                        onChange={handleChange}
                      />
                    ) : (
                      <span>{taskerData.addressLine2 || 'N/A'}</span>
                    )}
                  </div>
                  
                  <div className="info-item">
                    <label>City</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="city"
                        value={editData.city}
                        onChange={handleChange}
                      />
                    ) : (
                      <span>{taskerData.city}</span>
                    )}
                  </div>
                  
                  <div className="info-item">
                    <label>State/Province</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="stateProvince"
                        value={editData.stateProvince}
                        onChange={handleChange}
                      />
                    ) : (
                      <span>{taskerData.stateProvince}</span>
                    )}
                  </div>
                  
                  <div className="info-item">
                    <label>Postal Code</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="postalCode"
                        value={editData.postalCode}
                        onChange={handleChange}
                      />
                    ) : (
                      <span>{taskerData.postalCode}</span>
                    )}
                  </div>
                  
                  <div className="info-item">
                    <label>Country</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="country"
                        value={editData.country}
                        onChange={handleChange}
                      />
                    ) : (
                      <span>{taskerData.country}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskerProfile;