import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

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
          Genressss
        </h2>
      </div>
      <ul className="space-y-3">
        {data.map((g) => (
          <li key={g.id} className="flex items-center">
            <img
              className="w-10 h-10 rounded-md mr-2 object-cover"
              src={getCroppedImageUrl(g.image_background)}
            />
            <button
              onClick={() => onSelectGenre(g)}
              className={`text-lg hover:underline ${
                selectedGenre?.id === g.id ? "font-bold" : ""
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
