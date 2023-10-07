import Link from "next/link";
import React from "react";
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
  );
};

export default Cta;
