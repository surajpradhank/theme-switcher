import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import ThemeProvider from "./Components/ThemeProvider";
import SimpleSwitch from "./Components/SimpleSwitch";

const App = () => {

  return (
    <Router>
      <Navbar title="Theme Switch" />

      <div className="container">
        <Routes>
          <Route exact path="/" element={<ThemeProvider />}>
          </Route>
          <Route exact path="/SimpleSwitch" element={<SimpleSwitch />} >
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
