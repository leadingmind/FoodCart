import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import Navlist from "./navlist";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
};

function Head(props) {
  const { classes } = props;

  const [sideDrawer, setSideDrawer] = useState(false);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            onClick={() => setSideDrawer(true)}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.grow}>
            FoodCart
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        open={sideDrawer}
        onClose={() => setSideDrawer(false)}
        onOpen={() => setSideDrawer(true)}
      >
        <div
          tabIndex={0}
          role="button"
          onClick={() => setSideDrawer(false)}
          onKeyDown={() => setSideDrawer(false)}
        >
          <div className={classes.list}>
            <Navlist />
          </div>
        </div>
      </SwipeableDrawer>
    </div>
  );
}

Head.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Head);
