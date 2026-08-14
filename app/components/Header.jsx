import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <>
      <div className="w-full">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-8 pt-0 pb-0">
          <div className="flex h-20 w-50  justify-start items-center">
            <Image
              src="/newlogo1.png"
              height={100}
              width={100}
              className=" h-30 w-auto object-contain  "
            />
            {/* <span className="text-pink-500 text-2xl sm:text-3xl font-bold">
            .
          </span> */}
          </div>
          <div className="hidden sm:block text-right">
            <p className="text-sm text-gray-600">
              Skincare that understands Indian skin
            </p>
            <div className="h-0.5 w-16 bg-gradient-to-r from-pink-400 to-purple-400 ml-auto mt-1 rounded-full" />
          </div>
        </div>
      </div>
    </>
  );
}
