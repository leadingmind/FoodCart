import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


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
      <Fab color="secondary" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <AddIcon />
      </Fab>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><Button variant="contained">Save for Later</Button></MenuItem>
        <MenuItem onClick={handleClose}><Button variant="contained" color="secondary">Add to Cart</Button></MenuItem>
        <MenuItem onClick={handleClose}><Button variant="contained" color="primary">Buy Now</Button></MenuItem>
      </Menu>
    </div>
  );
}
