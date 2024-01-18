import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GameCard from "./components/GameCard";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <>
      <div className="app-container">
        <div className="navbar">
          <NavBar />
        </div>
        <div className="aside-col">
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </div>
        <div className="main-col">
          <PlatformSelector />
          <GameGrid selectedGenre={selectedGenre} />
        </div>
      </div>
    </>
  );
}

export default App;
