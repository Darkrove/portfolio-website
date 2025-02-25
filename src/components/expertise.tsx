import React from "react";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/icons";
import Label from "@/components/label";

interface Props {}

const Expertise = () => {
  return (
    <div className="flex flex-col gap-3 w-full justify-start px-8">
      <Label size="sm">expertise.</Label>
      <div className="flex gap-3 flex-wrap">
        <Badge variant="success" size="md" className="flex items-center">
          <Icons.mongo className="mr-2 w-5 h-5" />
          MongoDB
        </Badge>
        <Badge variant="error" size="md" className="flex items-center">
          <Icons.database className="mr-2 w-5 h-5" />
          Database Administration
        </Badge>
        <Badge variant="info" size="md" className="flex items-center">
          <Icons.code className="mr-2 w-5 h-5" />
          Data Monitoring
        </Badge>
      </div>
    </div>
  );
};

export default Expertise;
