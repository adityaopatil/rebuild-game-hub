import React, { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) return <p>{children}</p>;

  const summary = expanded ? children : children.substring(0, limit) + "...";

  return (
    <p>
      {summary}
      <button
        onClick={() => setExpanded(!expanded)}
        className="bg-yellow-400 text-black font-bold rounded-md px-2 py-1 ml-1"
      >
        {expanded ? "Show Less" : "Read More"}
      </button>{" "}
    </p>
  );
};

export default ExpandableText;
