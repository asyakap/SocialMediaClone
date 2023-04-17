import React from "react";
// import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'


function HeaderButton1() {
  return (
    <button class="NavButton">Home</button>
  );
}

function HeaderButton2() {
  return (
    <button class="NavButton">Norifications</button>
  );
}

function HeaderButton3() {
  return (
    <button class="NavButton">Messages</button>
  );
}
function HeaderButton4() {
  return (
    <button class="TweetButton">Tweet</button>
  );
}

function SearchBar() {
  return (
    <form>
      <input class="SearchBar" type="text" placeholder="Search..." />
    </form>
  );
}

export default function Header() {
  return (
    <div class="App-header">
      <HeaderButton1 />
      <HeaderButton2 />
      <HeaderButton3 />
      <HeaderButton4 />
      <SearchBar />
    </div>
    

  );
}
