import { Suspense } from "react";
import { fetchTestPages } from "@/app/lib/data";
import Search from "@/app/UI/library/Search";
import Table from "@/app/UI/library/Table";
import { TestTableSkeleton } from "@/app/UI/skeletons";
import Pagination from "@/app/UI/library/Pagination";

export default async function Library({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const { totalPages } = await fetchTestPages(query);

  return (
    <div className="px-4">
      <div className="w-full">
        <div className="flex w-full items-center justify-between mt-2">
          <h1 className={` text-2xl text-gray-700`}>
            Search Test Here
          </h1>
        </div>
        <div className="flex items-center justify-between gap-2 md:mt-2">
          <Search />
        </div>
        <Suspense
          key={query + currentPage}
          fallback={<TestTableSkeleton />}
        >
          <Table query={query} currentPage={currentPage} />
        </Suspense>
        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      </div>
    </div>
  );
}
