import './App.css';
import React from "react";
import Header from "./Header";
import UserProfile from "./UserProfile";
import NewsFeed from "./NewsFeed";
import AboutMe from "./AboutMe";
import ProfilesList from "./ProfilesList";


function App() {
  return (
    <React.Fragment>
      <Header />
      <UserProfile />
      <AboutMe />
      <NewsFeed /> 
      <ProfilesList />
    </React.Fragment>

  );
}

export default App;
