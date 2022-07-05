import React from "react";
import { Link } from "react-router-dom";

const Logout = () => {
  return (
    <div>
      <h2>Are you sure you want to log out?</h2>
      <button onClick={localStorage.clear()}>Yes</button>
      <Link to="/home">No</Link>
    </div>
  );
};

export default Logout;
