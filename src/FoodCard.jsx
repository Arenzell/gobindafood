import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

// const { htmlToText } = require('html-to-text');
// import { htmlToText } from 'html-to-text';


const FoodCard = (props) => {
  const text = props.content.replace(/<[^>]*>/g, '')

  let maxsize = 200;
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={props.img}
            alt={props.alt_text}
          />
          <CardContent sx={{ bgcolor: '#362417', color: "#F1DABF" }}>
            <Typography gutterBottom variant="h5" component="div">
              {props.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ color: "#F1DABF" }}>
              {text.substring(0, maxsize)}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  )
}

export default FoodCard;



// text.substring(0, maxsize)