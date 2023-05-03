import Carousel from "react-material-ui-carousel";
import { Paper } from '@mui/material'
import styled from "styled-components";

const CarouselWrapper = styled.div`
  //align-items: center;
  //justify-content: center;
  width: 60%;
  margin: auto; 
  margin-top: 50px;
`;

const CarouselItemImg = styled.img`
  height: 350px;
  width: 100%;
  //min-width: 400px;
  margin-bottom: -10px;
  object-fit:cover;
`;

const MainCarousel = () => {
    return (
      <CarouselWrapper>
        <Carousel>
          <Paper>
            <CarouselItemImg src="https://thumbs.dreamstime.com/b/healthy-food-selection-healthy-food-selection-fruits-vegetables-seeds-superfood-cereals-gray-background-121936825.jpg" />
            <h2>완전 건강해 보이는 요리</h2>
            <p>완전 건강해 보이는 요리의 레시피입니다. 닭가슴살과 아보카도, 방울토마토, 연어, 어쩌구</p>
          </Paper>
          <Paper>
            <CarouselItemImg src="https://www.chickensaladchick.com/assets/mainstage/mainstage-img.jpg" />
            <h2>치킨 샐러드 샌드위치</h2>
            <p>치킨 샐러드 샌드위치의 레시피입니다. 통밀 베이글에 양상추와 토마토, 어쩌구를 넣어서 </p>
          </Paper>
          <Paper>
            <CarouselItemImg src="./temp.png" />
            <h2>Recipe 3</h2>
            <p>This is sample paragraph ! </p>
          </Paper>
        </Carousel>
      </CarouselWrapper>
    );
  };

  export default MainCarousel;