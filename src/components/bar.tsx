import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";

interface LinkCompProps {
  url: string;
  target: string;
  children: ReactNode;
}

const LinkComp = ({ url, target, children }: LinkCompProps) => {
  return (
    <Link
      target={target}
      href={url}
      className="flex items-center p-1 hover:bg-zinc-100 dark:hover:bg-zinc-600 rounded-full transform hover:scale-105 transition-transform duration-300 ease-in-out"
    >
      <div className="flex justify-center relative group">{children}</div>
    </Link>
  );
};

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
        <LinkComp url={siteConfig.links.twitter} target="_blank">
          <Icons.x className="w-5 h-5" />
          {/* <p className="text-sm hidden sm:block">sajjad</p> */}
        </LinkComp>
        <LinkComp url={siteConfig.links.github} target="_blank">
          <Icons.gitHub className="w-5 h-5" />
          {/* <p className="text-sm hidden sm:block">darkrove</p> */}
        </LinkComp>
        <LinkComp url={`mailto:${siteConfig.mail}`} target="_blank">
          <Icons.mail className="w-5 h-5" />
        </LinkComp>
      </div>
    </div>
  );
};

export default Bar;
