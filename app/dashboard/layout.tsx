"use client";
import SideNav from "../UI/dashboard/SideNav";
import { getTitle } from "../lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();

  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64 bg-white">
        <SideNav />
      </div>
      <div className="w-6 hidden md:block lg:block bg-gray-100"></div>
      <div className="flex-grow px-0 md:overflow-y-auto bg-white">
        <div className="hidden md:flex items-baseline justify-between border-b border-gray-200 md:pt-4 sm:hidden">
          <div className="flex flex-row items-center px-4">
            <Link href="/">
              <h1 className="text-xl lg:text-2xl font-semibold bg-logo-100 tracking-tight pt-2 text-white px-2 pb-2 lg:py-2">
                Unstop
              </h1>
            </Link>
            <div className="h-12 border-r-2 border-gray-300 mx-4"></div>
            <h2 className="relative z-10 -mb-px py-6 flex items-center border-sky-600 text-sky-600 border-b-4 ml-4 text-xl font-medium transition-colors duration-200 ease-out">
              {getTitle(pathName)}
            </h2>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
