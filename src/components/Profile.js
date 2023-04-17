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

// for future reference: picture might be a string (path) or Object, use console.log to check around for it and React might let you know, and prop types aren't required so Eliot, don't get hung up