import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <h1>Stranger's Things </h1>
      <Link to="/">Home </Link>
      <Link to="/posts">Posts </Link>
      <Link to="/profile">Profile </Link>
      {/* <Link to="/signin">Sign In </Link> */}
    </nav>
  );
};

export default NavBar;
