import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { useState } from "react";
import ExpandableText from "../components/ExpandableText";
import GameAttribute from "../components/GameAttribute";
import GameTrailers from "../components/GameTrailers";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading)
    return (
      <svg
        className="animate-spin h-8 w-8 mr-3 border-t-2 border-white rounded-full"
        viewBox="0 0 24 24"
      ></svg>
    );

  if (error || !game) throw error;

  return (
    <>
      <div className="mt-[50px] mx-4 grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2">
        <div>
          <h2 className="text-5xl font-bold my-4">{game.name}</h2>
          <ExpandableText children={game.description_raw} />
          <GameAttribute game={game} />
        </div>
        <div>
          <GameTrailers slug={game.slug} />
          <GameScreenshots slug={game.slug} />
        </div>
      </div>
    </>
  );
};

export default GameDetailPage;
