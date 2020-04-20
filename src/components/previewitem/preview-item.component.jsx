import React from 'react'
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


// const PreviewItem = ({id, name, price, imageUrl}) => {
//     return (
//         <div className="container">
//             <div className="image" style={{backgroundImage: `url(${imageUrl})`}}
//              >
//             {name}<p>The price is {price} </p> 
//             </div>
//         </div>
//     )
// }

// export default PreviewItem




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: 'grey '
  },
  root: {
    maxWidth: 345,
  },
  media: {
      height: '75px'
  }
}));

const PreviewItem = ({id, name, price, imageUrl}) =>{
  const classes = useStyles();

  return (
    <div >

<Card className={classes.root} variant="outlined">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="100"
          image="https://media.istockphoto.com/photos/selection-of-american-food-picture-id931308812?k=6&m=931308812&s=612x612&w=0&h=bIbWqdW3LEc9Q5_WnqYG0blqrKp9zW7Qc36Gq35FTaE="
          title="Contemplative Reptile"
          className={classes.media}
        />
        <CardContent>
         
            {name} only $ {price}
     
            {price}
      
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </div>
  );
  }

export default PreviewItem