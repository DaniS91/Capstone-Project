import React from "react";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { Link } from "react-router-dom";
import TransFlag2 from "./../img/transflag2.png"


function Header(){
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="static"
        >
        <Toolbar>
          <img src={TransFlag2}
            height="30px"
            alt="transgender flag"></img>
          <Link to="/" style={{textDecoration: "none"}}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TransGuide
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
    </React.Fragment>
  );
}

export default Header;