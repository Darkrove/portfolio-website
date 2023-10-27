import React from "react";
import Label from "@/components/label";
import { Icons } from "@/components/icons";

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
    {
      name: "Nuxt.js",
      icon: () => <Icons.nuxt className="mr-2 w-4 h-4" />,
    },
  ],
  javascript: [
    {
      name: "React.js",
      icon: () => <Icons.react className="mr-2 w-4 h-4" />,
    },
    {
      name: "Vue.js",
      icon: () => <Icons.vue className="mr-2 w-4 h-4" />,
    },
  ],
  templates: [
    {
      name: "TypeScript",
      icon: () => <Icons.ts className="mr-2 w-4 h-4" />,
    },
  ],
};

const Stack = () => {
  return (
    <div className="flex flex-col gap-3 w-full justify-start px-8">
      <Label size="sm">Tech Stack</Label>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="pb-5">
          <h2 className="dark:text-zinc-400 text-zinc-600 text-[1rem] m-0 font-bold capitalize">
            Frameworks
          </h2>
          <div className="pt-5 flex gap-2 flex-col justify-start text-sm dark:text-zinc-400 text-zinc-700">
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
          <div className="pt-5 flex gap-2 flex-col justify-start text-sm dark:text-zinc-400 text-zinc-700">
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
          <div className="pt-5 flex gap-2 flex-col justify-start text-sm dark:text-zinc-400 text-zinc-700">
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
          <div className="pt-5 flex gap-2 flex-col justify-start text-sm dark:text-zinc-400 text-zinc-700">
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
  );
};

export default Stack;
