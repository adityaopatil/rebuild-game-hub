import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import usePlatform, { Platform } from "../hooks/usePlatform";

function classNames(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

export default function PlatformSelector({
  onSelectPlatform,
  selectedPlatform,
}: Props) {
  const { data, error } = usePlatform();
  const [isOpen, setOpen] = useState(false);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-4 py-2 text-lg font-medium bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600">
          {selectedPlatform?.name ? `${selectedPlatform.name}` : "Platforms"}
          <ChevronDownIcon className="-mr-1 h-7 w-7" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-10 mt-2 w-60 origin-top-right rounded-md bg-white dark:bg-gray-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {data.map((platform) => (
              <Menu.Item key={platform.id}>
                {({ active }) => (
                  <a
                    onClick={() => onSelectPlatform(platform)}
                    href="#"
                    className={classNames(
                      active ? "dark:bg-gray-600 bg-gray-100" : "",
                      "block px-4 py-2 text-lg"
                    )}
                  >
                    {platform.name}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
