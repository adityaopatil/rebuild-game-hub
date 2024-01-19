import React from "react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";

import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/usePlatform";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  // Here we are mapping each Icon with a key
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    android: FaAndroid,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <div className="mt-2">
      {platforms.map((platform) => {
        const IconComponent = iconMap[platform.slug];
        return (
          <div key={platform.slug} className="inline-block mr-2 text-gray-500">
            {IconComponent && <IconComponent className="w-5 h-5" />}
          </div>
        );
      })}
    </div>
  );
};

export default PlatformIconList;
