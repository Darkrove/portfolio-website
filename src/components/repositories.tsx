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
      <div className="leading-none">
        <h2 className="dark:text-slate-200 text-slate-900 text-[1.5rem] m-0 font-bold capitalize">
          Repositories
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {res.map((repo: any, index: Key | null | undefined) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-base">{repo.name}</CardTitle>
              <CardDescription className="text-sm">
                {repo.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={`/${repo.name}-v2.png`}
                alt="repo image"
                width={1000}
                height={1000}
                className="w-full rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] "
              />
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
        ))}
      </div>
    </div>
  );
};

export default Repositories;
