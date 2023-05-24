import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RecipeItemProps } from "../components/type";

const StyledRecipeItem = styled.div`
  // 레시피 각각의 아이템
  background-color: white;
  padding: 0.5em;
  border: solid;
  border-bottom: 0.5px;
  border-color: var(--gray-color);
  cursor: pointer;
`;
const ListWrapper = styled(Link)`
  display: flex;
  gap: 1rem;
  text-decoration-line: none;
  color: black;
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

const RecipeItem = ({
  RecipeId,
  RecipeTitle,
  RecipeImg,
  RecipeWriter,
  RecipeDate,
  to,
}: RecipeItemProps) => {
  return (
    <StyledRecipeItem>
      <ListWrapper to={to}>
        <ListId>{RecipeId}</ListId>
        <ListTitle>{RecipeTitle}</ListTitle>
        <ListWriter>{RecipeWriter}</ListWriter>
        <ListDate>{RecipeDate}</ListDate>
      </ListWrapper>
    </StyledRecipeItem>
  );
};

export default RecipeItem;
