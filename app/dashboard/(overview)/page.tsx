import { lusitana } from "@/app/lib/fonts";
import DashboardChart from "@/app/UI/dashboard/dashboard-chart";
import LatestSubmission from "@/app/UI/dashboard/latest-test-submission";
import CardWrapper from "@/app/UI/dashboard/cards";

export default async function Page() {
  return (
    <main className="px-2 py-2 2xl:px-6 2xl:py-6">
      <h1
        className={`${lusitana.className} text-2xl font-semibold text-slate-500`}
      >
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardWrapper />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <DashboardChart />
        <LatestSubmission />
      </div>
    </main>
  );
}
