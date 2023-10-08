import React from "react";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/icons";

interface Props {}

const Expertise = () => {
  return (
    <div className="flex flex-col gap-3 w-full justify-start px-8">
      <div className="leading-none">
        <h2 className="dark:text-zinc-200 text-zinc-900 text-[1.5rem] m-0 font-bold capitalize">
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
  );
};

export default Expertise;
