import React from "react";
import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Team from "./components/Team";
import Details from "./components/Detail";

function App() {
  return (
    <div>
      <header>
        <Link to="/"> Home</Link>
        <Link to="/team"> Team</Link>
        <Link to="/details">Details</Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
