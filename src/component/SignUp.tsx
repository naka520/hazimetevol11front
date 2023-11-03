import React from "react";

const SignUp: React.FC = () => {
  return (
    <div className="min-h-screen bg-yellow-50 flex items-center justify-center">
      <div className="bg-white p-12 rounded-md shadow-md w-4/5 md:w-2/3 lg:w-1/2">
        <div className="mb-4 bg-gray-100">
          <input
            className="bg-gray-100 w-full p-3 border rounded-md shadow-sm"
            type="text"
            placeholder="username"
          />
        </div>
        <div className="mb-4  bg-gray-100">
          <input
            className="bg-gray-100 w-full p-3 border rounded-md shadow-sm"
            type="text"
            placeholder="mail"
          />
        </div>
        <div className="mb-6  bg-gray-100">
          <input
            className="bg-gray-100 w-full p-3 border rounded-md shadow-sm"
            type="password"
            placeholder="password"
          />
        </div>
        <div className="text-center">
          <button
            className="bg-blue-300 hover:bg-gray-400 text-white p-3 rounded-md w-full"
            onClick={() => {
              // アカウント作成処理を記述
            }}
          >
            アカウント作成
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
