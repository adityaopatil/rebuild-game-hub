import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import DarkModeButton from "./components/DarkModeButton";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="col-span-2">
          <NavBar />
        </div>
        <div className="hidden lg:block lg:col-span-1 bg-yellow-400">Aside</div>
        <div className="col-span-2 lg:col-span-1">
          <GameGrid />
        </div>
      </div>
    </>
  );
}

export default App;
