import React from "react";
import SignIn from "./SignIn";

import { Typography, Box} from "@mui/material";

function SplashPage(){

  return (
    <Box>
      <Typography component="h2" variant="h2">Welcome to TransGuide!</Typography>
      <Typography variant="h4" component="h4" sx={{ flexGrow: 1 }}>Reviews</Typography>  
      <SignIn />
    </Box>
  )
}

export default SplashPage;