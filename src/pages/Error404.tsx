import React from "react";
import { NavLink } from "react-router-dom";

export default function Error404() {
  return (
    <div className="error-404 flex justify-center items-center min-h-screen text-white bg-red-950">
      <div className="text-center">
        <h1 className="pb-1 text-2xl">404 Not Found (from react-router)</h1>
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
      </div>
    </div>
  );
}
