import React, { useState } from "react";
import profilestyle from "../Profile/Profile.module.css";
import basestyle from "../Base.module.css";


function UserProfile() {
  const [userDetails, setUserDetails] = useState({
    username: " ",
    email: " ",
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (e) => {
    // Handle image upload logic
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send user details and image to the server or update the profile
  };

  return (
    <div className={profilestyle.profile}>
      <h1>Submit Your Query</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={userDetails.username}
          placeholder="Name"
          onChange={(e) =>
            setUserDetails({ ...userDetails, username: e.target.value })
          }
        />
        <br/>
        <input
          type="email"
          name="email"
          value={userDetails.email}
          placeholder="Email"
          onChange={(e) =>
            setUserDetails({ ...userDetails, email: e.target.value })
          }
        />
        <br/>
       <textarea rows="4" placeholder="Detail text">
        </textarea>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
        {imagePreview && <img src={imagePreview} alt="Preview" />}
        <br/>
        <button type="submit" className={basestyle.button_common}>Save</button>
      </form>
    </div>
  );
}

export default UserProfile;
