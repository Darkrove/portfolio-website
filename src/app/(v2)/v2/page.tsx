import React from "react";
import Balancer from "react-wrap-balancer";
import Link from "next/link";

import { Icons } from "@/components/icons";
import { Stats } from "@/components/stats";
import Layout from "@/components/layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Props {}

const Page: React.FC<Props> = () => {
  const h1Style: React.CSSProperties = {
    fontSize: "min(20vw, 250px)",
    lineHeight: "87%",
    letterSpacing: "-0.01em",
  };

  const span1Style: React.CSSProperties = {
    fontStretch: "83%",
  };

  const span2Style: React.CSSProperties = {
    marginTop: "-0.7em",
    marginBottom: "-0.42em",
    fontSize: "0.75em",
  };

  const ampersandStyle: React.CSSProperties = {
    color: "rgba(0,0,0,0)",
    textShadow:
      "0px 3px 3px rgba(0, 0, 0, 0.23), 0px 1px 1px rgba(0, 0, 0, 0.35), 0px 6px 14px rgba(0, 0, 0, 0.25)",
  };

  const span3Style: React.CSSProperties = {
    textShadow: "0 3px 10px rgba(0, 0, 0, 20%)",
  };

  const span4Style: React.CSSProperties = {
    fontStretch: "82%",
  };

  return (
    <Layout>
      <div className="w-full flex flex-col space-y-4 justify-center items-center py-4 sm:py-8">
        <div className="framer-shadow dark:bg-slate-900 bg-white">
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
            <Link
              className="flex items-center p-1 sm:p-0 sm:py-1 sm:px-2 hover:bg-gray-100 rounded-full transform hover:scale-105 transition-transform duration-300 ease-in-out"
              href={siteConfig.links.twitter}
              target="_blank"
            >
              <div className="flex justify-center relative group">
                <Icons.x className="w-5 h-5 sm:mr-1" />
                <p className="text-sm hidden sm:block">sajjad</p>
              </div>
            </Link>
            <Link
              className="flex items-center p-1 sm:p-0 sm:py-1 sm:px-2 hover:bg-gray-100 rounded-full transform hover:scale-105 transition-transform duration-300 ease-in-out"
              href={siteConfig.links.github}
              target="_blank"
            >
              <div className="flex justify-center relative group">
                <Icons.gitHub className="w-5 h-5 sm:mr-1" />
                <p className="text-sm hidden sm:block">darkrove</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="w-full h-full px-8 py-4 flex flex-col justify-center items-center relative">
          <section className="flex flex-col-reverse lg:flex-row md:flex-row w-full justify-between items-start gap-4 lg:gap-14 md:gap-8 prose">
            <div className="leading-none">
              <h2 className="dark:text-slate-200 text-slate-900 text-[2.5rem] m-0 font-extrabold capitalize">
                {siteConfig.name}
              </h2>
              <p className="dark:text-slate-300 text-slate-800 mt-2 mb-4 m-0">
                {siteConfig.description}
              </p>
              <Balancer className="dark:text-slate-400 text-slate-700 text-sm m-0">
                {siteConfig.bio}
              </Balancer>
            </div>
            <div className="min-w-fit h-full flex items-center justify-center">
              <Avatar className="w-32 h-32">
                <AvatarImage src="https://avatars.githubusercontent.com/u/53792139?v=4" />
                <AvatarFallback>SS</AvatarFallback>
              </Avatar>
            </div>
          </section>
        </div>
        <div className="w-full flex justify-start px-8">
          <Stats />
        </div>
        <div className="w-full px-8 py-4">
          <div
            id="action"
            className="flex flex-col sm:flex-row justify-start gap-4"
          >
            <Button size="lg">
              Chat With Me
              <Icons.up className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline">
              Available for work
              <Icons.hourglass className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
        {/* <h1
          style={h1Style}
          className="font-extrabold text-2xl text-center uppercase"
        >
          <span className="block relative z-1">Mona</span>
          <span
            className="block relative z-2 lh-condensed-ultra text-extrabold"
            style={span2Style}
          >
            <span className="relative inline-block mona-ampersand">
              &amp;
              <span
                className="absolute top-0 left-0 z-n1"
                style={ampersandStyle}
              >
                &amp;
              </span>
            </span>
          </span>
          <span
            className="d-block relative z-3 font-alt-mktg text-extra-condensed"
            style={span3Style}
          >
            Hubot
          </span>
          <span
            style={span4Style}
            className="d-block italic text-heavy font-alt-mktg relative left-n1"
          >
            Sans
          </span>
        </h1> */}
      </div>
    </Layout>
  );
};

export default Page;
