import React, { useState } from "react";

interface Entry {
  category: string;
  hours: number;
  hourlyRate: number;
  workDays: number;
}

const IncomeRegistration: React.FC = () => {
  const [entries, setEntries] = useState<Entry[]>([
    { category: "", hours: 0, hourlyRate: 0, workDays: 0 },
  ]);

  const addEntry = () => {
    setEntries([
      ...entries,
      { category: "", hours: 0, hourlyRate: 0, workDays: 0 },
    ]);
  };

  const removeEntry = (indexToRemove: number) => {
    setEntries(entries.filter((_, index) => index !== indexToRemove));
  };

  const handleInputChange = (
    index: number,
    field: keyof Entry,
    value: string
  ) => {
    const newEntries = [...entries];
    // カテゴリーの場合はそのままstringを設定し、それ以外の数値フィールドにはNumberで変換した値を設定
    if (field === "category") {
      (newEntries[index][field] as string) = value;
    } else {
      (newEntries[index][field] as number) = Number(value);
    }
    setEntries(newEntries);
  };
  const calculateTotalIncome = (): number => {
    return entries.reduce((acc, entry) => {
      return acc + entry.hours * entry.hourlyRate * entry.workDays;
    }, 0);
  };

  const getIncomeStatusMessage = (): string => {
    const totalIncome = calculateTotalIncome();
    if (totalIncome >= 108000) {
      return "合計金額10万8千円以上で社会保険の扶養を超えます。";
    } else if (totalIncome >= 85000) {
      return "合計金額8万5千円以上で所得税非課税の月割り範囲外です。";
    }
    return "非課税（月割り）かつ社会保険の扶養範囲内です。";
  };

  const handleSubmit = () => {
    // APIへのPOSTリクエストのロジックを実装する
  };

  return (
    <div className="min-h-screen bg-yellow-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-md w-5/6 md:w-3/4 lg:w-2/3">
        {/* ... */}
        <div className="bg-blue-400 text-white rounded-full p-3 mb-6 w-3/4 mx-auto text-center shadow-md">
          今月稼ぐ予定の収入を教えてください！
        </div>
        <div className="mb-8 flex justify-between items-center">
          {["カテゴリ", "１日の勤務時間", "時給", "勤務日数"].map(
            (header, index) => (
              <span key={index} className="flex-1 text-center">
                {header}
              </span>
            )
          )}
          <span className="w-8 h-8"></span>
        </div>
        {entries.map((entry, index) => (
          <div key={index} className="mb-2 flex justify-between items-center">
            <input
              type="text"
              className="flex-1 p-2 border rounded-md text-center mx-1 bg-gray-100"
              placeholder="カテゴリ"
              value={entry.category}
              onChange={e =>
                handleInputChange(index, "category", e.target.value)
              }
            />
            <input
              type="number"
              className="flex-1 p-2 border rounded-md text-center mx-1 bg-gray-100"
              placeholder="時間"
              value={entry.hours}
              onChange={e => handleInputChange(index, "hours", e.target.value)}
            />
            <input
              type="number"
              className="flex-1 p-2 border rounded-md text-center mx-1 bg-gray-100"
              placeholder="時給"
              value={entry.hourlyRate}
              onChange={e =>
                handleInputChange(index, "hourlyRate", e.target.value)
              }
            />
            <input
              type="number"
              className="flex-1 p-2 border rounded-md text-center mx-1 bg-gray-100"
              placeholder="日数"
              value={entry.workDays}
              onChange={e =>
                handleInputChange(index, "workDays", e.target.value)
              }
            />
            <button
              className="ml-2 w-8 h-8 bg-red-200 rounded-full flex items-center justify-center"
              onClick={() => removeEntry(index)}
            >
              -
            </button>
          </div>
        ))}
        {/* ... */}
        <div className="mt-6 text-center">
          <p className="text-lg font-bold mb-4">{`合計金額: ¥${calculateTotalIncome().toLocaleString()}`}</p>
          <p className="text-md mb-4">{getIncomeStatusMessage()}</p>
          <button
            className="bg-blue-300 hover:bg-blue-200 text-white rounded-md px-4 py-2 shadow-md mr-4"
            onClick={addEntry}
          >
            フォームを追加
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-400 text-white rounded-md px-4 py-2 shadow-md"
            onClick={handleSubmit}
          >
            登録
          </button>
        </div>
      </div>
    </div>
  );
};

export default IncomeRegistration;
