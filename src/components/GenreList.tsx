import { useState } from "react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
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
      <ul className="space-y-3">
        {data.map((g) => (
          <li key={g.id} className="flex items-center">
            <img
              className="w-10 h-10 rounded-md mr-2"
              src={getCroppedImageUrl(g.image_background)}
            />
            <p className="text-lg">{g.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
