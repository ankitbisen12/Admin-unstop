import React from "react";
import { BanknotesIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { fetchCardData } from "@/app/lib/data";
import { applyPadd } from "@/app/lib/utils";

const iconMap = {
  submission: BanknotesIcon,
  users: UserGroupIcon,
};

export default async function CardWrapper() {
  const { noOfUsers, noOfSubmission } = await fetchCardData();

  return (
    <React.Fragment>
      <Card
        title="Total Users"
        value={noOfUsers}
        type="users"
      />
      <Card
        title="Total Submissions"
        value={noOfSubmission}
        type="submission"
      />
    </React.Fragment>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: "users" | "submission";
}) {
  const Icon = iconMap[type];

  return (
    <div className={`rounded-xl bg-gray-200 p-2 shadow-sm`}>
      <div className="flex p-4">
        {Icon ? <Icon className={`h-6 w-6 text-gray-500`} /> : null}
        <h3 className={`ml-2 tex1t-md font-medium text-gray-500`}>{title}</h3>
      </div>
      <p
        className={`
          truncate rounded-xl bg-white px-4 py-8 text-semibold text-center text-2xl text-gray-500`}
      >
        {applyPadd(value)}
      </p>
    </div>
  );
}
