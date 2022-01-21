import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Banner() {
  const router = useRouter();

  const flexible = () => {
    router.push({
      pathname: "./destinations",
    });
  };

  return (
    <div className="relative h-[200px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] mx-auto pt-5">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center text-gray-600">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button
          onClick={() => router.push("./destinations")}
          className="text-red-400 font-bold bg-white px-10 py-4 shadow-md rounded-full my-3 hover:shadow-xl active:scale-90 transition duration-150"
        >
          I'm flexible
        </button>
      </div>
    </div>
  );
}
