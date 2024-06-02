import React from "react";
import {
  UsersIcon,
  GlobeAltIcon,
  LinkIcon,
  InboxStackIcon,
} from "@heroicons/react/24/outline";

const Overview = () => {
  return (
    <div className="p-2">
      <div className="px-2 py-4">
        <h1 className="text-2xl font-semibold text-slate-500">
          Assessment Overview
        </h1>
      </div>
      <div className="flex flex-col xl:flex-col 2xl:flex-row gap-0">
        <div className="grid grid-cols-2 text-black border-2 rounded-tl-lg rounded-tr-lg 2xl:rounded-bl-lg 2xl:rounded-tr-none items-center justify-between">
          <div className="flex rounded-tl-lg rounded-bl-lg h-full border-r-2 py-3 px-4 lg:px-6 flex-col">
            <div className="flex-grow mb-4">
              <h1 className="text-lg font-bold text-blue-950">
                Total Assessment
              </h1>
            </div>
            <div className="flex items-center mb-3">
              <div className="bg-violet-300 rounded-lg p-2 mr-3">
                <InboxStackIcon className="w-9 h-9 text-violet-800" />
              </div>
              <h2 className="text-blue-950 text-3xl leading-3 title-font font-bold">
                34
              </h2>
            </div>
          </div>
          <div className="flex h-full py-3 px-4 lg:px-6 flex-col">
            <div className="flex-grow mb-4">
              <h1 className="text-xl font-bold">Total Purpose</h1>
            </div>
            <div className="flex items-center mb-3">
              <div className="bg-sky-300 rounded-lg p-2 mr-3">
                <LinkIcon className="w-9 h-9 text-sky-800" />
              </div>
              <h2 className="text-blue-950 text-3xl leading-3 title-font font-bold">
                11
              </h2>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 text-black border-2 border-t-0 border-b-0 2xl:border-t-2 2xl:border-b-2 2xl:border-l-0 2xl:border-r-0 items-center justify-between">
          <div className="flex h-full  py-3 px-4 lg:px-6 flex-col">
            <div className="flex-grow mb-4">
              <h1 className="text-xl font-bold text-blue-950">Candidates</h1>
            </div>
            <div className="flex flex-row items-center mb-3">
              <div className="bg-violet-300 rounded-lg  p-2 mr-3">
                <UsersIcon className="w-9 h-9 text-violet-800" />
              </div>
              <div className="flex flex-row">
                <div className="flex flex-col border-r-2 px-4">
                  <div className="flex flex-row items-center">
                    <h1 className="text-2xl font-bold text-blue-950">11,875</h1>
                    <h4 className="text-lg font-semibold ml-1 text-green-500">
                      +89
                    </h4>
                  </div>
                  <div>
                    <span className="text-lg font-semibold text-blue-950">
                      Email
                    </span>
                  </div>
                </div>
                <div className="flex flex-col px-4">
                  <div className="flex flex-row items-center">
                    <h1 className="text-2xl font-bold text-blue-950">1,14</h1>
                    <h4 className="text-lg font-semibold ml-1 text-green-500">
                      +89
                    </h4>
                  </div>
                  <div>
                    <span className="text-lg font-semibold text-blue-950">
                      Unique
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 text-black border-2 rounded-bl-lg rounded-br-lg  2xl:rounded-tr-lg 2xl:rounded-br-lg 2xl:rounded-bl-none items-center justify-between">
          <div className="flex h-full  py-3 px-4 lg:px-6 flex-col">
            <div className="flex-grow mb-4">
              <h1 className="text-xl font-bold text-blue-950">
                Candidates Source
              </h1>
            </div>
            <div className="flex flex-row items-center mb-3">
              <div className="bg-pink-300 rounded-lg  p-2 mr-3">
                <GlobeAltIcon className="w-9 h-9 text-pink-600" />
              </div>
              <div className="flex flex-row">
                <div className="flex flex-col border-r-2 px-4">
                  <div className="flex flex-row items-center">
                    <h1 className="text-2xl font-bold text-blue-950">11,875</h1>
                    <h4 className="text-lg font-semibold ml-1 text-green-500">
                      +89
                    </h4>
                  </div>
                  <div>
                    <span className="text-lg font-semibold text-blue-950">
                      Email
                    </span>
                  </div>
                </div>
                <div className="flex flex-col border-r-2 px-4">
                  <div className="flex flex-row items-center">
                    <h1 className="text-2xl font-bold text-blue-950">1,14</h1>
                    <h4 className="text-lg font-semibold ml-1 text-green-500">
                      +89
                    </h4>
                  </div>
                  <div>
                    <span className="text-lg font-semibold text-blue-950">
                      Social
                    </span>
                  </div>
                </div>
                <div className="flex flex-col px-4">
                  <div className="flex flex-row items-center">
                    <h1 className="text-2xl font-bold text-blue-950">1,14</h1>
                    <h4 className="text-lg font-semibold ml-1 text-green-500">
                      +89
                    </h4>
                  </div>
                  <div>
                    <span className="text-lg font-semibold text-blue-950">
                      Unique
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
