"use client";

import useSWR from "swr";
import { SiDiscord, SiLeetcode } from "react-icons/si";
import { AiFillStar, AiFillEye } from "react-icons/ai";
import clsx from "clsx";

import { Skeleton } from "@/components/ui/skeleton";
import { apiUrls } from "@/lib/api-urls";
import { Separator } from "@/ui/separator";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function Stats() {
  const {
    data: lanyardData = [],
    isLoading: isLanyardLoading,
    error: lanyardError,
  } = useSWR(apiUrls.lanyard.get("756943267701981195"), fetcher);

  const {
    data: leetcodeData = [],
    isLoading: isLeetcodeLoading,
    error: leetcodeError,
  } = useSWR(apiUrls.leetcode.get("darkrove"), fetcher);

  const {
    data: githubData = [],
    isLoading: isGithubLoading,
    error: githubError,
  } = useSWR(apiUrls.github.get("darkrove"), fetcher);

  const {
    data: umamiData = [],
    isLoading: isUmamiLoading,
    error: umamiError,
  } = useSWR(apiUrls.umami.get, fetcher);

  return (
    <div className="flex gap-3">
      {isLanyardLoading ? (
        <div className="dark:text-slate-400 text-slate-700 m-0 text-xs lg:text-sm md:text-sm flex justify-center items-center">
          <SiDiscord className="inline-block mr-1 w-4 h-4" />
          <Skeleton className="h-4 w-[30px] md:h-5" />
        </div>
      ) : (
        <p
          className={clsx(
            {
              "dark:text-zinc-400 text-zinc-600 m-0 text-xs lg:text-sm md:text-sm":
                lanyardData.data?.discord_status === "offline" ||
                !lanyardData.data?.discord_status,
              "dark:text-green-400 text-green-600 m-0 text-xs lg:text-sm md:text-sm":
                lanyardData.data?.discord_status === "online",
              "dark:text-yellow-400 text-yellow-600 m-0 text-xs lg:text-sm md:text-sm":
                lanyardData.data?.discord_status === "idle",
              "dark:text-red-400 text-red-600 m-0 text-xs lg:text-sm md:text-sm":
                lanyardData.data?.discord_status === "dnd",
            },
            "flex justify-center items-center"
          )}
        >
          <SiDiscord className="inline-block mr-1 w-4 h-4" />{" "}
          {lanyardData.data?.discord_status || "offline"}
        </p>
      )}

      <Separator orientation="vertical" />
      {isLeetcodeLoading ? (
        <div className="dark:text-slate-400 text-slate-700 m-0 text-xs lg:text-sm md:text-sm flex justify-center items-center">
          <SiLeetcode className="inline-block mr-1 w-4 h-4" />
          <Skeleton className="h-4 w-[30px] md:h-5" />
        </div>
      ) : (
        <p className="dark:text-purple-400 text-purple-600 m-0 text-xs lg:text-sm md:text-sm flex justify-center items-center">
          <SiLeetcode className="inline-block mr-1 w-4 h-4" />{" "}
          {leetcodeData.data?.userProfile?.profile?.ranking}
        </p>
      )}

      <Separator orientation="vertical" />
      {isGithubLoading ? (
        <div className="dark:text-slate-400 text-slate-700 m-0 text-xs lg:text-sm md:text-sm flex justify-center items-center">
          <AiFillStar className="inline-block mr-1 w-4 h-4" />
          <Skeleton className="h-4 w-[30px] md:h-5" />
        </div>
      ) : (
        <p className="dark:text-orange-400 text-orange-600 m-0 text-xs lg:text-sm md:text-sm flex justify-center items-center">
          <AiFillStar className="inline-block mr-1 w-4 h-4" />{" "}
          {githubData.stars}
        </p>
      )}

      <Separator orientation="vertical" />
      {isUmamiLoading ? (
        <div className="dark:text-slate-400 text-slate-700 m-0 text-xs lg:text-sm md:text-sm flex justify-center items-center">
          <AiFillEye className="inline-block mr-1 w-4 h-4" />
          <Skeleton className="h-4 w-[30px] md:h-5" />
        </div>
      ) : (
        <p className="dark:text-blue-400 text-blue-600 m-0 text-xs lg:text-sm md:text-sm flex justify-center items-center">
          <AiFillEye className="inline-block mr-1 w-4 h-4" />{" "}
          {umamiData.pageviews?.value}
        </p>
      )}
    </div>
  );
}
