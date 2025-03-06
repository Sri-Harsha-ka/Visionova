import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        user,
        password,
      });
      alert(res.data.message);
    } catch (error) {
      alert("Login Failed!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <div className="bg-green-200 p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter User"
            className="w-full p-2 mb-3 border rounded"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full p-2 mb-3 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-green-600 text-white p-2 w-full rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;