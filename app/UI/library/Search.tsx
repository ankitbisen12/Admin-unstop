"use client";
import React, { useRef } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSearchParams,useRouter, usePathname } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const {replace} = useRouter();

  const handleSearch = useDebouncedCallback((test: string) => {
    console.log(`Searching ${test}`);
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");

    if (test) {
      params.set("query", test);
    } else {
      params.delete("query");
    }
    // console.log(params);

    replace(`${pathName}?${params.toString()}`);
  },1000);

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-md outline-none placeholder:text-gray-500"
        placeholder="Search Test"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[20px] w-[20px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
};

export default Search;
