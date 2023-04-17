import React from "react";
import Post from "./Post";
import profilePicture from "./profile.jpg" 

const newsFeedList = [
  {
    profilePicture,
    postName: 'Post1',
    postText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    profilePicture,
    postName: 'Post2',
    postText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    profilePicture,
    postName: 'Post3',
    postText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    profilePicture,
    postName: 'Post4',
    postText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    profilePicture,
    postName: 'Post5',
    postText: "Lorem ipsum dolor sit amet."
  },
  {
    profilePicture,
    postName: 'Post6',
    postText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
];

function WhatsHappening() {
  return (
    <form>
      <input type="text" placeholder="What's Happening?..." />
    </form>
  );
}

function NewsFeed() {
  return (
    <React.Fragment>
      <WhatsHappening />
      <hr />
      {newsFeedList.map((post, index) =>
        <Post postName={post.postName}
          postText={post.postText}
          key={index} />
      )}
    </React.Fragment>
  );
}
  
  export default NewsFeed;