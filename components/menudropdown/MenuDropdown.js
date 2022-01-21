import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

export default function MenuDropdown() {
  return (
    <Menu>
      <Menu.Button>Moreee</Menu.Button>
      <ChevronDownIcon className="h-8 w-8 cursor-pointer active:scale-110" />
      <Menu.Items className="flex flex-col text-gray-800 mx-8 items-start">
        <Menu.Item className="button2, flex-col">
          {({ active }) => (
            <button
              className={`${active && "bg-blue-500"}`}
              href="/account-settings"
            >
              item 1
            </button>
          )}
        </Menu.Item>
        <Menu.Item className="button2">
          {({ active }) => (
            <button
              className={`${active && "bg-blue-500"}`}
              href="/account-settings"
            >
              item 2
            </button>
          )}
        </Menu.Item>
        <Menu.Item className="button2">
          {({ active }) => (
            <button
              className={`${active && "bg-blue-500"}`}
              href="/account-settings"
            >
              item 3
            </button>
          )}
        </Menu.Item>
        <Menu.Item className="button2">
          {({ active }) => (
            <button
              className={`${active && "bg-blue-500"}`}
              href="/account-settings"
            >
              item 4
            </button>
          )}
        </Menu.Item>
        <Menu.Item disabled>
          <span className="opacity-75">this item is disabled</span>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
