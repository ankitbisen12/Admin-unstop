import { ArrowPathIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { fetchLatestSubmission } from "@/app/lib/data";

export default async function LatestSubmission() {
  const latestSubmission = await fetchLatestSubmission();

  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`text-2xl font-semibold text-slate-500 mb-4`}>
        Latest Submission
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-200 p-4">
        <div className="bg-white px-6">
          {latestSubmission.map((submission, i) => {
            const { submission_user } = submission;
            const name = submission_user.name
              .split(" ")
              .map((element: string) => element.charAt(0))
              .join('');

            return (
              <div
                key={submission.id}
                className={`flex flex-row items-center justify-between py-4 ${i!==0 ? 'border-t':''}`}
              >
                <div className="flex items-center">
                  <span className="inline-block h-8 w-8 mr-4 rounded-full bg-indigo-500 text-white text-center py-1 text-md font-semibold">
                    {name}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold md:text-base text-gray-800">
                      {submission.submission_user.name}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block">
                      {submission.submission_user.email}
                    </p>
                  </div>
                </div>
                <p
                  className={` truncate text-sm font-medium md:text-base`}
                >
                  {submission.name}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}
