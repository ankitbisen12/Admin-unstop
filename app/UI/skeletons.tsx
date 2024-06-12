const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
    >
      <div className="flex p-4">
        <div className="h-5 w-5 rounded-md bg-gray-200" />
        <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
      </div>
      <div className="flex items-center justify-center truncate rounded-xl bg-white px-4 py-8">
        <div className="h-7 w-20 rounded-md bg-gray-200" />
      </div>
    </div>
  );
}

export function CardsSkeleton() {
  return (
    <>
      <CardSkeleton />
      <CardSkeleton />
    </>
  );
}

export function DashboardChartSkeleton() {
  return (
    <div className={`${shimmer} relative w-full overflow-hidden md:col-span-4`}>
      <div className="mb-4 h-8 w-36 rounded-md bg-gray-100" />
      <div className="rounded-xl bg-gray-100 p-4">
        <div className="mt-0 grid h-[410px] grid-cols-12 items-end gap-2 rounded-md bg-white p-4 sm:grid-cols-13 md:gap-4" />
        <div className="flex items-center pb-2 pt-6">
          <div className="h-5 w-5 rounded-full bg-gray-200" />
          <div className="ml-2 h-4 w-20 rounded-md bg-gray-200" />
        </div>
      </div>
    </div>
  );
}
export function SubmissionSkeleton() {
  return (
    <div className="flex flex-row items-center justify-between border-b border-gray-100 py-4">
      <div className="flex items-center">
        <div className="mr-2 h-8 w-8 rounded-full bg-gray-200" />
        <div className="min-w-0">
          <div className="h-5 w-40 rounded-md bg-gray-200" />
          <div className="mt-2 h-4 w-12 rounded-md bg-gray-200" />
        </div>
      </div>
      <div className="mt-2 h-4 w-12 rounded-md bg-gray-200" />
    </div>
  );
}

