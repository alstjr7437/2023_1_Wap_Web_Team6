import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import Container from "../UI/Container";
import Btn from "../UI/Btn";
import {
  DeckData,
  fetchRecipeCardsProps,
  StepItemProps,
} from "../components/type";
import MenuIcon from "@mui/icons-material/Menu";

import imgSrc from "../assets/양식.jpg";

const StyledContainer = styled(Container)`
  width: 80%;
  max-width: 80rem;
  position: relative;
`;
const StyledStepItem = styled.div`
  display: flex;
  margin: 1rem 1rem;

  > img {
    width: 150px;
    height: 100px;
    object-fit: cover;
  }
`;
const StyledBtnWrap = styled.div`
  width: 100%;
  position: relative;
`;
const StyledBtn = styled(Btn)`
  position: absolute;
  top: -4rem;
  right: 0.8rem;
`;
const IngredientWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const StyledImg = styled.img`
  max-width: 500px;
  max-height: 150px;
  width: auto;
  height: auto;
`;
const MenuBtn = styled(Btn)`
  position: absolute;
  top: -4rem;
  right: 15%;
`;

const StepItem = ({ card, img }: StepItemProps & { img?: string }) => {
  const { title, detail } = card;
  //   console.log(card);
  return (
    <StyledStepItem>
      <div>
        <h2>{title}</h2>
        <div>{detail}</div>
      </div>
      {img && <img src={`data:image/png;base64, ${img}`} />}
    </StyledStepItem>
  );
};

const RecipeDetail = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [RecipeData, setRecipeData] = useState();
  const [Ingredient, setIngredient] = useState([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [cards, setCards] = useState<fetchRecipeCardsProps[]>([]);
  const [recipeImg, setRecipeImg] = useState();
  const [imageData, setImageData] = useState<string[]>([]);

  useEffect(() => {
    const fetchRecipeHelper = async () => {
      try {
        const res = await fetch(
          `http://ec2-3-34-47-79.ap-northeast-2.compute.amazonaws.com:8081/board/api/recipehelper/${params.recipe_idx}`
        );
        const data = await res.json();

        if (!res.ok) {
          console.log("error : ", data.description);
          return;
        }

        // console.log(data);

        //data 저장
        setRecipeData(data.result[0]);
        setIngredient(data.recipeStuffArray);
        setTitle(data.result[0].recipe_title);
        setDate(data.result[0].formatted_date);
        const newGenerateCard = generateCards(data.result[0]);
        setCards(newGenerateCard);
      } catch (error) {
        console.log("Error!", error);
      }
    };
    const fetchImage = async () => {
      try {
        const response = await fetch(
          `http://ec2-3-34-47-79.ap-northeast-2.compute.amazonaws.com:8081/board/api/recipehelperimg/${params.recipe_idx}`
        );
        if (!response.ok) {
          throw new Error("요청이 실패하였습니다.");
        }

        const data = await response.json();
        // console.log("data : ", data);
        setRecipeImg(data.recipe_img);
        const tmpImgArray = generateImgArray(data);
        setImageData(tmpImgArray);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchRecipeHelper();
    fetchImage();
  }, []);

  const generateCards = (deckData: DeckData) => {
    const newCards = [];

    for (let i = 1; i <= 10; i++) {
      const recipeImg = deckData[`recipe_img_${i}`];
      const rd = deckData[`rd_${i}`];
      const timerRd = deckData[`timer_rd_${i}`];
      const titleRd = deckData[`recipe_step_${i}`];

      if (recipeImg || rd || timerRd || titleRd) {
        const card = {
          listNums: i,
          title: titleRd,
          pic: recipeImg,
          detail: rd,
          timer: timerRd !== null ? parseInt(timerRd) : null,
        };
        newCards.push(card);
      }
    }

    return newCards;
  };
  const generateImgArray = (data: string[]) => {
    let newImgArray = [];
    for (let key in data) {
      // console.log("key : ", key);
      if (data.hasOwnProperty(key)) newImgArray.push(data[key]);
    }
    // console.log("newImgArray : ", newImgArray);
    return newImgArray;
  };

  const navigateToHelper = () => {
    navigate(`/recipe/${params.recipe_idx}`);
  };

  const navToList = () => {
    navigate("/recipe_list");
  };

  return (
    <>
      <NavBar />
      <StyledContainer>
        <StyledBtnWrap>
          <StyledBtn onClick={navigateToHelper}>요리도우미</StyledBtn>
        </StyledBtnWrap>
        <h1>{title}</h1>
        <div>{date}</div>
        <IngredientWrap>
          <h3>요리 재료</h3>
          <div>{Ingredient}</div>
        </IngredientWrap>
        {recipeImg && (
          <StyledImg
            src={`data:image/png;base64,${recipeImg}`}
            alt="레시피 대표 이미지"
          />
        )}
        {cards.map((elm, idx) => (
          <StepItem key={idx} card={elm} img={imageData[idx + 1]} />
        ))}
      </StyledContainer>
      <StyledBtnWrap>
        <MenuBtn onClick={navToList}>
          목록　
          <MenuIcon fontSize="small" />
        </MenuBtn>
      </StyledBtnWrap>
    </>
  );
};

export default RecipeDetail;
