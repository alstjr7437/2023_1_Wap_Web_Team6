import { Card } from '@mui/material'
import styled from "styled-components";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CardWrapper = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  margin-bottom: 30px;
`;

const CardTitle = styled.div`
  font-weight: var(--semiBold-font);
  margin-top: -5px;
`;

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
              <CardTitle>{props.genreName}</CardTitle>
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