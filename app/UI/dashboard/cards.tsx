import React from "react";
import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from "@heroicons/react/24/outline";
import { lusitana } from "@/app/lib/fonts";
import { fetchCardData } from "@/app/lib/data";

const iconMap = {
  submission: BanknotesIcon,
  users: UserGroupIcon,
};

export default async function CardWrapper() {
  const { noOfUsers, noOfSubmission } = await fetchCardData();

  return (
    <React.Fragment>
      <Card title="Total Users" value={noOfUsers} type="users" />
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
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
