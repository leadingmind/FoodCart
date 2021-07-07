import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import ShopIcon from "@material-ui/icons/Shop";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";

export default function ButtonList() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Fab
        color="secondary"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <AddIcon />
      </Fab>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Button variant="contained" startIcon={<TurnedInNotIcon />}>
            Save for Later
          </Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<AddShoppingCartIcon />}
          >
            Add to Cart
          </Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Button variant="contained" color="primary" startIcon={<ShopIcon />}>
            Order Now
          </Button>
        </MenuItem>
      </Menu>
    </div>
  );
}
