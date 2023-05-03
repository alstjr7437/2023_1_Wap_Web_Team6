import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import Slider from "../components/Slider";
import cardData from "../tmpDB/tmpRecipeDB";
import { RecipeCard } from "../components/type";

const Wrap = styled.div`
  margin-top: 1rem;
  display: flex;
`;

const RightSideBar = styled.div`
  background-color: var(--gray-color);

  width: 25%;
  height: 100%;
  margin: 0;
  /* height: 100%;
  position: fixed;
  z-index: 1;
  top: 7rem;
  left: 0; */
`;

const LeftSideBar = styled.div`
  background-color: var(--dark-green-color);

  width: 25%;

  /* height: 100%;
  position: fixed;
  z-index: 1;
  top: 7rem;
  left: 0; */
`;

const List = styled.ol`
  font-size: 1rem;
  margin-bottom: 5px;
`;

const Main = styled.div`
  background-color: var(--mint-color);

  width: 50%;
`;

const Recipe = () => {
  const [deck, setDeck] = useState<RecipeCard[]>(cardData);
  console.log(deck[0]);
  return (
    <div>
      <NavBar />
      <Wrap>
        <RightSideBar>
          <div>요리 순서</div>
          <List>1. 재료 준비</List>
          <List>2. 썰기</List>
          <List>3. 볶기</List>
          <List>4. 밥 넣기</List>
          <List>5. 밥 먹기</List>
        </RightSideBar>
        <Main>
          <Slider recipeList={deck[0]} />
        </Main>
        <LeftSideBar>
          <div>요리 재료</div>
          <List>밥</List>
          <List>소세지</List>
          <List>김치</List>
          <List>간장</List>
          <List>참기름</List>
        </LeftSideBar>
      </Wrap>
    </div>
  );
};

export default Recipe;
