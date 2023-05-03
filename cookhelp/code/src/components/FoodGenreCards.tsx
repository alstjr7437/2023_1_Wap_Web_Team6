import { Card } from '@mui/material'
import styled from "styled-components";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CardWrapper = styled.div`
  flex-basis: 0;
  flex-grow: 1;
`;

// JSX에서는 props를 객체 형태로 전달하기 때문에 props의 타입도 객체 형태로 정의해줘야 함!!
type FoodGenreCardsProps = {
  genreName: string;
  imgSrc: string;
}

function FoodGenreCards(props: FoodGenreCardsProps) {
  return (
    <CardWrapper>
      <Card sx={{ maxWidth: 200 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={props.imgSrc}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.genreName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Sample Paragraph
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </CardWrapper>
  );
};

export default FoodGenreCards;
