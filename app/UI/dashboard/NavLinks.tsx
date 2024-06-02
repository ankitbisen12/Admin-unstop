"use client";

import Link from "next/link";
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import { AdminIcons } from "../Icons/Icons";
import { usePathname } from 'next/navigation';

const links = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon },
  {
    name: "Assessment",
    href: "/dashboard/assessment",
    icon: DocumentDuplicateIcon,
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
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        const isActive = pathName === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={`flex h-[48px] grow items-center justify-center gap-2 p-4 text-xl font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 ${isActive ? 'text-blue-600 bg-sky-100' : ''}`}
          >
            <LinkIcon className="w-8" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
