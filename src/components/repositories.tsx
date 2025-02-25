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
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "./ui/button";

interface Props {}
async function getData() {
  const res = await fetch(
    process.env.NEXT_URL + "/api/pinned?username=darkrove",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Repositories = async () => {
  const res = await getData();
  console.log(res.user);
  return (
    <div className="flex flex-col gap-3 w-full justify-start px-8">
      <Label size="sm">projects.</Label>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {res.pinnedItems.nodes.map(
          (repo: any, index: Key | null | undefined) => {
            const imageUrl = `p/${repo.name}/image`;
            const languages = repo.languages.nodes;
            const language = languages.length > 0 ? languages[0].name : ""; // Get the first language name
            const firstLanguageColor =
              languages.length > 0 ? languages[0].color : ""; // Get the first language color
            const star = repo.stargazerCount;
            const fork = repo.forkCount;
            const url = getNextImageUrl(imageUrl, language, star, fork);

            return (
              <Card key={index} className="border-none">
                {/* <CardHeader>
                  <CardTitle className="text-base">
                    <Link
                      href={repo.url}
                      target="_blank"
                      className="text-sky-600 dark:text-sky-400"
                    >
                      {repo.name}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {repo.description}
                  </CardDescription>
                </CardHeader> */}
                <CardHeader>
                  <Image
                    src={`/${repo.name}-v2.png`}
                    alt="repo image"
                    width={1000}
                    height={1000}
                    className="w-full rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] opacity-80 hover:opacity-100"
                  />
                </CardHeader>
                {/* <CardContent>
                  <Link href={url} target="_blank">
                    <Image
                      src={`/${repo.name}-v2.png`}
                      alt="repo image"
                      width={1000}
                      height={1000}
                      className="w-full rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] "
                    />
                  </Link>
                </CardContent> */}
                <CardFooter className="text-sm">
                  {/* <div className="mt-1 flex items-center justify-start w-full h-6 space-x-4">
                    <p
                      className={`flex justify-center items-center text-[${firstLanguageColor}]`}
                    >
                      <Icons.circle className="w-4 h-4 mr-1" /> {language}
                    </p>
                    <Separator orientation="vertical" />
                    <p className="flex justify-center items-center">
                      <Icons.star className="w-4 h-4 mr-1 text-yellow-500" />{" "}
                      {star}
                    </p>
                    <Separator orientation="vertical" />
                    <p className="flex justify-center items-center">
                      <Icons.fork className="w-4 h-4 mr-1" /> {fork}
                    </p>
                  </div> */}
                  <div className="flex items-center justify-between w-full">
                    <div className="space-y-1">
                      <h1 className="text-lg font-bold">{repo.name}</h1>
                      <p className="text-sm text-gray-400 camelcase">
                        {language}
                      </p>
                    </div>
                    <Link
                      href={repo.url}
                      target="_blank"
                      className={buttonVariants({
                        size: "icon",
                        variant: "secondary",
                      })}
                    >
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            );
          }
        )}
        <Card className="border-none">
                <CardHeader>
                  <Image
                    src={`/hae-v2.png`}
                    alt="repo image"
                    width={1000}
                    height={1000}
                    className="w-full rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] opacity-80 hover:opacity-100"
                  />
                </CardHeader>
                <CardFooter className="text-sm">
                  <div className="flex items-center justify-between w-full">
                    <div className="space-y-1">
                      <h1 className="text-lg font-bold">Data Monitoring</h1>
                      <p className="text-sm text-gray-400 camelcase">
                        Typescript, MongoDB, Next
                      </p>
                    </div>
                    <Link
                      href="http://dashboard-hae.vercel.app/"
                      target="_blank"
                      className={buttonVariants({
                        size: "icon",
                        variant: "secondary",
                      })}
                    >
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                </CardFooter>
              </Card>
      </div>
    </div>
  );
};

export default Repositories;
