import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopPage from "./component/TopPage";
import SignUp from "./component/SignUp";
import SignIn from "./component/SignIn";
import Home from "./component/Home";
import Form from "./component/Form";
import Record from "./component/Record";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/record" element={<Record />} />
        {/* 他のページのルーティングもこちらに追加 */}
      </Routes>
    </Router>
  );
};

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
