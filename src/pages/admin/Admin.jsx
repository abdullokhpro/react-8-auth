import React from "react";
import "./admin.scss";
import { Navigate, useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div>
      <h1>admin</h1>
      <button onClick={handleLogOut}>Log out</button>
    </div>
  );
};

export default Admin;
