import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header className="header">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/locations">Locations</Link>
      </header>
    </div>
  );
}

export default Header;