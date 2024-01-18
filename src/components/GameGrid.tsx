import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatform";
import GameCard from "./GameCard";
import GameCardSekeleton from "./GameCardSekeleton";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { games, error, isLoading } = useGames(gameQuery, [gameQuery]);
  console.log(isLoading);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      {error && <p>{error}</p>}
      <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
        {isLoading &&
          skeletons.map((s, i) => (
            <div key={i} className="group-relative">
              <GameCardSekeleton />
            </div>
          ))}
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
