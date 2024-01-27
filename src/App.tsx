import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

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
          <GameHeading />
          <div className="flex flex-col space-y-5 md:flex-row md:space-y-0 md:space-x-5">
            <PlatformSelector />
            <SortSelector />
          </div>
          <GameGrid />
        </div>
      </div>
    </>
  );
}

export default App;
