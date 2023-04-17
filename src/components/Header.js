import React from "react";


function HeaderButton1() {
  return (
    <button>Home</button>
  );
}

function HeaderButton2() {
  return (
    <button>Norifications</button>
  );
}

function HeaderButton3() {
  return (
    <button>Messages</button>
  );
}
function HeaderButton4() {
  return (
    <button>Tweet</button>
  );
}

function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search..." />
    </form>
  );
}

export default function Header() {
  return (
    <div>
      <HeaderButton1 />
      <HeaderButton2 />
      <HeaderButton3 />
      <SearchBar />
      <HeaderButton4 />
    </div>
  );
}