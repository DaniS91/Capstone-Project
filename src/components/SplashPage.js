import React from "react";
import SignIn from "./SignIn";

import { Typography, Box} from "@mui/material";

function SplashPage(){

  return (
    <Box sx={{margin: '20px'}}>
      <Typography component="h3" variant="h3">Welcome to TransGuide!</Typography>
      <Typography variant="h4" component="h4" sx={{ flexGrow: 1 }}>Find accessible and inclusive businesses, while contributing to a comprehensive directory of businesses and reviews that fosters community empowerment. Help us build a supportive platform to share valuable resources within the community.</Typography>  
      <SignIn />
    </Box>
  )
}

export default SplashPage;