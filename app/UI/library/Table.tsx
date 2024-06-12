import React from "react";
import Image from "next/image";
import { DeleteTest, UpdateTest } from "../button";
import { fetchTestPages } from "@/app/lib/data";

interface Skill {
  skill: string;
}

interface Test {
  _id: string;
  testName: string;
  skills: Skill[];
  duration: string;
  status: string;
}
const Table = async ({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) => {
  const { tests }:{ tests: Test[] } = await fetchTestPages(query);

  if (!tests || tests.length === 0) {
    return <p className="mt-2 text-center text-gray-500 font-semibold">No Test found</p>;
  }

  return (
    <div className="mt-6 flow-root ">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {tests?.map((test) => (
              <div
                key={test._id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{test.testName}</p>
                    </div>
                    <p className="text-sm text-gray-500">
                      {test.skills.map((el) => el.skill).join(",")}
                    </p>
                  </div>
                  {/* <testStatus status={test.status} /> */}
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">{test.duration}</p>
                    <p>Active</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateTest id={test._id} />
                    <DeleteTest id={test._id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Test
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Skills
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Duration
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {tests?.map((test) => (
                <tr
                  key={test._id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{test.testName}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {test.skills.map((el) => el.skill).join(",")}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {test.duration}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">Active</td>

                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateTest id={test._id} />
                      <DeleteTest id={test._id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
