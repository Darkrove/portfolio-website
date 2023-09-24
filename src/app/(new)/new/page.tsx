import React from "react";
import Image from "next/image";
import Link from "next/link";

import Layout from "@/components/layout";
import { Icons } from "@/components/icons";

interface Props {}

const page = () => {
  return (
    <Layout>
      <div className="w-full h-full p-8 flex flex-col justify-center items-center relative gap-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="sm:rounded-none rounded-3xl sm:rounded-tl-2xl sm:rounded-tr-3xl sm:rounded-bl-3xl bg-secondary">
            <div className="flex h-full flex-col justify-end ">
              <Image
                src="https://avatars.githubusercontent.com/u/53792139?v=4"
                alt="avatar"
                className="sm:rounded-none rounded-3xl shadow-xl sm:rounded-tl-2xl sm:rounded-tr-3xl sm:rounded-bl-3xl h-full relative object-cover grayscale m-0 hover:grayscale-0"
                height={1000}
                width={1000}
              />
            </div>
          </div>
          <div className="flex flex-col justify-between sm:col-span-2 gap-4">
            <div className="sm:rounded-none rounded-3xl bg-secondary sm:rounded-tl-3xl sm:rounded-tr-2xl p-4">
              <div className="flex justify-between items-center">
                <h2 className="text-secondary-foreground text-4xl m-0 font-extrabold">
                  Hi, I&apos;m <span className="text-[#86dba6]">Sajjad</span>
                </h2>
                <div className="flex gap-2">
                  <Link
                    href="https://www.linkedin.com/in/sajjad-shaikh-18a0811ab/"
                    target="_blank"
                    className="group rounded-xl transition-all duration-75 hover:scale-105 focus:outline-none active:scale-95 hover:bg-blue-500 h-8 w-8 flex justify-center items-center bg-primary/20"
                  >
                    <Icons.linkedin className="w-5 h-5 text-primary-foreground transition-all group-hover:text-gray-100" />
                  </Link>
                </div>
              </div>
              <p className="text-lg sm:w-3/4">
                I enjoy learning new things and try to overcome new challenges
                while analyzing how I improved through them.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row h-full justify-between gap-4">
              <div className="bg-secondary p-4 flex flex-col justify-between w-full rounded-3xl sm:rounded-none">
                <div className="w-full h-full justify-center flex items-center">
                  <p className="text-secondary-foreground text-2xl font-extrabold text-center">
                    Web <br />
                    developer
                  </p>
                </div>
              </div>
              <div className="sm:rounded-none rounded-3xl bg-secondary sm:rounded-br-3xl p-4 flex flex-col justify-between w-full">
                <div className="w-full h-full justify-center flex items-center">
                  <p className="text-secondary-foreground text-xl font-medium text-center">
                    Passionate to pursue the technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full bg-secondary p-8 rounded-3xl relative overflow-hidden">
          <div className="flex justify-center items-center h-32 w-full transition-all duration-500 ease-in">
            <Image
              src="/avatar.png"
              alt="avatar"
              className="shadow-xl rounded-full z-50 w-auto h-full relative object-contain object-center grayscale"
              height={1000}
              width={1000}
            />
            <div className="w-[120px] h-[120px] z-40 bg-green-500 rounded-full absolute left-1/2 bottom-1/2 transform -translate-x-1/2 card-circle"></div>
            <div className="w-[200px] h-[200px] z-30 bg-green-500/30 rounded-full absolute left-1/2 bottom-1/2 transform -translate-x-1/2 card-circle"></div>
            <div className="w-[280px] h-[280px] z-20 bg-green-500/20 rounded-full absolute left-1/2 bottom-1/2 transform -translate-x-1/2 card-circle"></div>
            <div className="w-[360px] h-[360px] z-10 bg-green-500/10 rounded-full absolute left-1/2 bottom-1/2 transform -translate-x-1/2 card-circle"></div>
            <div className="w-[440px] h-[440px] z-0 bg-green-500/5 rounded-full absolute left-1/2 bottom-1/2 transform -translate-x-1/2 card-circle"></div>
          </div>
          {/* <p className=" p-4">Content inside the div. Overflow is hidden.</p> */}
        </div>
        <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex w-full h-full justify-between">
            <div className="sm:rounded-none rounded-3xl sm:rounded-tl-3xl sm:rounded-bl-3xl bg-secondary p-4 flex flex-col justify-between w-full">
              <div className="w-full h-full justify-center flex flex-col gap-3 items-center">
                <Icons.twitter className="w-16 h-16 text-secondary-foreground transition-all group-hover:text-blue-500" />
                <h2 className="text-secondary-foreground text-xl m-0 font-bold"></h2>
                <Link
                  href="https://twitter.com/sajjads72619701"
                  target="_blank"
                  className="text-secondary-foreground text-xl m-0 font-bold"
                >
                  @sajjadshaikh
                </Link>
              </div>
            </div>
          </div>
          <div className="flex w-full h-full justify-between">
            <div className="bg-secondary p-4 flex flex-col justify-between w-full rounded-3xl sm:rounded-none">
              <div className="w-full h-full justify-center flex items-center">
                <Icons.pin className="w-7 h-7 mr-2" />
                <p className="text-secondary-foreground text-3xl font-extrabold text-center">
                  India
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full h-full justify-between">
            <div className="sm:rounded-none rounded-3xl sm:rounded-tr-3xl sm:rounded-br-3xl bg-secondary p-4 flex flex-col justify-between w-full">
              <div className="w-full h-full justify-center flex flex-col gap-3 items-center">
                <Icons.gitHub className="w-16 h-16 text-secondary-foreground transition-all group-hover:text-blue-500" />
                <h2 className="text-secondary-foreground text-xl m-0 font-bold"></h2>
                <Link
                  href="https://github.com/Darkrove"
                  target="_blank"
                  className="text-secondary-foreground text-xl m-0 font-bold"
                >
                  @darkrove
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default page;
