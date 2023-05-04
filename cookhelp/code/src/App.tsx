import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Join from "./pages/Join";
import Recipe from "./pages/Recipe";
import RecipeList from "./pages/RecipeList";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/recipe_list" element={<RecipeList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