export function LatestSubmissionSkeleton() {
  return (
    <div
      className={`${shimmer} relative flex w-full flex-col overflow-hidden md:col-span-4`}
    >
      <div className="mb-4 h-8 w-36 rounded-md bg-gray-100" />
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-100 p-4">
        <div className="bg-white px-6">
          <SubmissionSkeleton />
          <SubmissionSkeleton />
          <SubmissionSkeleton />
          <SubmissionSkeleton />
          <SubmissionSkeleton />
          <div className="flex items-center pb-2 pt-6">
            <div className="h-5 w-5 rounded-full bg-gray-200" />
            <div className="ml-2 h-4 w-20 rounded-md bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function AssessmentCardSkeleton() {
  return (
    <div className={`${shimmer} p-3 flex flex-col rounded-2xl bg-gray-100`}>
      <div className="rounded-lg">
        <div className="flex flex-row items-center justify-between">
          <div className="w-14 h-14 flex flex-row items-center justify-center rounded-lg bg-gray-200 mb-4" />
          <div className="w-2 h-12 bg-gray-200 rounded-lg" />
        </div>
        <div className="h-6 w-14 bg-gray-200 mb-2 rounded-lg" />
        <div className="border-b-4 pb-4 border-dotted border-gray-300">
          <div className="flex flex-row items-center justify-start pb-6 rounded-lg h-4 w-36 bg-gray-200" />
        </div>
        <div className="flex flex-row items-center justify-between mt-1 pt-2">
          <div className="flex flex-row">
            <div className="flex flex-row items-center rounded-full px-2 py-1 w-16 h-6 bg-gray-200 mr-1" />
            <div className="flex flex-row items-center rounded-full px-2 py-1 w-16 h-6 bg-gray-200" />
          </div>
          <div className="flex flex-row items-center justify-center">
            <div className="flex flex-row items-center rounded-full px-2 py-1 w-16 h-6 bg-gray-200" />
            <div className="ml-1 md:ml-2 lg:ml-2 xl:ml-2 flex flex-row items-center bg-gray-200 w-10 h-6 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function NewAssessmentSkeleton() {
  return (
    <div className="p-4 flex flex-col text-center items-center border-2 border-dotted rounded-2xl border-gray-300 bg-gray-50">
      <div className="w-20 h-20 mt-4 flex items-center justify-center rounded-full bg-gray-200 mb-5" />
      <div className="flex flex-col items-center">
        <div className=" w-[140px] h-8 bg-gray-200 rounded-md mb-3" />
        <div className="w-[180px] h-8 bg-gray-200 rounded-md" />
      </div>
    </div>
  );
}

export function AssessmentsCardSkeleton() {
  return (
    <>
      <NewAssessmentSkeleton />
      <AssessmentCardSkeleton />
      <AssessmentCardSkeleton />
      <AssessmentCardSkeleton />
    </>
  );
}

export function AdminCardSkeleton() {
  return (
    <div className={`${shimmer} px-4`}>
      <div className="max-w-sm mx-auto border border-gray-100 mt-16 bg-gray-100 rounded-xl shadow-md md:max-w-2xl relative">
        <div className="md:flex md:flex-col items-center rounded-md">
          <div className="absolute left-1/2 -top-12 transform -translate-x-1/2 w-[150px] h-[150px] bg-gray-200 rounded-lg" />
          <div className="px-8 pt-6 mt-20">
            <div className="mt-2 uppercase bg-gray-200 tracking-wide w-26 h-8 rounded-lg mb-1" />
            <div className="bg-gray-200 w-40 h-8 rounded-lg" />
          </div>
          <div className="px-8 py-2 text-center">
            <div className="bg-gray-200 w-20 h-10 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function TestMobileSkeleton() {
  return (
    <div className="mb-2 w-full rounded-md bg-white p-4">
      <div className="flex items-center justify-between border-b border-gray-100 pb-8">
        <div className="flex items-center">
          <div className="mr-2 h-8 w-8 rounded-full bg-gray-100"></div>
          <div className="h-6 w-16 rounded bg-gray-100"></div>
        </div>
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </div>
      <div className="flex w-full items-center justify-between pt-4">
        <div>
          <div className="h-6 w-16 rounded bg-gray-100"></div>
          <div className="mt-2 h-6 w-24 rounded bg-gray-100"></div>
        </div>
        <div className="flex justify-end gap-2">
          <div className="h-10 w-10 rounded bg-gray-100"></div>
          <div className="h-10 w-10 rounded bg-gray-100"></div>
        </div>
      </div>
    </div>
  );
}

export function TableRowSkeleton() {
  return (
    <tr className="w-full border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
      {/* Customer Name and Image */}
      <td className="relative overflow-hidden whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gray-100"></div>
          <div className="h-6 w-24 rounded bg-gray-100"></div>
        </div>
      </td>
      {/* Email */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-32 rounded bg-gray-100"></div>
      </td>
      {/* Amount */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </td>
      {/* Date */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </td>
      {/* Status */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </td>
      {/* Actions */}
      <td className="whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex justify-end gap-3">
          <div className="h-[38px] w-[38px] rounded bg-gray-100"></div>
          <div className="h-[38px] w-[38px] rounded bg-gray-100"></div>
        </div>
      </td>
    </tr>
  );
}

export function TestTableSkeleton() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            <TestMobileSkeleton />
            <TestMobileSkeleton />
            <TestMobileSkeleton />
            <TestMobileSkeleton />
            <TestMobileSkeleton />
            <TestMobileSkeleton />
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Customer
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Amount
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th
                  scope="col"
                  className="relative pb-4 pl-3 pr-6 pt-2 sm:pr-6"
                >
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default function DashboardSkeleton() {
  return (
    <>
      <div
        className={`${shimmer} relative mb-4 h-8 w-36 overflow-hidden rounded-md bg-gray-100`}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <DashboardChartSkeleton/>
        <LatestSubmissionSkeleton />
      </div>
    </>
  );
}


