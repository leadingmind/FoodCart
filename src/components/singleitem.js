import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {Paper} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  }
});

export default function SingleItem() {
  const classes = useStyles();

  return (
  <Paper>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://image.freepik.com/free-photo/jelly-filling-cakes-cutting-board-with-cup-tea-tea-strainers-spices-citrus-fruits_176474-83008.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Lizard
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over
          6,000 species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
  </Paper>
  );
}
