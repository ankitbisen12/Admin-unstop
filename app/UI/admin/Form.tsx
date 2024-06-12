"use client";
import { updateUser } from "@/app/lib/actions";
import { Users } from "@/app/lib/definitions";
import { AtSymbolIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Form({ user }: { user: Users }) {
  // console.log("user._id",user.id);
  const updateUserByID = updateUser.bind(null, user.id);

  return (
    <form action={updateUserByID}>
      <div className="p-4 lg:p-2 xl:p-8">
        <div className="rounded-md p-4 md:p-6">
          <div className="mb-4">
            <label htmlFor="name" className="mb-2 block text-sm font-medium">
              Name
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="name"
                  name="name"
                  type="text"
                  step="0.01"
                  defaultValue={user.name}
                  placeholder="Enter name"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-md outline-none placeholder:text-slate-600"
                />
                <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="mb-2 block text-sm font-medium">
              Email
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="text"
                  step="0.01"
                  defaultValue={user.email}
                  placeholder="Enter email"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-md outline-none placeholder:text-slate-600"
                />
                <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 p-4 md:p-6 flex justify-end gap-4">
          <Link
            href="/dashboard/assessment"
            className="flex h-10 items-center rounded-lg bg-red-500 px-4 text-sm font-medium text-white"
          >
            Cancel
          </Link>
          <button type="submit" className="flex items-center rounded-lg bg-logo-300 px-4 text-sm font-medium text-white">
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
