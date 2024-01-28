import React, { useEffect } from "react";
import useGameTrailer from "../hooks/useGameTrailer";

interface Props {
  slug: string;
}

const GameTrailers = ({ slug }: Props) => {
  const { data, isLoading, error } = useGameTrailer(slug);

  if (isLoading)
    return (
      <svg
        className="animate-spin h-8 w-8 mr-3 border-t-2 border-white rounded-full"
        viewBox="0 0 24 24"
      ></svg>
    );

  if (error) throw error;

  const first = data?.results[0];
  if (!first) return null;

  return (
    <video
      className="mx-4"
      controls
      autoPlay
      loop
      poster={first.preview}
      width="1000"
      height="500"
    >
      <source src={first.data[480]} type="video/mp4" />
    </video>
  );
};

export default GameTrailers;
