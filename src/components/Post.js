import React from "react";
import PropTypes from "prop-types";
import profilePicture from "./profile.jpg" 

function Post(props){
  return (
    <React.Fragment>
      <img src={profilePicture} alt=""></img>
      <h2>{props.postName}</h2>
      <h3>{props.postText}</h3>
    </React.Fragment>
  )
}

Post.propTypes = {
  postName: PropTypes.string.isRequired,
  postText: PropTypes.string,
}

export default Post;