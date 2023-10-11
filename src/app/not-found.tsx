import Label from "@/components/label";
import Layout from "@/components/layout";
import PrismCode from "@/components/prism-code";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";
import { ChevronLeft } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CSSProperties } from "react";

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
      <div className="flex flex-col w-full min-h-screen justify-center items-center gap-6 text-center p-4">
        <Label size="lg">4{`</>`}4</Label>
        <Code />
        <Separator className="w-full lg:w-3/4" />
        <Link
          className={buttonVariants({
            variant: "ghost",
            className: "w-fit ",
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

const Code = () => (
  <div className="max-w-full mx-auto bg-gray-800 rounded-lg text-left">
    <div className="py-3 border-b border-gray-500/30">
      <div className="flex space-x-1.5 px-3">
        <div className="w-2.5 h-2.5 rounded-full bg-red-600"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-600"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-green-600"></div>
      </div>
    </div>
    <div className="flex">
      <div className="flex flex-col justify-between w-full overflow-hidden">
        <PrismCode>
          <span className="token tag">
            <span className="token tag">
              <span className="token punctuation">&lt;</span>div
            </span>{" "}
            <span className="token attr-name">id</span>
            <span className="token attr-value">
              <span className="token punctuation attr-equals">=</span>
              <span className="token punctuation">&quot;</span>404
              <span className="token punctuation">&quot;</span>
            </span>
            <span className="token punctuation">&gt;</span>
          </span>
          <br />
          <span className="token tag ml-4">
            <span className="token tag">
              <span className="token punctuation">&lt;</span>error
            </span>{" "}
            <span className="token attr-name">msg</span>
            <span className="token attr-value">
              <span className="token punctuation attr-equals">=</span>
              <span className="token punctuation">&quot;</span>page not found
              <span className="token punctuation">&quot;</span>
            </span>
            <span className="token punctuation">&gt;</span>
          </span>
          <br />
          <span className="token tag">
            <span className="token tag">
              <span className="token punctuation">&lt;/</span>div
            </span>
            <span className="token punctuation">&gt;</span>
          </span>
        </PrismCode>
      </div>
    </div>
  </div>
);
