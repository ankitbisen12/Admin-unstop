"use client";
import Link from "next/link";
import NavLinks from "./NavLinks";
import { getTitle } from "@/app/lib/utils";
import { usePathname } from "next/navigation";

export default function SideNav() {
  const pathName = usePathname();
  
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-baseline justify-between border-b px-2 border-gray-200 md:hidden lg:hidden sm:block">
        <div className="flex flex-row items-center">
          <div className="pb-2 pt-2">
            <Link href="/">
              <h1 className="text-xl lg:text-2xl font-semibold bg-logo-100 rounded-sm tracking-tight pt-2 text-white px-2 pb-2 lg:py-2">
                Unstop
              </h1>
            </Link>
          </div>
          <div className="h-10 border-r-2 border-gray-300 mx-4"></div>
          <h2 className="relative z-10 -mb-px pt-4 pb-4 flex items-center cursor-pointer border-sky-600 text-sky-600 border-b-4 ml-2 text-lg font-medium transition-colors duration-200 ease-out">
            {getTitle(pathName)}
          </h2>
        </div>
      </div>
      <div className="flex flex-row justify-center px-4 md:px-12 md:flex-col ">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md md:block"></div>
      </div>
    </div>
  );
}
