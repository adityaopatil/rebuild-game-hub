import React from "react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md dark:bg-gray-800 lg:aspect-none group-hover:opacity-75 border-b border-gray-300">
        <img
          src={getCroppedImageUrl(game.background_image)}
          alt={game.name}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
        <div className="my-5 mx-5 flex justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">{game.name}</h2>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
          </div>
          <CriticScore score={game.metacritic} />
        </div>
      </div>
    </>
  );
};

export default GameCard;
