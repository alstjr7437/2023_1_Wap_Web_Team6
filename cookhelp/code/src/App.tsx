import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Join from "./pages/Join";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
