import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopImg from "../assets/images/cta-logo-one.svg";
import users from "./user.json";
import { useAuth } from "./AuthContext"; // ✅ import auth hook

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth(); // ✅ get auth setter

  const handleLogin = () => {
    const matchedUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (matchedUser) {
      setIsAuthenticated(true); // ✅ set user as authenticated
      alert("Login successful!");
      navigate("/"); // ✅ redirect to home
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen w-full justify-center bg-login-bg bg-no-repeat bg-cover bg-top">
      <div className="flex h-full flex-col w-[700px] px-[30px] text-center mx-auto pt-20">
        <img className="px-6 w-full mb-4" src={TopImg} alt="top logo" />

        <input
          type="email"
          placeholder="Email"
          value={email}
          className="mb-3 p-3 rounded bg-white bg-opacity-90 text-black focus:outline-none"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          className="mb-4 p-3 rounded bg-white bg-opacity-90 text-black focus:outline-none"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="text-xl mb-4 py-4 rounded font-bold uppercase bg-login-button text-white hover:bg-opacity-80 transition"
        >
          Get All There
        </button>

        {error && <p className="text-red-500 mb-3">{error}</p>}

        <p className="tracking-wider text-sm mb-5 text-white">
          Welcome to Disney+ Hotstar Clone! <br />
          Sign in to explore a world of entertainment. <br />
          Enjoy your favorite movies, shows, and more. <br />
          Let’s get started!
        </p>
      </div>
    </div>
  );
};

export default Login;
