import React from "react";
import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";

interface Props {}

const Bar = () => {
  return (
    <div className="framer-shadow dark:bg-zinc-900 bg-white">
      <div id="wrapper" className="flex gap-2 items-center">
        <Image
          className="w-6 h-6"
          src="/avatar.png"
          alt="logo"
          width={100}
          height={100}
        />
        <p className="text-sm capitalize ">sajjad</p>
      </div>
      <div id="wrapper" className="flex items-center gap-2">
        <Link
          className="flex items-center p-1 sm:p-0 sm:py-1 sm:px-2 hover:bg-zinc-100 dark:hover:bg-zinc-600 rounded-full transform hover:scale-105 transition-transform duration-300 ease-in-out"
          href={siteConfig.links.twitter}
          target="_blank"
        >
          <div className="flex justify-center relative group">
            <Icons.x className="w-5 h-5 sm:mr-1" />
            <p className="text-sm hidden sm:block">sajjad</p>
          </div>
        </Link>
        <Link
          className="flex items-center p-1 sm:p-0 sm:py-1 sm:px-2 hover:bg-zinc-100 dark:hover:bg-zinc-600 rounded-full transform hover:scale-105 transition-transform duration-300 ease-in-out"
          href={siteConfig.links.github}
          target="_blank"
        >
          <div className="flex justify-center relative group">
            <Icons.gitHub className="w-5 h-5 sm:mr-1" />
            <p className="text-sm hidden sm:block">darkrove</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Bar;
