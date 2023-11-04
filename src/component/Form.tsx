import React, { useState } from "react";
import { useEffect } from "react";
interface HelloResponse {
  message: string;
}

const IncomeRegistration: React.FC = () => {
  const [entries, setEntries] = useState([0]);
  const [apiResponse, setApiResponse] = useState<HelloResponse | null>(null);
  const addEntry = () => {
    setEntries(prev => [...prev, prev.length]);
  };

  const removeEntry = (indexToRemove: number) => {
    setEntries(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  useEffect(() => {
    // ローカルのFastAPIサーバーに対してGETリクエストを行う
    fetch("http://localhost:8000/hello")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        setApiResponse(data); // Save the data in state
      })
      .catch(error => console.error("Error fetching data: ", error));

    if (apiResponse) {
      // It's safe to access properties of apiResponse here
      console.log(apiResponse.message);
    } else {
      // Handle the case where apiResponse is null (e.g., display a loading indicator)
      console.log("apiResponse is not available yet.");
    }
  }, []); // Empty dependency array means this effect will only run once, similar to componentDidMount

  return (
    <div className="min-h-screen bg-yellow-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-md w-5/6 md:w-3/4 lg:w-2/3">
        <div className="bg-blue-400 text-white rounded-full p-3 mb-6 w-3/4 mx-auto text-center shadow-md">
          今月稼ぐ予定の収入を教えてください！
        </div>
        <div className="bg-blue-400 text-white rounded-full p-3 mb-6 w-3/4 mx-auto text-center shadow-md">
          {apiResponse ? apiResponse.message : "Loading..."}
        </div>
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
                className="flex-1 p-2 border rounded-md text-center mx-1  bg-gray-100"
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
            className="bg-blue-300 hover:bg-gray-300 text-white rounded-md px-4 py-2 shadow-md mr-4"
            onClick={addEntry}
          >
            フォームを追加
          </button>
          <button className="bg-blue-500 hover:bg-gray-300 text-white rounded-md px-4 py-2 shadow-md">
            登録
          </button>
        </div>
      </div>
    </div>
  );
};

export default IncomeRegistration;
