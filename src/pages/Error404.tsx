import React from "react";
import { NavLink } from "react-router-dom";

export default function Error404() {
  return (
    <div className="bg-red-950 text-white min-h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-2xl pb-1">404 Not Found (from react-router)</h1>
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
      </div>
    </div>
  );
}
