import React from "react";
import { Route, Routes } from "react-router-dom";
import Waves from "../../Components/Waves";
import Home from "../Home";
import NavBar from '../../Components/NavBar'

const RootNavigation = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      <Waves />
    </div>
  );
};

export default RootNavigation;
