import React from "react";
import Link from "next/link";
import { PencilIcon ,TrashIcon} from "@heroicons/react/24/outline";
import { deleteTest } from "../lib/actions";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children }: ButtonProps) {
  return (
    <button
      className={
        "flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
      }
    >
      {children}
    </button>
  );
}
export function UpdateUserBtn({ id }: { id: string }) {
  return (
    <button className="rounded-md bg-logo-100 px-3 py-2 text-md font-semibold text-white shadow-sm ">
      <Link href={`/dashboard/admin/${id}/edit`}>Edit</Link>
    </button>
  );
}

export function UpdateTest({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/assessment/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteTest({id}:{id:string}){
  const deleteTestById = deleteTest.bind(null,id);
  
  return (
    <form action={deleteTestById}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  )
}
