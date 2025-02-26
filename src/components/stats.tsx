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

  // const {
  //   data: umamiData = [],
  //   isLoading: isUmamiLoading,
  //   error: umamiError,
  // } = useSWR(
  //   apiUrls.umami.get("6c2507b8-6434-42d4-8775-f0fea81d3b90"),
  //   fetcher
  // );

  return (
    <div className="flex gap-3 w-full justify-start px-8">
      {isLanyardLoading ? (
        <div className="dark:text-zinc-400 text-zinc-700 m-0 text-xs lg:text-sm md:text-sm flex justify-center items-center">
          <SiDiscord className="inline-block mr-1 w-4 h-4" />{" "}
          Discord - {" "}
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
          Discord - {" "}
          {lanyardData.data?.discord_status || "offline"}
        </p>
      )}

      <Separator orientation="vertical" />
      {isLeetcodeLoading ? (
        <div className="dark:text-zinc-400 text-zinc-700 m-0 text-xs lg:text-sm md:text-sm flex justify-center items-center">
          <SiLeetcode className="inline-block mr-1 w-4 h-4" />{" "}
          Leetcode - {" "}
          <Skeleton className="h-4 w-[30px] md:h-5" />
        </div>
      ) : (
        <p className="dark:text-rose-400 text-rose-600 m-0 text-xs lg:text-sm md:text-sm flex justify-center items-center">
          <SiLeetcode className="inline-block mr-1 w-4 h-4" />{" "}
          Leetcode - {" "}
          {leetcodeData.data?.userProfile?.profile?.ranking}
        </p>
      )}

      <Separator orientation="vertical" />
      {isGithubLoading ? (
        <div className="dark:text-zinc-400 text-zinc-700 m-0 text-xs lg:text-sm md:text-sm flex justify-center items-center">
          <AiFillStar className="inline-block mr-1 w-4 h-4" />{" "}
          Github Stars - {" "}
          <Skeleton className="h-4 w-[30px] md:h-5" />
        </div>
      ) : (
        <p className="dark:text-orange-400 text-orange-600 m-0 text-xs lg:text-sm md:text-sm flex justify-center items-center">
          <AiFillStar className="inline-block mr-1 w-4 h-4" />{" "}
          Github Stars - {" "}
          {githubData.stars}
        </p>
      )}

      {/* <Separator orientation="vertical" />
      {isUmamiLoading ? (
        <div className="dark:text-zinc-400 text-zinc-700 m-0 text-xs lg:text-sm md:text-sm flex justify-center items-center">
          <AiFillEye className="inline-block mr-1 w-4 h-4" />
          <Skeleton className="h-4 w-[30px] md:h-5" />
        </div>
      ) : (
        <p className="dark:text-cyan-400 text-cyan-600 m-0 text-xs lg:text-sm md:text-sm flex justify-center items-center">
          <AiFillEye className="inline-block mr-1 w-4 h-4" />{" "}
          {umamiData.pageviews?.value}
        </p>
      )} */}
    </div>
  );
}
