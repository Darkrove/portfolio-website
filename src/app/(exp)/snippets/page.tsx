import React from "react";
import Label from "@/components/label";
import Layout from "@/components/layout";
import Bar from "@/components/bar";
import Rhythm from "./rhythm";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

interface Props {}

const page = () => {
  return (
    <>
      <Layout>
        <div className="w-full flex flex-col space-y-4 justify-center items-center py-4 sm:py-8">
          <Bar />
          <div className="flex flex-col gap-3 w-full justify-start px-8">
            <Label size="sm">Cool Snippets</Label>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Spring Animation</CardTitle>
                <CardDescription className="text-sm">
                  Auto scale animation using useSpring.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full relative h-[300px] c overflow-hidden flex flex-col justify-center items-center">
                  <Rhythm className="absolute inset-0 z-0" />
                  <div className="relative z-10 p-8 min-h-full flex justify-center items-center">
                    <Label size="lg" className="text-center">Cool Animation</Label>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="text-sm">
                <Link
                  href="https://github.com/Darkrove/portfolio-website/tree/main/src/app/(exp)/snippets/rhythm.tsx"
                  target="_blank"
                  className={buttonVariants({ variant: "outline", size: "lg" })}
                >
                  View Code
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default page;
