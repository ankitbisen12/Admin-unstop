import React, { Suspense, useState } from "react";
import NewAssessment from "./new-assessment";
import Overview from "./Overview";
import AssessmentCards from "./AssessmentCards";
import { ChartBarIcon } from "@heroicons/react/24/outline";
import { AssessmentsCardSkeleton } from "../skeletons";

const Assessments =({assessmentDetails}:{assessmentDetails:any[]}) => {
  return (
    <div className="px-2 lg:px-4 xl:px-4 py-2 md:py-6 mx-auto">
      <Overview assessmentDetails={assessmentDetails}/>
      <div className="flex flex-row justify-between items-center px-2 py-4">
        <h1 className="text-2xl font-semibold text-slate-500">My Assessment</h1>
        <ChartBarIcon className="w-6 h-6 block md:hidden cursor-pointer" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        <Suspense fallback={<AssessmentsCardSkeleton />}>
          <NewAssessment />
          <AssessmentCards assessmentDetails={assessmentDetails}/>
        </Suspense>
      </div>
    </div>
  );
};

export default Assessments;
