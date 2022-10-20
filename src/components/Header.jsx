import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Redux Blog</h1>
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="addPost">
            <li>Add Post</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
