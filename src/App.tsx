import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GameCard from "./components/GameCard";
import GenreList from "./components/GenreList";

function App() {
  return (
    <>
      <div className="app-container">
        <div className="navbar">
          <NavBar />
        </div>
        <div className="aside-col">
          <GenreList />
        </div>
        <div className="main-col">
          <GameGrid />
        </div>
      </div>
    </>
  );
}

export default App;
