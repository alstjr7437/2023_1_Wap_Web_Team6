import NavBar from "../components/NavBar";
import styled from "styled-components";
import MainCarousel from "../components/MainCarousel";
import RecommendCard from "../components/RecommendCard";

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

const Main = () => {
  return (
    <div>
      <NavBar />
      <MainCarousel />
      <RecommendCard />
    </div>
  );
};

export default Main;
