import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSekeleton from "./GameCardSekeleton";
import React from "react";
import useGameQueryStore from "../store";

const GameGrid = () => {
  const {
    data: games,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useGames();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  //Here we count number of games on that page and add it to the total
  const fetchGamesCount =
    games?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  //dataLength --> Here we have to set the total number of items we have
  // fetched so far

  //hasMore --> here we pass if we have a nextPage. This function expects a boolean
  //But our hasNextPage returns boolean | undefined. So we add !!hasNextPage to convert it to actual boolean value
  // So if the value is undefined it is converted to boolean false

  //next --> to fetchNextPage

  if (!games) return null;

  if (error) return <p>{error.message}</p>;

  return (
    <InfiniteScroll
      dataLength={fetchGamesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<span>Loading...</span>}
    >
      <div className="mt-[50px] grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
        {isLoading &&
          skeletons.map((s, i) => (
            <div key={i} className="group-relative">
              <GameCardSekeleton />
            </div>
          ))}
        {games.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <div key={game.id} className="group relative">
                <GameCard game={game} />
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default GameGrid;
