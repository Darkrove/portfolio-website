import type { LanyardResponse } from "@/lib/types";
import { SiDiscord, SiLeetcode } from "react-icons/si";
import { AiFillStar } from "react-icons/ai";
import clsx from "clsx";
import { apiUrls } from "@/lib/api-urls";
import { Separator } from "@/ui/separator";

export const getData = async () => {
  const res = await fetch(apiUrls.lanyard.get("756943267701981195"), {
    next: { revalidate: 10 },
  });
  if (!res.ok) {
    const error = await res.json();
    throw error;
  }
  return await res.json();
};

const fetchLeetCode = async () => {
  const res = await fetch(apiUrls.leetcode.get("darkrove"), {
    next: { revalidate: 10 },
  });
  if (!res.ok) {
    const error = await res.json();
    throw error;
  }
  return await res.json();
};

const fetchGithub = async () => {
  const res = await fetch(apiUrls.github.get("darkrove"), {
    next: { revalidate: 10 },
  });
  if (!res.ok) {
    const error = await res.json();
    throw error;
  }
  return await res.json();
};

export async function Discord() {
  const response = await getData();
  const res = await fetchLeetCode();
  const githubRes = await fetchGithub();
  const data: LanyardResponse = response.data;
  const rank = res.data.userProfile.profile.ranking;
  return (
    <div className="flex gap-3">
      <p
        className={clsx(
          {
            "dark:text-zinc-400 text-zinc-600 m-0 text-xs lg:text-sm md:text-sm":
              data?.discord_status === "offline" || !data?.discord_status,
            "dark:text-green-400 text-green-600 m-0 text-xs lg:text-sm md:text-sm":
              data?.discord_status === "online",
            "dark:text-yellow-400 text-yellow-600 m-0 text-xs lg:text-sm md:text-sm":
              data?.discord_status === "idle",
            "dark:text-red-400 text-red-600 m-0 text-xs lg:text-sm md:text-sm":
              data?.discord_status === "dnd",
          },
          "flex justify-center items-center"
        )}
      >
        <SiDiscord className="inline-block mr-1 w-4 h-4" />{" "}
        {data?.discord_status || "offline"}
      </p>
      <Separator orientation="vertical" />
      <p className="dark:text-purple-400 text-orange-600 m-0 text-xs lg:text-sm md:text-sm flex justify-center items-center">
        <SiLeetcode className="inline-block mr-1 w-4 h-4" /> {rank}
      </p>
      <Separator orientation="vertical" />
      <p className="dark:text-yellow-400 text-orange-600 m-0 text-xs lg:text-sm md:text-sm flex justify-center items-center">
        <AiFillStar className="inline-block mr-1 w-4 h-4" /> {githubRes.stars}
      </p>
    </div>
  );
}