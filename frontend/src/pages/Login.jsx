import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/users/register").then((res) => {
      console.log(res.data);
    });
  }, []);

  const handleLogin = async(e) => {
    e.preventDefault();

    try{
      const response = await axios.post("http://localhost:3000/users/login", {username, password})
      const token = response.data.token;
      alert("Login successful")
      setUserName("")
      setPassword("")
      navigate("/account")
      window.location.reload()
      localStorage.setItem("token", token)
    }catch(err){
      console.log(err);
    }
  }


  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <h1 className="text-3xl font-semibold">Login</h1>
      <form
        className="max-w-[500px] w-full h-[400px] bg-zinc-200/60 shadow-lg px-5 py-6 mt-4 flex flex-col gap-y-8 justify-center"
        onSubmit={handleLogin}
      >
        <div className="flex flex-col gap-y-3">
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
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
