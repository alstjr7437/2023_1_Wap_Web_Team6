import React, { useState, ReactNode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Join from "./pages/Join";
import Recipe from "./pages/Recipe";
import RecipeList from "./pages/RecipeList";
import cardData from "./tmpDB/tmpRecipeDB";
import { RecipeCard } from "./components/type";

function App() {
  const [deck, setDeck] = useState<RecipeCard[]>(cardData);

  let content: ReactNode = <Route path="#" element={<></>} />;
  if (deck.length > 0) {
    content = deck.map((card, index) => {
      // console.log(`/recipe/${index}`);
      return (
        <Route
          key={card.id}
          path={`/recipe/${index}`}
          element={<Recipe key={card.id} cardData={deck[index]} />}
        />
      );
    });
  }
  const NotFound = () => {
    return <h1>잘못된 주소 접근</h1>;
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          {/* <Route path="/recipe" element={<Recipe />} /> */}
          {content}
          <Route path="/recipe_list" element={<RecipeList />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
