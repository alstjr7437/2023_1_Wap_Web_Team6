import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import Slider from "../components/Slider";
import { RecipeCard, ListProps } from "../components/type";
import RecommendCard from "../components/RecommendCard";

const Wrap = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;

  /* @media screen and (max-width: 800px) {
    margin-top: 2rem;
    flex-direction: column;
    align-items: center;
  } */
`;

const RightSideBar = styled.div`
  background-color: var(--light-gray-color);

  max-width: 250px;
  width: 25%;
  margin: 0;

  /* @media screen and (max-width: 800px) {
    max-width: 100%;
    width: 600px;
    max-height: 50%;
    height: 150px;
  } */
`;
const LeftSideBar = styled.div`
  background-color: var(--dark-green-color);
  color: white;
  width: 25%;
  max-width: 250px;
`;
const ListTitle = styled.ol`
  font-weight: var(--Bold-font);
  font-size: 18px;
  margin: 1rem 1rem;
`;
const StyledList = styled.li`
  font-size: 1rem;
  margin-bottom: 5px;
  list-style-type: decimal;
  cursor: pointer;
  /* padding-left: 1rem; */
`;
const Main = styled.div`
  background-color: var(--mint-color);
  width: 50%;
`;
const IngredientItem = styled.li`
  font-size: 1rem;
  margin-bottom: 5px;
  list-style: none;
  padding-left: 1rem;
`;
const Footer = styled.footer`
  background-color: var(--green-color);
  color: white;
  margin: 0 auto;
  margin-top: 2rem;
  display: flex;
  justify-content: center;

  width: 1500px;
  max-width: 90%;
  height: 180px;
`;

const List = ({ stepDetail, listNum, setSelectIdx }: ListProps) => {
  const hadleListItem = (e: React.MouseEvent<HTMLLIElement>) => {
    console.log(e.currentTarget.value);
    setSelectIdx(e.currentTarget.value);
  };

  return (
    <StyledList key={listNum} value={listNum} onClick={hadleListItem}>
      {stepDetail}
    </StyledList>
  );
};

const Recipe = ({ cardData }: { cardData: RecipeCard }) => {
  const [deck, setDeck] = useState<RecipeCard>(cardData);
  const [selectIdx, setSelectIdx] = useState<number>(1);
  // console.log(deck[0].cards.length);
  // console.log("deck", deck);
  // console.log(selectIdx);

  let listContent = deck.cards.map((card) => (
    <List
      key={card.ListNum}
      stepDetail={card.stepTitle}
      listNum={card.ListNum}
      setSelectIdx={setSelectIdx}
    />
  ));

  let IngredientContent = deck.Ingredient.map((item, index) => (
    <IngredientItem key={index}>{item}</IngredientItem>
  ));

  return (
    <div>
      <NavBar />
      <Wrap>
        <RightSideBar>
          <ListTitle>요리 순서</ListTitle>
          {listContent}
        </RightSideBar>
        <Main>
          <Slider recipeList={deck} selectIdx={selectIdx} />
        </Main>
        <LeftSideBar>
          <ListTitle>요리 재료</ListTitle>
          {IngredientContent}
        </LeftSideBar>
      </Wrap>
      <Footer>
        <RecommendCard />
      </Footer>
    </div>
  );
};

export default Recipe;
