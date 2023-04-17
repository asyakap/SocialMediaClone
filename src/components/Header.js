import React from "react";


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
    <div class="SearchBar">
    <form>
      <input type="text" placeholder="Search..." />
    </form>
    </div>
  );
}

export default function Header() {
  return (
    <div class="App-header">
      <HeaderButton1 />
      <HeaderButton2 />
      <HeaderButton3 />
      <SearchBar />
      <HeaderButton4 />
    </div>

  );
}