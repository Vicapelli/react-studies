import React from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Main from "./components/main"
import Game from "./components/game"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route element = { <Main /> } path="/" exact />
            <Route element = { <Game /> } path="/game" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
