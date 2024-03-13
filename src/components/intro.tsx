import React from "react";
import Balancer from "react-wrap-balancer";
import { siteConfig } from "@/config/site";
import Label from "@/components/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Props {}

const Intro = () => {
  return (
    <div className="w-full h-full px-8 py-4 flex flex-col justify-center items-center relative">
      <section className="flex flex-col-reverse lg:flex-row md:flex-row w-full justify-between items-start gap-4 lg:gap-14 md:gap-8 prose">
        <div className="leading-none">
          <Label size="md capitalize">Hi, I&apos;m {siteConfig.name}</Label>
          <p className="dark:text-zinc-300 text-zinc-800 mt-2 mb-4 m-0">
            {siteConfig.description}
          </p>
          <Balancer className="dark:text-zinc-400 text-zinc-700 text-sm m-0">
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
  );
};

export default Intro;
