import React, { useState } from "react";

const SignUp: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const handleSignUp = async () => {
    try {
      const response = await fetch("http://localhost:8000/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          username: username,
        }),
      });

      if (!response.ok) {
        throw new Error("サーバーエラー");
      }

      const data = await response.json();
      console.log(data);
      // 登録成功後の処理（ログインページへのリダイレクトなど）
    } catch (error) {
      console.error(error);
      // エラー処理（エラーメッセージの表示など）
    }
  };
  return (
    <div className="min-h-screen bg-yellow-50 flex items-center justify-center">
      <div className="bg-white p-12 rounded-md shadow-md w-4/5 md:w-2/3 lg:w-1/2">
        <div className="mb-4 bg-gray-100">
          <input
            className="bg-gray-100 w-full p-3 border rounded-md shadow-sm"
            type="text"
            placeholder="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4  bg-gray-100">
          <input
            className="bg-gray-100 w-full p-3 border rounded-md shadow-sm"
            type="text"
            placeholder="mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6  bg-gray-100">
          <input
            className="bg-gray-100 w-full p-3 border rounded-md shadow-sm"
            type="password"
            placeholder="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="text-center">
          <button
            className="bg-blue-300 hover:bg-gray-400 text-white p-3 rounded-md w-full"
            onClick={handleSignUp}
          >
            アカウント作成
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
