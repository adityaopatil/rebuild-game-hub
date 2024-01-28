import React from "react";
import useScreenShots from "../hooks/useScreenShots";

interface Props {
  slug: string;
}
const GameScreenshots = ({ slug }: Props) => {
  const { data, isLoading, error } = useScreenShots(slug);

  console.log(data?.results);

  return (
    <div className="mt-[50px] mx-5 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
      {data?.results.map((s) => (
        <div className="group relative">
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
