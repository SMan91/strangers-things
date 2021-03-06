import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Logout = ({ setToken }) => {
  let navigate = useNavigate();
  return (
    <div>
      <form
        onSubmit={async (e) => {
          localStorage.clear();
          setToken(null);
          navigate("/");
        }}
      >
        <h2>Are you sure you want to log out?</h2>
        <button type="submit">Yes</button>
        <Link to="/home">No</Link>
      </form>
    </div>
  );
};

export default Logout;
