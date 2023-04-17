import React from "react";
import Profile from "./Profile";
import profilePicture from "./profile.jpg" 

const mainProfilesList = [
  {
    profilePicture,
    name: 'Profile1',
    link: "Link1"
  },
  {
    profilePicture,
    name: 'Profile2',
    link: "Link2"
  },
  {
    profilePicture,
    name: 'Profile3',
    link: "Link3"
  }
];

function ProfilesList() {
  return (
    <React.Fragment>
      <hr/>
      {mainProfilesList.map((profile, index) =>
        <Profile name={profile.name}
          profilePicture
          profileLink={profile.profileLink}
          key={index}/>
      )}
    </React.Fragment>
  );
}

export default ProfilesList;