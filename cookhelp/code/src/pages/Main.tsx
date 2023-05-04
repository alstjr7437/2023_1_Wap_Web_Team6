import NavBar from "../components/NavBar";
import styled from "styled-components";
import MainCarousel from "../components/MainCarousel";
import FoodGenreCards from "../components/FoodGenreCards";
import KoreanFood from "../assets/한식.jpg";
import ChineseFood from "../assets/중식.jpg";
import WesternFood from "../assets/양식.jpg";
import JapaneseFood from "../assets/일식.jpg";

// const CardSlide = () => {
//   return (
//     <SlideWrapper>
//       <Carousel>
//       <Grid container spacing={2}> {/*간격 2px*/}
//         <Grid item xs={6} sm={3}>
//           <Paper>
//             <CardItem />
//           </Paper>
//         </Grid>
//         <Grid item xs={6} sm={3}>
//           <Paper>Item 2</Paper>
//         </Grid>
//         <Grid item xs={6} sm={3}>
//           <Paper>Item 3</Paper>
//         </Grid>
//         <Grid item xs={6} sm={3}>
//           <Paper>Item 4</Paper>
//         </Grid>
//       </Grid>
//     </Carousel>
//     </SlideWrapper>
//   );
// };

const AllCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  max-width: 1000px;
  margin: auto;
  margin-top: 50px;
  gap: 20px;
`;

const Main = () => {
  return (
    <div>
      <NavBar />
      <MainCarousel />
      <AllCardWrapper>
        <FoodGenreCards genreName="한식" imgSrc={KoreanFood} />
        <FoodGenreCards genreName="중식" imgSrc={ChineseFood} />
        <FoodGenreCards genreName="일식" imgSrc={JapaneseFood} />
        <FoodGenreCards genreName="양식" imgSrc={WesternFood} />
      </AllCardWrapper>
    </div>
  );
};

export default Main;
