import React from "react";

import { Icons } from "@/components/icons";
import { Stats } from "@/components/stats";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import Intro from "@/components/intro";
import Bar from "@/components/bar";
import { Separator } from "@/ui/separator";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

interface Props {}

const techStack = {
  languages: [
    {
      name: "HTML",
      icon: () => <Icons.html className="mr-2 w-4 h-4" />,
    },
    {
      name: "CSS",
      icon: () => <Icons.css className="mr-2 w-4 h-4" />,
    },
    {
      name: "JavaScript",
      icon: () => <Icons.js className="mr-2 w-4 h-4" />,
    },
    {
      name: "Python",
      icon: () => <Icons.python className="mr-2 w-4 h-4" />,
    },
    {
      name: "Java",
      icon: () => <Icons.java className="mr-2 w-4 h-4" />,
    },
  ],
  frameworks: [
    {
      name: "Next.js",
      icon: () => <Icons.next className="mr-2 w-4 h-4" />,
    },
  ],
  javascript: [
    {
      name: "React.js",
      icon: () => <Icons.react className="mr-2 w-4 h-4" />,
    },
  ],
  templates: [
    {
      name: "TypeScript",
      icon: () => <Icons.ts className="mr-2 w-4 h-4" />,
    },
  ],
};

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
            <Link
              className={buttonVariants({ size: "lg" })}
              href="https://api.whatsapp.com/send/?phone=8433624344&type=phone_number&app_absent=0"
              target="_blank"
            >
              Chat With Me
              <Icons.whatsapp className="ml-2 w-5 h-5" />
            </Link>
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

        <div className="flex flex-col gap-3 w-full justify-start px-8">
          <div className="leading-none">
            <h2 className="dark:text-slate-200 text-slate-900 text-[1.5rem] m-0 font-bold capitalize">
              Expertise
            </h2>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Badge variant="success" size="md" className="flex items-center">
              <Icons.react className="mr-2 w-5 h-5" />
              React Developer
            </Badge>
            <Badge variant="error" size="md" className="flex items-center">
              <Icons.code className="mr-2 w-5 h-5" />
              Web Developer
            </Badge>
            <Badge variant="info" size="md" className="flex items-center">
              <Icons.graduationHat className="mr-2 w-5 h-5" />
              Graduate Student
            </Badge>
          </div>
        </div>

        <Separator />

        <div className="flex flex-col gap-3 w-full justify-start px-8">
          <div className="leading-none">
            <h2 className="dark:text-slate-200 text-slate-900 text-[1.5rem] m-0 font-bold capitalize">
              Tech Stack
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="pb-5">
              <h2 className="dark:text-zinc-400 text-zinc-600 text-[1rem] m-0 font-bold capitalize">
                Frameworks
              </h2>
              <div className="pt-5 flex flex-col justify-start text-sm dark:text-slate-400 text-slate-700">
                {techStack.frameworks.map((language, index) => (
                  <p key={index} className="flex items-center">
                    {language.icon()}
                    {language.name}
                  </p>
                ))}
              </div>
            </div>
            <div className="pb-5">
              <h2 className="dark:text-zinc-400 text-zinc-600 text-[1rem] m-0 font-bold capitalize">
                Javascript UI
              </h2>
              <div className="pt-5 flex flex-col justify-start text-sm dark:text-slate-400 text-slate-700">
                {techStack.javascript.map((language, index) => (
                  <p key={index} className="flex items-center">
                    {language.icon()}
                    {language.name}
                  </p>
                ))}
              </div>
            </div>
            <div className="pb-5">
              <h2 className="dark:text-zinc-400 text-zinc-600 text-[1rem] m-0 font-bold capitalize">
                Languages
              </h2>
              <div className="pt-5 flex gap-2 flex-col justify-start text-sm dark:text-slate-400 text-slate-700">
                {techStack.languages.map((language, index) => (
                  <p key={index} className="flex items-center">
                    {language.icon()}
                    {language.name}
                  </p>
                ))}
              </div>
            </div>
            <div className="pb-5">
              <h2 className="dark:text-zinc-400 text-zinc-600 text-[1rem] m-0 font-bold capitalize">
                Templating Languages
              </h2>
              <div className="pt-5 flex gap-2 flex-col justify-start text-sm dark:text-slate-400 text-slate-700">
                {techStack.templates.map((language, index) => (
                  <p key={index} className="flex items-center">
                    {language.icon()}
                    {language.name}
                  </p>
                ))}
              </div>
            </div>
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
