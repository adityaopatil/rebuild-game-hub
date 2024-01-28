import React from "react";
import { Game } from "../entities/Game";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emojis from "./Emojis";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <div className="group relative overflow-hidden dark:bg-gray-700 lg:aspect-none transition-transform transform scale-100 hover:scale-105 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
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
            <Link to={`/games/${game.slug}`}>
              <h2 className="text-3xl font-bold tracking-tight my-6">
                {game.name}
              </h2>
            </Link>
            <Emojis rating={game.rating_top} />
          </div>
          <CriticScore score={game.metacritic} />
        </div>
      </div>
    </>
  );
};

export default GameCard;
