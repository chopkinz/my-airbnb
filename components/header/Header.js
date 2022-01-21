import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";
import { UserCircleIcon } from "@heroicons/react/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

export default function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date()); // start date for date picker
  const [endDate, setEndDate] = useState(new Date()); // end date for date picker
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const router = useRouter(); // router

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const search = () => {
    router.push({
      pathname: "./search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberOfGuests,
      },
    });
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 p-12 md:px-20 scroll-mx-32">
      {/* left box (icon) */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer my-auto"
      >
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain" // so the image doesn't stretch
          objectPosition="left" // align left
        />
      </div>

      {/* middle box (search) */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder={placeholder || "Where are you going?"}
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* right box */}
      <div className="hidden items-center sm:inline-flex space-x-4 justify-end text-gray-600 cursor-pointer">
        <p className="inline cursor-pointer hover:shadow-md hover:rounded-full p-3 font-medium">
          Become a Host
        </p>
        <GlobeAltIcon className="h-6 text-gray-600 cursor-pointer hover:shadow-md hover:rounded-full" />

        <div className="flex items-center space-x-1 border-2 p-1 rounded-full hover:shadow-md">
          <MenuIcon className="h-6 text-gray-500 " />
          <UserCircleIcon className="h-10 text-gray-500" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-4">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()} // set min date to current date so you can't book a date in the past
            rangeColors={["#FD5B61"]}
            onChange={handleSelect} // receieve selected dates
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>

            <UserGroupIcon className="h-5" />
            <input
              value={[numberOfGuests]}
              type="number"
              min="1"
              className="w-12 pl-2 text-lg outline-none text-red-400"
              onChange={(e) => setNumberOfGuests(e.target.value)}
            />
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancel
            </button>
            <button onClick={search} className="flex-1 text-red-500">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
