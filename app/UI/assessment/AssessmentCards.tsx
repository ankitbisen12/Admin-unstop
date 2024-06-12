import React from "react";
import { CalendarDaysIcon, LinkIcon } from "@heroicons/react/24/outline";
import {
  getDateDayMonth,
  duration,
  applyPadd,
  getName,
  getBgColor,
} from "@/app/lib/utils";
import Link from "next/link";

const AssessmentCards = ({
  assessmentDetails,
}: {
  assessmentDetails: any[];
}) => {
  return (
    <>
      {assessmentDetails &&
        assessmentDetails.map((assessment) => (
          <div
            key={assessment._id}
            className="p-3 flex flex-col border-2 border-dotted rounded-2xl border-gray-300"
          >
            <div className="rounded-lg">
              <div className="flex flex-row items-center justify-between">
                <div className="w-14 h-14 flex flex-row items-center justify-center rounded-lg bg-violet-200 text-violet-600 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-9 h-9"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                    />
                  </svg>
                </div>
                <div>
                  <Link href={`/dashboard/assessment/${assessment._id}/edit`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="w-7 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              <h2 className="text-2xl text-sky-900 font-medium title-font">
                {assessment.testName}
              </h2>
              <div className="flex flex-row items-center justify-start border-b-4 border-dashed pb-4">
                <h3 className="text-lg font-semibold text-sky-900 pr-2">Job</h3>
                <span className="border-r-2 border-gray-400 h-4 mr-2"></span>
                <CalendarDaysIcon className="h-5 w-5 mr-1" />
                <h3 className="text-md font-semibold text-gray-400">
                  {getDateDayMonth(assessment.createdAt)}
                </h3>
              </div>
              <div className="flex flex-row items-center justify-between mt-1">
                <div className="flex flex-row">
                  <div className="flex flex-col mr-2 text-sm lg:text-lg xl:text-lg">
                    <h3 className="font-bold">
                      {duration(assessment.duration)} hr
                    </h3>
                    <h3 className="font-semibold">Duration</h3>
                  </div>
                  <div className="flex flex-col text-sm lg:text-lg xl:text-lg">
                    <h3 className="font-bold">
                      {applyPadd(assessment.questions.length)}
                    </h3>
                    <h3 className="font-semibold">Questions</h3>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center">
                  <div className="flex flex-row items-center rounded-full px-2 py-1 text-sm font-medium text-gray-600 border-2 border-gray-600">
                    <LinkIcon className="h-4 w-4 mr-1" />
                    <p>Share</p>
                  </div>
                  <div className="ml-1 md:ml-2 lg:ml-2 xl:ml-2 flex flex-row items-center">
                    <div className="flex -space-x-5 overflow-hidden">
                      {assessment.user_ref.length > 3 &&
                        assessment.user_ref.slice(0, 3).map((user: any) => (
                          <span
                            key={user._id}
                            className="inline-block h-8 w-8 rounded-full bg-pink-500 text-white text-center py-1 text-md font-semibold"
                          >
                            {getName(user.name)}
                          </span>
                        ))}
                      {(assessment.user_ref.length <= 3 ||
                        assessment.user_ref.length > 0) &&
                        assessment.user_ref.map((user: any, i: number) => (
                          <span
                            key={user._id}
                            className={`inline-block h-8 w-8 rounded-full ${getBgColor(
                              i
                            )} text-white text-center py-1 text-md font-semibold`}
                          >
                            {getName(user.name)}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default AssessmentCards;
