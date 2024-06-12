import DashboardChart from "@/app/UI/dashboard/dashboard-chart";
import LatestSubmission from "@/app/UI/dashboard/latest-test-submission";
import CardWrapper from "@/app/UI/dashboard/cards";
import { Suspense } from "react";
import {
  CardsSkeleton,
  DashboardChartSkeleton,
  LatestSubmissionSkeleton,
} from "@/app/UI/skeletons";

export default async function Page() {
  return (
    <main className="px-4 py-2 2xl:px-6 2xl:py-6">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<DashboardChartSkeleton />}>
          <DashboardChart />
        </Suspense>
        <Suspense fallback={<LatestSubmissionSkeleton />}>
          <LatestSubmission />
        </Suspense>
      </div>
    </main>
  );
}
