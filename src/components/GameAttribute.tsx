import React from "react";
import { Game } from "../entities/Game";
import CriticScore from "./CriticScore";
import { Genre } from "../entities/Genre";

interface Props {
  game: Game;
}

const GameAttribute = ({ game }: Props) => {
  const headerStyle = "font-bold text-2xl inline-block mr-2 text-gray-500";
  const listStyle = "hover:text-gray-200 text-lg";

  return (
    <div className="my-4 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2">
      <div>
        <h1 className={headerStyle}>Platforms</h1>
        <ul>
          {game.parent_platforms.map((p) => (
            <li className={listStyle} key={p.platform.id}>
              {p.platform.name}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1 className={headerStyle}>Metascore</h1>
        <div className="mt-1 flex justify-between">
          <CriticScore score={game.metacritic} />
        </div>
      </div>
      <div>
        <h1 className={headerStyle}>Genres</h1>
        <ul>
          {game.genres.map((g) => (
            <li className={listStyle} key={g.id}>
              {g.name}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1 className={headerStyle}>Publishers</h1>
        <ul>
          {game.publishers.map((pub) => (
            <li className={listStyle} key={pub.id}>
              {pub.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GameAttribute;
