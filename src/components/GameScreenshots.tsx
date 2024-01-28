import React from "react";
import useScreenShots from "../hooks/useScreenShots";

interface Props {
  slug: string;
}
const GameScreenshots = ({ slug }: Props) => {
  const { data, isLoading, error } = useScreenShots(slug);

  if (isLoading)
    return (
      <svg
        className="animate-spin h-8 w-8 mr-3 border-t-2 border-white rounded-full"
        viewBox="0 0 24 24"
      ></svg>
    );

  if (error) throw error;

  return (
    <div className="mt-[50px] grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
      {data?.results.map((s) => (
        <div key={s.id} className="group relative">
          <img
            src={s.image}
            alt="Game Screenshots"
            className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded-md"
          />
        </div>
      ))}
    </div>
  );
};

export default GameScreenshots;
