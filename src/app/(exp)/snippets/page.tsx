import React from "react";
import Label from "@/components/label";
import Layout from "@/components/layout";
import Bar from "@/components/bar";
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
import Rhythm from "./rhythm";
import { Background } from "@/components/app/background/background";

interface CardData {
  title: string;
  description: string;
  link: string;
  buttonText: string;
  content: React.ReactNode;
}

const cardList: CardData[] = [
  {
    title: "Spring Animation",
    description: "Auto scale animation using @framer-motion.",
    link: "https://github.com/Darkrove/portfolio-website/tree/main/src/app/(exp)/snippets/rhythm.tsx",
    buttonText: "View Code",
    content: <Rhythm className="absolute inset-0 z-0" />,
  },
  {
    title: "Space Animation",
    description: "Space animation using @react-three.",
    link: "https://github.com/Darkrove/portfolio-website/tree/main/src/components/app/background",
    buttonText: "View Code",
    content: <Background className="absolute inset-0 z-0" />,
  },
];

const Page = () => {
  return (
    <Layout>
      <div className="w-full flex flex-col space-y-4 justify-center items-center py-4 sm:py-8">
        <Bar />
        <div className="flex flex-col gap-3 w-full justify-start px-8">
          <Label size="sm">Cool Snippets</Label>
          {cardList.map((card, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-base">{card.title}</CardTitle>
                <CardDescription className="text-sm">
                  {card.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full relative h-[320px] c overflow-hidden flex flex-col justify-center items-center rounded-md">
                  {card.content}
                  <div className="relative z-10 p-8 min-h-full flex justify-center items-center">
                    <Label size="lg" className="text-center text-white">
                      Cool Animation
                    </Label>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="text-sm">
                <Link
                  href={card.link}
                  target="_blank"
                  className={buttonVariants({ variant: "outline", size: "lg" })}
                >
                  {card.buttonText}
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Page;
