import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";

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
    <div className="px-2">
      <h2>{game.name}</h2>
      <p>{game.description_raw}</p>
    </div>
  );
};

export default GameDetailPage;
