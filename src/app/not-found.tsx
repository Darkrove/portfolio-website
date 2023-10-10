import Label from "@/components/label";
import Layout from "@/components/layout";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { ChevronLeft } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "Page not found",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function NotFound() {
  return (
    <Layout>
      <div className="flex flex-col w-full min-h-screen justify-center items-center gap-6 text-center">
        <Label>Site not found...</Label>
        <Label size="sm">
          The site you&apos;re searching for does not exist.
        </Label>
        <Link
          className={buttonVariants({
            variant: "ghost",
            className: "w-fit",
          })}
          href="/"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>
      </div>
    </Layout>
  );
}
