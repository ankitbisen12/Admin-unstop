import { fetchUser } from "@/app/lib/data";
import { getName } from "@/app/lib/utils";
import { UpdateUserBtn } from "@/app/UI/button";
import { AdminCardSkeleton } from "@/app/UI/skeletons";
import { Suspense } from "react";

export default async function Admin() {
  const user = await fetchUser();

  return (
    <Suspense fallback={<AdminCardSkeleton />}>
      <div className="px-4">
        {user.map((usr) => (
          <div
            key={usr._id}
            className="max-w-sm mx-auto border border-gray-100 mt-16 bg-white rounded-xl shadow-md md:max-w-2xl relative"
          >
            <div className="md:flex md:flex-col items-center rounded-md">
              <div className="absolute left-1/2 -top-12 transform -translate-x-1/2 w-[150px] h-[150px] bg-gray-100 rounded-lg">
                <div className="rounded-md p-2 text-[80px] font-bold text-center text-gray-500">
                  {getName(usr.name)}
                </div>
              </div>
              <div className="px-8 pt-6 text-center mt-20">
                <div className="mt-2 uppercase tracking-wide text-xl text-logo-100 font-bold">
                  {usr.name}
                </div>
                <p className=" text-lg font-semibold text-gray-500">
                  {usr.email}
                </p>
              </div>
              <div className="px-8 py-2 text-center">
                <UpdateUserBtn id={usr._id} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Suspense>
  );
}
