import React from "react";
import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";

interface Props {
  rating: number;
}

const Emojis = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: {
    [key: number]: { src: string; alt: string; size: string };
  } = {
    3: { src: meh, alt: "meh", size: "w-10 h-10" },
    4: { src: thumbsUp, alt: "recommended", size: "w-10 h-10" },
    5: { src: bullsEye, alt: "exceptional", size: "w-14 h-14" },
  };

  const selectedEmoji = emojiMap[rating];

  return (
    <img
      className={selectedEmoji.size}
      src={selectedEmoji.src}
      alt={selectedEmoji.alt}
    />
  );
};

export default Emojis;
