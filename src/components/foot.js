// import {styled} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ShopIcon from '@material-ui/icons/Shop';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Foot(){
  const classes = useStyles();

  return (
    <div>
      <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<TurnedInNotIcon />}
        >
          Save for Later
    </Button>
    <Button
      variant="contained"
      color="secondary"
      className={classes.button}
      startIcon={<AddShoppingCartIcon />}
    >
      Add to Cart
    </Button>
    <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<ShopIcon />}
          >
            Buy Now
    </Button>
    </div>
  );
}
  