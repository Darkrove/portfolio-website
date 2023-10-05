import React from "react";
import Link from "next/link";

import { Icons } from "@/components/icons";
import Layout from "@/components/layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";

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
        <div className="framer-shadow">
          <div id="wrapper" className="flex gap-2 items-center">
            <Avatar className="w-6 h-6">
              <AvatarImage src="https://avatars.githubusercontent.com/u/53792139?v=4" />
              <AvatarFallback>SS</AvatarFallback>
            </Avatar>
            <p className="text-sm capitalize ">sajjad</p>
          </div>
          <div id="wrapper" className="flex items-center gap-2">
            <Link
              className="flex items-center p-1 sm:p-0 sm:py-1 sm:px-2 hover:bg-gray-100 rounded-full"
              href={siteConfig.links.twitter}
              target="_blank"
            >
              <Icons.x className="w-5 h-5 sm:mr-1" />
              <p className="text-sm hidden sm:block">sajjad</p>
            </Link>
            <Link
              className="flex items-center p-1 sm:p-0 sm:py-1 sm:px-2 hover:bg-gray-100 rounded-full"
              href={siteConfig.links.github}
              target="_blank"
            >
              <Icons.gitHub className="w-5 h-5 sm:mr-1" />
              <p className="text-sm hidden sm:block">darkrove</p>
            </Link>
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
