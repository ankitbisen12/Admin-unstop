"use client";

import Link from "next/link";
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  PencilSquareIcon
} from "@heroicons/react/24/outline";
import { AdminIcons } from "../Icons/Icons";
import { usePathname } from "next/navigation";
import {Noto} from '@/app/lib/fonts';

const links = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon },
  {
    name: "Assessment",
    href: "/dashboard/assessment",
    icon: PencilSquareIcon,
  },
  { name: "My Library", href: "/dashboard/library", icon: UserGroupIcon },
  {
    name: "Admin",
    href: "/dashboard/admin",
    icon: AdminIcons,
  },
];

export default function NavLinks() {
  const pathName = usePathname();
  // console.log(pathName);

  return (
    <div className={`flex flex-row gap-2 md:flex-col justify-between mt-4 ${Noto.className}`}>
      {links.map((link) => {
        const LinkIcon = link.icon;
        const isActive = pathName === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={`flex flex-row items-center justify-between text-xl py-2 px-6 md:py-6  font-medium md:flex-col md:justify-center md:px-0 ${
              isActive
                ? "text-logo-300 bg-logo-500 rounded-md border-[1px] border-logo-300"
                : "text-cyan-900"
            }`}
          >
            <LinkIcon className="w-8 cursor-pointer" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
