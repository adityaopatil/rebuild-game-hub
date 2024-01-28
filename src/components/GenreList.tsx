import useGenres from "../hooks/useGenres";
import { Genre } from "../entities/Genre";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;

  if (isLoading)
    return (
      <svg
        className="animate-spin h-8 w-8 mr-3 border-t-2 border-white rounded-full"
        viewBox="0 0 24 24"
      ></svg>
    );

  return (
    <>
      <div className="mb-4">
        <h2 className="text-4xl font-bold leading-7 sm:truncate sm:text-4xl sm:tracking-tight">
          Genres
        </h2>
      </div>
      <ul className="space-y-3">
        {data?.results.map((g) => (
          <li key={g.id} className="flex items-center">
            <img
              className="w-10 h-10 rounded-md mr-2 object-cover"
              src={getCroppedImageUrl(g.image_background)}
            />
            <button
              onClick={() => setGenreId(g.id)}
              className={`text-lg hover:underline ${
                selectedGenreId === g.id ? "font-bold" : ""
              }`}
            >
              {g.name}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
