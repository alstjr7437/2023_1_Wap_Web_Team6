import React from "react";
import styled from "styled-components";
import Navbar from "../components/NavBar";
import Container from "../UI/Container";
import searchLogo from "../assets/searchLogo.png";
import RecipeItem from "../components/RecipeItem";

const RecipeListContainer = styled(Container)`
  max-width: 60rem;
  width: 70%;
  height: 30rem;
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
const ListContainer = styled.div`
  // 레시피 검색 목록
  background-color: var(--light-gray-color);
  width: 90%;
  height: 500px;
`;

// 나중에 type.ts 파일에 옮기기
interface searchData {
  id: number;
  img: string;
  title: string;
  writer: string;
  date: string;
  views?: number;
}

const RecipeList = () => {
  const searchTmpData: searchData[] = [
    {
      id: 0,
      img: "https://cdn.pixabay.com/photo/2022/12/29/01/01/image-7683986_960_720.jpg",
      title: "떡볶이",
      writer: "작성자",
      date: "2023/05/04",
      views: 1534,
    },
    {
      id: 1,
      img: "https://cdn.pixabay.com/photo/2017/06/17/16/20/waffles-2412628_960_720.jpg",
      title: "와플",
      writer: "작성자",
      date: "2023/05/05",
      views: 14,
    },
    {
      id: 2,
      img: "https://cdn.pixabay.com/photo/2018/06/04/13/36/cold-noodles-3453218_960_720.jpg",
      title: "냉면",
      writer: "작성자",
      date: "2023/05/06",
      views: 579,
    },
  ];

  return (
    <>
      <Navbar />
      <RecipeListContainer>
        <LogoBox>
          <StyleSearchLogo>
            <LogoImg src={searchLogo}></LogoImg>
          </StyleSearchLogo>
          <SearchInput placeholder="레시피 검색"></SearchInput>
        </LogoBox>

        <ListContainer>
          {searchTmpData.map((ele: searchData) => {
            return <RecipeItem 
            RecipeId={ele.id}
            RecipeTitle={ele.title}
            RecipeImg={ele.img}
            RecipeWriter={ele.writer}
            RecipeDate={ele.date}
            />;
          })}
        </ListContainer>
      </RecipeListContainer>
    </>
  );
};

export default RecipeList;
