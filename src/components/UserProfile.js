import React from "react";
import userProfilePicture from "./profile.jpg";


function UserProfile() {
  return (
    <React.Fragment>
      <div class="container">
      <div class="userProfile">
      <img src={userProfilePicture} alt=""></img>
      <h1>User Profile Name</h1>
      <a href="Link1">Link1 | </a>
      <a href="Link2">Link2 | </a>
      <a href="Link3">Link3</a>
      </div>
      </div>
    </React.Fragment>
  );
}

export default UserProfile;