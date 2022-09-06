import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Game from "./Game";
import Marketplace from "./Marketplace";
export default function RouterPage() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/market" element={<Marketplace />} />
        </Routes>
      </Router>
    </div>
  );
}
