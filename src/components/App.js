import './App.css';
import React from "react";
import { ChakraProvider } from '@chakra-ui/react'
import Header from "./Header";
import UserProfile from "./UserProfile";
import NewsFeed from "./NewsFeed";
import AboutMe from "./AboutMe";
import ProfilesList from "./ProfilesList";


function App() {
  return (
    <ChakraProvider>
    <React.Fragment>
      <Header />
      <UserProfile />
      <AboutMe />
      <NewsFeed /> 
      <ProfilesList />
    </React.Fragment>
    </ChakraProvider>
  );
}

export default App;
