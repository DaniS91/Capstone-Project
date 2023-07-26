import React from "react";
import Header from "./Header";
import BusinessControl from "./BusinessControl";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(){
  return ( 
    <Router>
      <Header />
      <Routes>
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/" element={<BusinessControl />} />
      </Routes>
    </Router>
  );
}

export default App;