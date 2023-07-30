import React from "react";
import Header from "./Header";
import BusinessControl from "./BusinessControl";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";

function App(){
  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#231c35',
        dark: '#070e48',
      },
      secondary: {
        main: '#c690d4',
      },
      error: {
        main: '#E74C3C',
      },
      warning: {
        main: '#F89406',
      },
      info: {
        main: '#3ca1af',
      },
      success: {
        main: '#68C3A3',
      },
      background: {
        default: '#e0e0e0',
        paper: '#e0e0e0',
      },
    },
    components: {
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
      },
    },
  });
  return ( 
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/" element={<BusinessControl />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;