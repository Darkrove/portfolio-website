import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";

interface Props {}

const Cta = () => {
  return (
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
        <Link
          href="https://www.linkedin.com/feed/update/urn:li:activity:7124769450238631936/"
          target="_blank"
          className={cn(
            buttonVariants({ size: "lg", variant: "outline" }),
            "dark:text-emerald-400 text-emerald-600 hover:text-emerald-600"
          )}
        >
          Data Specialist
          <span className="font-bold uppercase">, HERE Technologies!</span>
          <Icons.pin className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default Cta;
