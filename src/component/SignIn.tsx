// SignIn.tsx
import React from "react";

const SignIn: React.FC = () => {
  return (
    <div className="min-h-screen bg-yellow-50 flex items-center justify-center">
      <div className="bg-white p-12 rounded-md shadow-md w-4/5 md:w-2/3 lg:w-1/2">
        <div className="mb-8">
          <input
            className="bg-gray-100 p-3 rounded-md w-full mb-4 placeholder-gray-500"
            placeholder="username"
          />
          <input
            className="bg-gray-100 p-3 rounded-md w-full mb-4 placeholder-gray-500"
            placeholder="mail"
          />
          <input
            className="bg-gray-100 p-3 rounded-md w-full mb-4 placeholder-gray-500"
            type="password"
            placeholder="password"
          />
        </div>
        <div className="text-center">
          <button className="bg-blue-300 hover:bg-gray-400 text-white p-3 rounded-md w-full">
            ログイン
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
