import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      {error && <p>{error}</p>}
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {games.map((game) => (
          <div key={game.id} className="group relative">
            <GameCard game={game} />
          </div>
        ))}
      </div>
    </>
  );
};

export default GameGrid;
