import React from "react";
import { useNavigate } from "react-router-dom";

const TopPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-yellow-50 flex items-center justify-center">
      <div className="bg-white p-12 rounded-md shadow-md w-4/5 md:w-2/3 lg:w-1/2">
        <div className="mb-8 text-center">
          <p className="text-2xl ">今月いくら稼ぐ？</p>
        </div>
        <div className="mb-4 text-center">
          <button
            className="bg-blue-300 hover:bg-gray-400 text-white p-3 rounded-md w-full mb-2"
            onClick={() => {
              // ログインページへの遷移を記述
            }}
          >
            ログイン
          </button>
          <button
            className="bg-blue-300 hover:bg-gray-400 text-white p-3 rounded-md w-full"
            onClick={() => {
              // アカウント作成ページへの遷移を記述
              navigate("/signup"); // SignUpページへの遷移
            }}
          >
            アカウント作成
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopPage;
