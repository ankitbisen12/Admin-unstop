import Image from "next/image";
import { lusitana } from "./lib/fonts";
import Link from "next/link";
import UnstopLogo from "./UI/unstop_logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex h-20 shrink-0 items-end rounded-none bg-logo-100 p-4 ">
        <UnstopLogo />
      </div>

      <div className="flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-none bg-gray-50 px-6 py-5 md:w-2/5 md:px-8">
          <p
            className={`${lusitana.className} text-3xl text-gray-800 font-bold md:text-4xl lg:text-7xl md:leading-normal`}
          >
            <strong className="text-logo-100">Unlock </strong>
            <strong>Opportunities</strong>
          </p>
          <p
            className={`${lusitana.className} text-2xl text-gray-500 md:text-3xl md:leading-normal`}
          >
            Make the most of every opportunity to learn and level up your
            skills.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-full bg-logo-100 px-6 py-3 text-lg font-bold text-white transition-colors md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-6 md:py-6">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={800}
            height={660}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden lg:hidden"
            alt="Screenshots of the dashboard project showing mobile version"
          />
        </div>
     

      </div>
    </main>
  );
}
