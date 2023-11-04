import React from "react";
import { useNavigate } from "react-router-dom";
const HomePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-yellow-50 flex items-center justify-center">
      <div className="bg-white p-12 rounded-md shadow-md w-4/5 md:w-2/3 lg:w-1/2">
        <div className="mb-8 text-center"></div>
        <div className="bg-blue-400 text-white rounded-full p-3 mb-6 w-3/4 mx-auto text-center shadow-md">
          お帰りなさい Userさん
        </div>

        {/* ボタン群 */}
        <div className="flex flex-col items-center space-y-4">
          <button
            className="bg-blue-300 hover:bg-gray-400 text-white rounded-md px-6 py-3 shadow-md w-3/4"
            onClick={() => navigate("/form")}
          >
            収入登録
          </button>
          <button
            className="bg-blue-300 hover:bg-gray-400 text-white rounded-md px-6 py-3 shadow-md w-3/4"
            onClick={() => navigate("/record")}
          >
            収入計算結果
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
