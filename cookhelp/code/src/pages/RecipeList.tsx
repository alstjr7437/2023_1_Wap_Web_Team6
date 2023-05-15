import React from "react";
import styled from "styled-components";
import Navbar from "../components/NavBar";
import Container from "../UI/Container";
import searchLogo from "../assets/searchLogo.png";
import RecipeItem from "../components/RecipeItem";
import { searchData } from "../components/type";
import searchTmpData from "../tmpDB/tmpRecipeListDB";
import Button from '@mui/material/Button';

const RecipeListContainer = styled(Container)`
  max-width: 60rem;
  width: 70%;
  height: 30rem;
  margin-bottom: 1rem;
`;
const StyleSearchLogo = styled.div`
  width: 34px;
  padding-right: 1rem;
  padding-top: 1rem;
`;
const LogoImg = styled.img`
  width: 100%;
`;
const LogoBox = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
`;
const SearchInput = styled.input`
  margin-top: 0.5rem;
`;
const ListBox = styled.div`
  // 레시피 검색 목록
  background-color: var(--light-gray-color);
  width: 90%;
  height: 500px;
`;
const RegisterBtn = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: var(--green-color);
  color: #fff;
  border: none;
  border-radius: 3px;

  margin: auto;
  display: block;
  
  &:hover {
    background-color: var(--dark-green-color);
  }

`;
const ListWrapper = styled.div`

`;

const RecipeList = () => {
  return (
    <>
      <Navbar />
      <ListWrapper>
        <RecipeListContainer>
          <LogoBox>
            <StyleSearchLogo>
              <LogoImg src={searchLogo}></LogoImg>
            </StyleSearchLogo>
            <SearchInput placeholder="레시피 검색"></SearchInput>
          </LogoBox>

          <ListBox>
            {searchTmpData.map((ele: searchData) => {
              return <RecipeItem
                RecipeId={ele.id}
                RecipeTitle={ele.title}
                RecipeImg={ele.img}
                RecipeWriter={ele.writer}
                RecipeDate={ele.date}
              />;
            })}
          </ListBox>
        </RecipeListContainer>

        <RegisterBtn>레시피 등록</RegisterBtn>
      </ListWrapper>
    </>
  );
};

export default RecipeList;
