import React from "react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emojis from "./Emojis";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md dark:bg-gray-900 lg:aspect-none group-hover:opacity-75 shadow-lg ring-1 ring-black ring-opacity-5">
        <img
          src={getCroppedImageUrl(game.background_image)}
          alt={game.name}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
        <div className="my-5 mx-5 flex justify-between">
          <div>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <h2 className="text-3xl font-bold tracking-tight my-6">
              {game.name}
            </h2>
            <Emojis rating={game.rating_top} />
          </div>
          <CriticScore score={game.metacritic} />
        </div>
      </div>
    </>
  );
};

export default GameCard;
