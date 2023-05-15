import styled from "styled-components";
import FoodGenreCards from "./FoodGenreCards";
import KoreanFood from "../assets/한식.jpg";
import ChineseFood from "../assets/중식.jpg";
import WesternFood from "../assets/양식.jpg";
import JapaneseFood from "../assets/일식.jpg";

const AllCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  max-width: 1000px;
  margin: auto;
  margin-top: 50px;
  gap: 20px;
`;

const RecommendCard = () => {
  return (
    <AllCardWrapper>
      <FoodGenreCards genreName="한식" imgSrc={KoreanFood} />
      <FoodGenreCards genreName="중식" imgSrc={ChineseFood} />
      <FoodGenreCards genreName="일식" imgSrc={JapaneseFood} />
      <FoodGenreCards genreName="양식" imgSrc={WesternFood} />
    </AllCardWrapper>
  );
};

export default RecommendCard;
