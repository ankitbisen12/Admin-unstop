import React from 'react'
import Link from 'next/link';

const NewAssessment = () => {
  return (
    <div className="p-4 flex flex-col text-center items-center border-2 border-dotted rounded-2xl border-gray-300 bg-gray-50">
            <div className="w-20 h-20 mt-4 flex items-center justify-center rounded-full bg-white mb-5">
              <Link href="/dashboard/assessment/create">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-10 h-10 text-sky-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </Link>
            </div>
            <div className="flex-grow">
              <h2 className="text-sky-900 text-xl title-font font-medium mb-3">
                New Assessment
              </h2>
              <p className="text-sm font-semibold text-sky-900">
                From here you can add questions of multiple types like MCQs,
                subjective(text or paragraph)
              </p>
            </div>
          </div>
  )
}

export default NewAssessment;