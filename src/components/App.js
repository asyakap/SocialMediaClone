import "./App.css";
import React from "react";
import Header from "./Header";
import UserProfile from "./UserProfile";
import NewsFeed from "./NewsFeed";
import AboutMe from "./AboutMe";
import ProfilesList from "./ProfilesList";

function App() {
  return (
    <React.Fragment>
      <div class="box1">
        <Header />
      </div>
 
      <div class="box2">
        <div class="box5">
          <UserProfile />
          </div>
          <div class="box5">
          <AboutMe />
        </div>
      </div>
      <div class="box4">
        <NewsFeed />
      </div>

      <div class="box3">
        <ProfilesList />
      </div>
    </React.Fragment>
  );
}

export default App;
