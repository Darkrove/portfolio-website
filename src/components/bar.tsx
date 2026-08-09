"use client"

import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";
import { Command } from "@/components/cmd";
import { usePathname } from 'next/navigation'
import { Clock } from "@/components/clock";
import { Weather } from "@/components/weather";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface LinkCompProps {
  url: string;
  tip: string;
  target: string;
  children: ReactNode;
}

const LinkComp = ({ url, tip, target, children }: LinkCompProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            target={target}
            href={url}
            className="flex items-center p-1 hover:bg-zinc-100 dark:hover:bg-zinc-600 rounded-full transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <div className="flex justify-center relative group">{children}</div>
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const Bar = () => {
  const pathname = usePathname()

  const isActive = (path: string) => pathname.startsWith(path)
  return (
    <div className="framer-shadow dark:bg-zinc-900 bg-white">
      <div id="wrapper">
        <Link href="/" className="flex gap-2 items-center">
          <Image
            className="w-6 h-6"
            src="/avatar.png"
            alt="logo"
            width={100}
            height={100}
          />
          <p className="text-sm capitalize ">sajjad</p>
        </Link>
      </div>

      {/* Right side: Navigation, Weather, and Menu */}
      <div className="flex items-center">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 mr-4">
          <Link
            href="/writing"
            className={`text-sm hover:text-gray-900 dark:hover:text-gray-100 ${isActive('/writing') ? 'text-gray-900 dark:text-gray-100' : 'text-gray-500 dark:text-gray-400'
              }`}
          >
            writing
          </Link>
          <Link
            href="/projects"
            className={`text-sm hover:text-gray-900 dark:hover:text-gray-100 ${isActive('/projects') ? 'text-gray-900 dark:text-gray-100' : 'text-gray-500 dark:text-gray-400'
              }`}
          >
            projects
          </Link>
          <Link
            href="/snippets"
            className={`text-sm hover:text-gray-900 dark:hover:text-gray-100 ${isActive('/snippets') ? 'text-gray-900 dark:text-gray-100' : 'text-gray-500 dark:text-gray-400'
              }`}
          >
            snippets
          </Link>
          <Link
            href="/links"
            className={`text-sm hover:text-gray-900 dark:hover:text-gray-100 ${isActive('/links') ? 'text-gray-900 dark:text-gray-100' : 'text-gray-500 dark:text-gray-400'
              }`}
          >
            links
          </Link>
        </nav>

        {/* Divider - Only on desktop */}
        <span className="hidden md:block mr-4 text-gray-300">|</span>

        {/* Weather and Time - Always visible */}
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="md:block hidden">
            <Clock />
          </div>
          <Weather />
        </div>
      </div>
      {/* Mobile Menu Button - After weather */}
      <div className="ml-4 md:hidden border rounded-full p-1 hover:bg-zinc-100 dark:hover:bg-zinc-600">
        <Command />
      </div>
      {/* <div id="wrapper" className="flex items-center gap-2">
        <LinkComp url={siteConfig.links.twitter} target="_blank" tip="Twitter">
          <Icons.x className="w-5 h-5" />
          <p className="text-sm hidden sm:block">sajjad</p>
        </LinkComp>
        <LinkComp url={siteConfig.links.github} target="_blank" tip="Github">
          <Icons.gitHub className="w-5 h-5" />
          <p className="text-sm hidden sm:block">darkrove</p>
        </LinkComp>
        <LinkComp url={`mailto:${siteConfig.mail}`} target="_blank" tip="Gmail">
          <Icons.mail className="w-5 h-5" />
        </LinkComp>
        <Command />
      </div> */}
    </div>
  );
};

export default Bar;
