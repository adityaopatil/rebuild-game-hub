import useGenres from "../hooks/useGenres";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatform();

  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);

  const genre = genres?.results.find((g) => g.id === genreId);

  const platForm = platforms?.results.find((p) => p.id === platformId);

  const heading = `${platForm?.name || ""} ${genre?.name || ""} Games`;
  return (
    <div className="mt-10 mb-8">
      <p className="text-6xl font-bold">{heading}</p>
    </div>
  );
};

export default GameHeading;
