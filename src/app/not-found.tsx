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
  const codeStyle: CSSProperties = {
    background: "#f4f4f4",
    padding: "1rem",
    margin: "1rem 0",
    overflowX: "auto",
  };

  const tagStyle: CSSProperties = {
    color: "#d73a49",
  };
  return (
    <Layout>
      <div className="flex flex-col w-full min-h-screen justify-center items-center gap-6 text-center p-4">
        <Label size="lg">4{`</>`}4</Label>
        {/* <pre style={codeStyle}>
          <code className="language-html">
            {`
  <div id="404u>
    <error msg="Page not found"/>
  </div>
            `}
          </code>
          
        </pre> */}
        <Code />
        <Separator />
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
        <div className="w-2.5 h-2.5 rounded-full bg-gray-600"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-gray-600"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-gray-600"></div>
      </div>
    </div>
    <div className="flex">
      <div className="w-14 flex flex-shrink-0 flex-col justify-between items-center border-r border-gray-500/30 text-gray-500 py-4">
        <svg width="24" height="216" fill="none">
          <path
            d="M3 69l6-6m-2-5a7 7 0 1014 0 7 7 0 00-14 0z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M8 7H5a1 1 0 00-1 1v12a1 1 0 001 1h10a1 1 0 001-1v-3m3.707-10.293l-3.414-3.414A1 1 0 0015.586 3H9a1 1 0 00-1 1v12a1 1 0 001 1h10a1 1 0 001-1V7.414a1 1 0 00-.293-.707zM7 103a2 2 0 100-4 2 2 0 000 4zm0 0v10m10-6a2 2 0 100-4 2 2 0 000 4zm0 0a3 3 0 01-3 3h-4a3 3 0 00-3 3m0 0a2 2 0 100 4 2 2 0 000-4z"
            stroke="currentColor"
            stroke-width="1.5"
          ></path>
          <path
            d="M11.5 160.031a.75.75 0 00-1-1.118l1 1.118zm-8-1.118a.75.75 0 00-1 1.118l1-1.118zm6.972 6.149a.75.75 0 10.993-1.124l-.993 1.124zm-7.937-1.124a.75.75 0 10.993 1.124l-.993-1.124zm7.022-.368l-.64-.393.64.393zm-5.114 0l.64-.393-.64.393zM3 161.25a.75.75 0 000 1.5v-1.5zm8 1.5a.75.75 0 000-1.5v1.5zM8 147l.372-.651A.75.75 0 007.25 147H8zm14 8l.372.651a.75.75 0 000-1.302L22 155zm-14.75 0a.75.75 0 001.5 0h-1.5zm5.378 4.492a.75.75 0 10.744 1.302l-.744-1.302zM7 157.75A2.25 2.25 0 019.25 160h1.5A3.75 3.75 0 007 156.25v1.5zm0-1.5A3.75 3.75 0 003.25 160h1.5A2.25 2.25 0 017 157.75v-1.5zm2.624 3.298A5.225 5.225 0 017 160.25v1.5a6.73 6.73 0 003.376-.903l-.752-1.299zM9.25 160v.197h1.5V160h-1.5zm0 .197V162h1.5v-1.803h-1.5zM7 160.25a5.225 5.225 0 01-2.624-.702l-.752 1.299A6.73 6.73 0 007 161.75v-1.5zM4.75 162v-1.803h-1.5V162h1.5zm0-1.803V160h-1.5v.197h1.5zm5.75-1.284a5.209 5.209 0 01-.876.635l.752 1.299c.403-.234.78-.507 1.124-.816l-1-1.118zm-6.124.635a5.21 5.21 0 01-.876-.635l-1 1.118c.344.309.721.582 1.124.816l.752-1.299zm4.86 4.701c.451.212.867.487 1.236.813l.993-1.124a6.77 6.77 0 00-1.588-1.046l-.64 1.357zM9.25 162c0 .433-.122.835-.332 1.177l1.277.787A3.737 3.737 0 0010.75 162h-1.5zm-.332 1.177A2.247 2.247 0 017 164.25v1.5a3.748 3.748 0 003.195-1.786l-1.277-.787zm-5.39 1.885a5.25 5.25 0 011.235-.813l-.64-1.357a6.77 6.77 0 00-1.588 1.046l.993 1.124zM7 164.25c-.81 0-1.52-.427-1.918-1.073l-1.277.787A3.748 3.748 0 007 165.75v-1.5zm-1.918-1.073A2.235 2.235 0 014.75 162h-1.5c0 .719.203 1.392.555 1.964l1.277-.787zM4 161.25H3v1.5h1v-1.5zm7 0h-1v1.5h1v-1.5zm-3.372-13.599l14 8 .744-1.302-14-8-.744 1.302zM8.75 155v-8h-1.5v8h1.5zm12.878-.651l-9 5.143.744 1.302 9-5.143-.744-1.302z"
            fill="currentColor"
          ></path>
          <path
            d="M3 205h8m-8 0v7a1 1 0 001 1h7m-8-8v-7a1 1 0 011-1h6a1 1 0 011 1v7m0 0v8m0-8h7a1 1 0 011 1v6a1 1 0 01-1 1h-7m4-11h6a1 1 0 001-1v-6a1 1 0 00-1-1h-6a1 1 0 00-1 1v6a1 1 0 001 1z"
            stroke="currentColor"
            stroke-width="1.5"
          ></path>
        </svg>
      </div>
      <div className="flex flex-col justify-between w-full overflow-hidden">
        <PrismCode>
          {`<div id="404" className="w-full flex items-center block">
    <error msg="Page not found"/>
</div>`}
        </PrismCode>

        <div className="border-t align-bottom border-gray-500/30 font-mono text-gray-200 text-xs p-4 space-y-2">
          <h3>Problems</h3>
          <ul className="text-gray-300 space-y-1">
            <li className="flex space-x-2 items-center">
              <svg
                width="24"
                height="24"
                fill="none"
                className="flex-none text-yellow-400"
              >
                <path
                  d="m5.207 16.203 5.072-10.137c.711-1.422 2.736-1.421 3.447 0l5.067 10.137c.642 1.285-.29 2.797-1.723 2.797H6.93c-1.434 0-2.366-1.513-1.723-2.797ZM12 10v2"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M12.5 16a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
                  stroke="currentColor"
                ></path>
              </svg>
              <p>
                &apos;flex&apos; applies the same CSS property as
                &apos;block&apos;.
              </p>
            </li>
            <li className="flex space-x-2 items-center">
              <svg
                width="24"
                height="24"
                fill="none"
                className="flex-none text-yellow-400"
              >
                <path
                  d="m5.207 16.203 5.072-10.137c.711-1.422 2.736-1.421 3.447 0l5.067 10.137c.642 1.285-.29 2.797-1.723 2.797H6.93c-1.434 0-2.366-1.513-1.723-2.797ZM12 10v2"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M12.5 16a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
                  stroke="currentColor"
                ></path>
              </svg>
              <p>
                &apos;block&apos; applies the same CSS property as
                &apos;flex&apos;.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
