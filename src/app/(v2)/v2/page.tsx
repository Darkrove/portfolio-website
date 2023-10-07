import React from "react";

import { Icons } from "@/components/icons";
import { Stats } from "@/components/stats";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import Intro from "@/components/intro";
import Bar from "@/components/bar";
import { Separator } from "@/ui/separator";

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
        <Bar />
        <Intro />
        <Stats />

        <div className="w-full px-8 py-4">
          <div
            id="action"
            className="flex flex-col sm:flex-row justify-start gap-4"
          >
            <Button size="lg">
              Chat With Me
              <Icons.up className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="dark:text-emerald-400 text-emerald-600 hover:text-emerald-600"
            >
              Available for work
              <Icons.hourglass className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
        <Separator />

        <div className="flex gap-3 w-full justify-start px-8">
          <div className="leading-none">
            <h2 className="dark:text-slate-200 text-slate-900 text-[2.5rem] m-0 font-extrabold capitalize">
              Tech stack
            </h2>
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
