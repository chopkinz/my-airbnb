import { Tab } from "@headlessui/react";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserIcon,
  UserGroupIcon,
  ArrowDownIcon,
} from "@heroicons/react/outline";
import { UserCircleIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";

function flexible() {
  const router = useRouter();

  const home = () => {
    router.push({
      pathname: "/",
    });
  };

  return (
    <div>
      {/* header */}
      <header className="sticky top-0 buttom-0 z-50 grid grid-cols-2 bg-white shadow-md py-5 p-12 md:px-20">
        <div className="relative flex items-center h-10 top-2 cursor-pointer">
          <div onClick={() => router.push("/")}>
            <Image
              src="https://links.papareact.com/qd3"
              layout="fill"
              objectFit="contain" // so the image doesn't stretch
              objectPosition="left" // align left
            />
          </div>
        </div>
        <div className="hidden items-center sm:inline-flex space-x-4 justify-end text-gray-600 cursor-pointer mr-2">
          <p className="inline cursor-pointer hover:bg-gray-100 hover:rounded-full p-3 font-medium">
            Become a Host
          </p>
          <GlobeAltIcon className="h-12 text-gray-600 cursor-pointer hover:bg-gray-100 p-3 hover:rounded-full" />

          <div className="flex items-center space-x-1 border-2 p-1 rounded-full hover:shadow-md">
            <MenuIcon className="h-6 text-gray-500 " />
            <UserCircleIcon className="h-10 text-gray-500" />
          </div>
        </div>
        <div className="flex flex-col col-span-3 mx-auto mt-4">
          <div className="flex"></div>
        </div>
      </header>
      {/* main */}
      <main className="flex mx-10">
        <section className="flex-grow pt-14 px-6">
          <main className="inline-flex mb-5 space-x-2 text-gray-800 whitespace-nowrap">
            <button onClick={() => router.push("/")} className="button2">
              Offbeat
            </button>
            <button onClick={() => router.push("/")} className="button2">
              Cabins
            </button>
            <button onClick={() => router.push("/")} className="button2">
              Mansions
            </button>
            <button onClick={() => router.push("/")} className="button2">
              Tiny homes
            </button>
            <button onClick={() => router.push("/")} className="button2">
              A-Frames
            </button>
            <button onClick={() => router.push("/")} className="button2">
              Domes
            </button>
            <button onClick={() => router.push("/")} className="button2">
              Treehouses
            </button>
            <button onClick={() => router.push("/")} className="button2">
              Farms
            </button>
            <button className="button2 ? inline-flex mt-2">
              
            </button>
          </main>
          <div className="grid sm:grid-cols-2 md:grid-cols-3"></div>
        </section>
        <section></section>
      </main>
    </div>
  );
}

export default flexible;
