import Bar from "@/components/bar";
import { Icons } from "@/components/icons";
import Label from "@/components/label";
import Layout from "@/components/layout";
import React from "react";

import { FaXTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import Link from "next/link";
interface Props {}

const page = () => {
  const links = [
    {
      id: "github",
      name: "Github",
      link: "https://github.com/Darkrove",
      icon: FaGithub({ size: "1rem" }),
      username: "darkrove",
      external: true,
    },
    {
      id: "x",
      name: "X",
      link: "https://twitter.com/sajjads72619701",
      icon: FaXTwitter({ size: "1rem" }),
      username: "@sajjad",
      external: true,
    },
    {
      id: "linkedin",
      name: "Linkedin",
      link: "https://www.linkedin.com/in/sajjad-shaikh-18a0811ab/",
      icon: FaLinkedinIn({ size: "1rem" }),
      username: "@sajjadshaikh",
      external: true,
    },
  ];
  return (
    <Layout>
      <div className="w-full flex flex-col space-y-4 justify-center items-center py-4 sm:py-8">
        <Bar />
        <div className="flex flex-col gap-3 w-full justify-start px-8">
          <Label size="sm">Links</Label>
          <div className="flex flex-col gap-2 w-full p-2">
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.link}
                target={link.external ? "_blank" : ""}
                rel={link.external ? "noreferrer" : ""}
                className="w-full flex justify-between items-center p-2 bg-muted rounded-lg text-sm"
              >
                <p>
                  {" "}
                  {link.name} # {link.username}
                </p>
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default page;
