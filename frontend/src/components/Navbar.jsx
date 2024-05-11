import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const isUserSignedIn = !!localStorage.getItem("token");
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/login  ");
  };
  return (
    <nav className="flex justify-around p-3 border-b border-zinc-800 items-center bg-[#1a1a1a] text-zinc-300">
      <Link to={"/"}>
        <h1 className="text-3xl">Logo</h1>
      </Link>

      {isUserSignedIn ? (
        <ul className="flex gap-6">
          <Link to={"/account"}>Account</Link>
          <li><button onClick={handleSignOut}>Sign Out</button></li>
        </ul>
      ) : (
        <ul className="flex gap-6">
          <Link to={"/signup"}>Sign Up</Link>
          <Link to={"/login"}>Login</Link>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
