import React from "react";
import styled from "styled-components";
import { RecipeItemProps } from "../components/type";

const StyledRecipeItem = styled.div`
  // 레시피 각각의 아이템
  background-color: white;
  padding: 0.5em;
  border: solid;
  border-bottom: 0.5px;
  border-color: var(--gray-color);
`;
const ListWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
const ListId = styled.div`
  width: 4%;
`;
const ListTitle = styled.div`
  width: 52%;
`;
const ListWriter = styled.div`
  width: 15%;
`;
const ListDate = styled.div`
  width: 10%;
`;

const RecipeItem = ({ RecipeId, RecipeTitle, RecipeImg, RecipeWriter, RecipeDate }: RecipeItemProps) => {
  return (
  <StyledRecipeItem>
    <ListWrapper>
      <ListId>{RecipeId}</ListId>
      <ListTitle>{RecipeTitle}</ListTitle>
      <ListWriter>{RecipeWriter}</ListWriter>
      <ListDate>{RecipeDate}</ListDate>
    </ListWrapper>
  </StyledRecipeItem>
  );
};

export default RecipeItem;
