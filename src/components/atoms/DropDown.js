import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function DropDown(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
 
  };
  const handleClose = () => {
    //setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
       {props.title}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <a href="/category/machinery" style={{textDecoration:'none'}} >
        <MenuItem  onClick={handleClose}>Machinery</MenuItem>
        </a>
        <a href="/category/electronics" style={{textDecoration:'none'}} >
        <MenuItem onClick={handleClose}>Consumer Electronics</MenuItem>
        </a>
        <a href="/category/home_appliance" style={{textDecoration:'none'}} >
        <MenuItem  onClick={handleClose}>Home Appliances</MenuItem>
        </a>
        <a href="/category/vehicle" style={{textDecoration:'none'}} >
        <MenuItem  onClick={handleClose}>Vehicle & Accessories</MenuItem>
        </a>
        <a href="/category/entertainment" style={{textDecoration:'none'}} >
        <MenuItem  onClick={handleClose}>Sports & Entertainment</MenuItem>
        </a>
        <a href="/category/apparel" style={{textDecoration:'none'}} >
        <MenuItem  onClick={handleClose}>Apparel & Fabric</MenuItem>
        </a>
      </Menu>
    </div>
  );
}