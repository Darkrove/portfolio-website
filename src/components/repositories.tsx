import React from "react";
import { Key } from "react";

import { Icons } from "@/components/icons";
import { Separator } from "@/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { getNextImageUrl } from "@/utility/image";
import Link from "next/link";
import { BASE_URL } from "@/config/site";
import Label from "@/components/label";

interface Props {}
async function getData() {
  const res = await fetch("https://ghpr.asrvd.me/darkrove", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Repositories = async () => {
  const res = await getData();
  return (
    <div className="flex flex-col gap-3 w-full justify-start px-8">
      <Label size="sm">Repositories</Label>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {res.map((repo: any, index: Key | null | undefined) => {
          const imageUrl = `p/${repo.name}/image`;
          const language = repo.language;
          const star = repo.stars;
          const fork = repo.forks;
          const url = getNextImageUrl(imageUrl, language, star, fork);

          return (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-base">
                  <Link
                    href={`https://github.com/Darkrove/${repo.name}`}
                    target="_blank"
                    className="text-sky-600 dark:text-sky-400"
                  >
                    {repo.name}
                  </Link>
                </CardTitle>
                <CardDescription className="text-sm">
                  {repo.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={url} target="_blank">
                  <Image
                    src={`/${repo.name}-v2.png`}
                    alt="repo image"
                    width={1000}
                    height={1000}
                    className="w-full rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] "
                  />
                </Link>
              </CardContent>
              <CardFooter className="text-sm">
                <div className="mt-1 flex items-center justify-start w-full h-6 space-x-4">
                  <p
                    className={`flex justify-center items-center text-[${repo.languageColor}]`}
                  >
                    <Icons.circle className="w-4 h-4 mr-1" /> {repo.language}
                  </p>
                  <Separator orientation="vertical" />
                  <p className="flex justify-center items-center">
                    <Icons.star className="w-4 h-4 mr-1 text-yellow-500" />{" "}
                    {repo.stars}
                  </p>
                  <Separator orientation="vertical" />
                  <p className="flex justify-center items-center">
                    <Icons.fork className="w-4 h-4 mr-1" /> {repo.forks}
                  </p>
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Repositories;
