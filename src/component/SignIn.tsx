// SignIn.tsx
import React from "react";
import { useState } from "react";
import axios from "axios";

const SignIn: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://app-alteradnaka.azurewebsites.net/login",
        {
          username,
          email,
          password,
        }
      );

      // ここでトークンを保存するなどの処理を行います
      // 例: localStorage.setItem('token', response.data.token);
      console.log("Login successful", response);
    } catch (error) {
      // エラーハンドリング
      console.error("Login failed", error);
    }
  };
  return (
    <div className="min-h-screen bg-yellow-50 flex items-center justify-center">
      <div className="bg-white p-12 rounded-md shadow-md w-4/5 md:w-2/3 lg:w-1/2">
        <form
          onSubmit={e => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <div className="mb-8">
            <input
              className="bg-gray-100 p-3 rounded-md w-full mb-4 placeholder-gray-500"
              placeholder="username"
              onChange={e => setUsername(e.target.value)}
            />
            <input
              className="bg-gray-100 p-3 rounded-md w-full mb-4 placeholder-gray-500"
              placeholder="mail"
              onChange={e => setEmail(e.target.value)}
            />
            <input
              className="bg-gray-100 p-3 rounded-md w-full mb-4 placeholder-gray-500"
              type="password"
              placeholder="password"
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="text-center">
            <button className="bg-blue-300 hover:bg-gray-400 text-white p-3 rounded-md w-full">
              ログイン
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
