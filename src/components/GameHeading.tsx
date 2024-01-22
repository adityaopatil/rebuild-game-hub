import { Fragment } from "react";
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  LinkIcon,
  MapPinIcon,
  PencilIcon,
} from "@heroicons/react/20/solid";
import { Menu, Transition } from "@headlessui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatform from "../hooks/usePlatform";

function classNames(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatform();

  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);

  const platForm = platforms.results.find((p) => p.id === gameQuery.platformId);

  const heading = `${platForm?.name || ""} ${genre?.name || ""} Games`;
  return (
    <div className="mt-10 mb-8">
      <p className="text-6xl font-bold">{heading}</p>
    </div>
  );
};

export default GameHeading;
