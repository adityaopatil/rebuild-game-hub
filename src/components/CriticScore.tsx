import React from "react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green-400" : score > 60 ? "yellow-200" : "";
  return (
    <div
      className={`p-2 dark:bg-gray-600 bg-gray-200 font-semibold rounded-md h-11 text-${color}`}
    >
      {score}
    </div>
  );
};

export default CriticScore;
