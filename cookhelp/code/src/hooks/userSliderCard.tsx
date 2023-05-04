import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { RecipeListType, RecipeCard } from "../components/type";

const useSliderCard = (data: RecipeListType[]) => {
  const [card, setCard] = useState(data); // recipe 데이터
  const [cardIdx, setCardIdx] = useState(0); // 레시피 순서

  const goBack = () => {
    setCardIdx((prevIdx) => (prevIdx <= 0 ? card.length - 1 : prevIdx - 1));
  };
  const goForward = () => {
    setCardIdx((prevIdx) => (prevIdx >= card.length - 1 ? 0 : prevIdx + 1));
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.code === "ArrowLeft" || event.code === "ArrowUp") goBack();
    else if (event.code === "ArrowRight" || event.code === "ArrowDown")
      goForward();
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [data, goForward, goBack]);

  return {
    card,
    setCard,
    cardIdx,
    setCardIdx,
    goForward,
    goBack,
  };
};

export default useSliderCard;
