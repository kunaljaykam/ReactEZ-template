import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Routes} from "react-router-dom";
import "./App.scss";
import Main from "./containers/Main";
import About from './pages/about/About'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </Router>
  );
}

export default App;
