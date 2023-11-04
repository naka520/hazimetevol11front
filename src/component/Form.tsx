import React, { useState } from "react";

const IncomeRegistration: React.FC = () => {
  const [entries, setEntries] = useState([0]);

  const addEntry = () => {
    setEntries(prev => [...prev, prev.length]);
  };

  const removeEntry = (indexToRemove: number) => {
    setEntries(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="min-h-screen bg-yellow-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-md w-5/6 md:w-3/4 lg:w-2/3">
        <div className="mb-8 flex justify-between items-center">
          {["カテゴリ", "時間", "時給", "日にち"].map((header, index) => (
            <span key={index} className="flex-1 text-center">
              {header}
            </span>
          ))}
          <span className="w-8 h-8"></span>
        </div>

        {entries.map((_, index) => (
          <div key={index} className="mb-2 flex justify-between items-center">
            {new Array(4).fill(0).map((_, idx) => (
              <input
                key={idx}
                type="text"
                className="flex-1 p-2 border rounded-md text-center mx-1"
                placeholder="..."
              />
            ))}
            <button
              className="ml-2 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"
              onClick={() => removeEntry(index)}
            >
              -
            </button>
          </div>
        ))}

        <div className="mt-6 text-center">
          <button
            className="bg-blue-300 text-blue-700 rounded-md px-4 py-2 shadow-md mr-4"
            onClick={addEntry}
          >
            フォームを追加
          </button>
          <button className="bg-blue-500 text-white rounded-md px-4 py-2 shadow-md">
            登録
          </button>
        </div>
      </div>
    </div>
  );
};

export default IncomeRegistration;
