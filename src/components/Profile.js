import React from "react";
import PropTypes from "prop-types";
import profilePicture from "./profile.jpg" 

function Profile(props){
  return (
    <React.Fragment>
      <img src={profilePicture} alt=""></img>
      <h1>{props.name}</h1>
      <a href={props.profileLink}>Link</a>
    </React.Fragment>
  )
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  profileLink: PropTypes.string,
}

export default Profile;