import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/users/register").then((res) => {
      console.log(res.data);
    });
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/users/register", { email, username, password })
      .then(() => {
        alert("Registration Successful");
        setEmail("");
        setUserName("");
        setPassword("");
        navigate("/login");
      })
      .catch((err) => {
        console.log("Unable to register user", err);
      });
  };

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <h1 className="text-3xl font-semibold">Sign Up</h1>
      <form
        className="max-w-[500px] w-full h-[400px] bg-zinc-200/60 shadow-lg px-5 py-6 mt-4 flex flex-col gap-y-8 justify-center"
        onSubmit={handleRegister}
      >
        <div className="flex flex-col gap-y-3">
          <input
            className="py-3 px-6 rounded border border-gray-50 focus:outline-none focus:border focus:border-gray-400"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="py-3 px-6 rounded border border-gray-50 focus:outline-none focus:border focus:border-gray-400"
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            className="py-3 px-6 rounded border border-gray-50 focus:outline-none focus:border focus:border-gray-400"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="inline-block w-full bg-blue-500 mt-6 py-3 rounded text-white hover:bg-blue-600 transition-all duration-200 font-semibold"
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
