import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TransFlag from "./../img/transflag.png"
import TransFlag2 from "./../img/transflag2.png"
import TransFlag3 from "./../img/transflag3.png"

function Header(){
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <img src={TransFlag2}
            height="30px"
            alt="transgender flag"></img>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TransGuide
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </React.Fragment>
  );
}

export default Header;