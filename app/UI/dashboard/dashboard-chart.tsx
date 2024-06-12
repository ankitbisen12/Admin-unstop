import { generateYAxis, getName } from "@/app/lib/utils";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { fetchSubmission} from "@/app/lib/data";

export default async function DashboardChart() {
  const testDetails = await fetchSubmission();
  const chartHeight = 350;

  const { yAxisLabels, topLabel } = generateYAxis(testDetails);

  if (!testDetails || testDetails.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  return (
    <div className="w-full md:col-span-4">
      <h2 className="text-2xl font-semibold text-slate-500 mb-4">
        Recent Test Details
      </h2>
      <div className="rounded-xl bg-gray-200 p-4">
        <div className="sm:grid-cols-13 mt-0 grid grid-cols-12 items-end gap-2 rounded-md bg-white p-4 md:gap-4">
          <div
            className="mb-6 hidden flex-col justify-between text-sm text-gray-400 sm:flex"
            style={{ height: `${chartHeight}px` }}
          >
            {yAxisLabels.map((label) => (
              <p key={label}>{label}</p>
            ))}
          </div>
          {testDetails.map((test) => (
            <div key={test.id} className="flex flex-col items-center gap-2">
              <div>
                <span className="inline-block h-8 w-8  rounded-full bg-gray-500 text-white text-center py-1 text-md font-semibold">
                  {getName(test.submission_user.name)}
                </span>
              </div>
              <div
                className="w-full rounded-tl-md rounded-tr-md bg-gray-300"
                style={{
                  height: `${(chartHeight / topLabel) * test.marks}px`,
                }}
              ></div>
              <p className="-rotate-90 text-sm text-cyan-700 sm:rotate-0">
                {test.name}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <CalendarIcon className="h-5 w-5 text-cyan-700" />
          <h3 className="ml-2 text-md text-sky-700">Last 12 months</h3>
        </div>
      </div>
    </div>
  );
}
