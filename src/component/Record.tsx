import React from "react";

const RecordDisplay: React.FC = () => {
  const mockData = [
    { date: "2023-01-01", income: 90000 },
    { date: "2023-02-02", income: 110000 },
    { date: "2023-03-03", income: 87000 },
    // 以下、さらにデータを追加できます
  ];

  const determineStatus = (income: number) => {
    if (income > 108000) {
      return "扶養外";
    } else if (income > 85000) {
      return "所得税（月割り）非課税外";
    } else {
      return "所得税未満";
    }
  };

  return (
    <div className="min-h-screen bg-yellow-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-md w-5/6 md:w-3/4 lg:w-1/2">
        <div className="mb-8 flex justify-between items-center">
          <span className="flex-1 text-center">日付</span>
          <span className="flex-1 text-center">合計金額</span>
          <span className="flex-1 text-center">判定</span>
        </div>

        {mockData.map((record, index) => (
          <div key={index} className="mb-2 flex justify-between items-center">
            <div className="flex-1 p-2 border rounded-md text-center mx-1  bg-gray-100">
              {record.date}
            </div>
            <div className="flex-1 p-2 border rounded-md text-center mx-1  bg-gray-100">
              {record.income}円
            </div>
            <div className="flex-1 p-2 border rounded-md text-center mx-1  bg-gray-100">
              {determineStatus(record.income)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecordDisplay;
