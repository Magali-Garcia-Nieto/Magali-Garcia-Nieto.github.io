import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from"./components/Education";

function App() {
  return (
  <Router>
        <>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/skills" element={<Skills/>}/>
            <Route path="/experience" element={<Experience/>}/>
            <Route path="/education" element={<Education/>}/>
          </Routes>
        </>
      </Router>
      
  );
}

export default App;
