import React from "react";
import { AppBar, Box, Toolbar, Typography } from '@mui/material/';
import { Link } from "react-router-dom";
import TransFlag3 from "./../img/transflag3.png"

function Header(){
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <img src={TransFlag3}
            height="30px"
            alt="transgender flag"
            style={{margin:'10px'}}></img>
          <Link to="/" style={{textDecoration: "none"}}>
            <Typography variant="h6" sx={{ flexGrow: 1, color: "whitesmoke" }}>
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