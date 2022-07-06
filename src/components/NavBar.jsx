import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ token }) => {
  return (
    <nav>
      <h1>Stranger's Things </h1>
      {token ? <Link to="/home">Home </Link> : <Link to="/">Log In </Link>}
      {token ? null : <Link to="/register">Register </Link>}
      <Link to="/posts">Posts </Link>
      <Link to="/profile">Profile </Link>
      {token ? <Link to="/logout">Log Out </Link> : null}
    </nav>
  );
};

export default NavBar;
