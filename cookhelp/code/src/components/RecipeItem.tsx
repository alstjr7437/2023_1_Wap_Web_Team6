import React from "react";
import styled from "styled-components";

const StyledRecipeItem = styled.div`
  // 레시피 각각의 아이템
  background-color: white;
  padding: 0.5em;
  border: solid;
  border-bottom: 0.5px;
  border-color: var(--gray-color);
`;

// props 인터페이스 정의
interface RecipeItemProps {
  RecipeId: number;
  RecipeTitle: string;
  RecipeImg: string;
  RecipeWriter: string;
  RecipeDate: string;
}

const RecipeItem = ({ RecipeId, RecipeTitle, RecipeImg, RecipeWriter, RecipeDate }: RecipeItemProps) => {
  return (
  <StyledRecipeItem>
    <div>{RecipeId} {RecipeTitle} {RecipeWriter} {RecipeDate}</div>
  </StyledRecipeItem>
  );
};

export default RecipeItem;
