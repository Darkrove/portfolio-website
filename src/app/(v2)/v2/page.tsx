import Image from "next/image";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Spotlight, { SpotlightCard } from "@/components/spotlight";
import { Icons } from "@/components/icons";
import { Key } from "react";
import { Separator } from "@/components/ui/separator";

async function getData() {
  const res = await fetch("https://ghpr.asrvd.me/darkrove");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const res = await getData();

  const Card01 = "/card-01.png";
  const Card03 = "/card-03.png";
  const Card02 = "/card-02.png";
  const Card04 = "/card-04.png";
  const quantity = 100;
  const divElements = Array.from({ length: quantity }, (_, index) => (
    <div key={index} className="firefly" />
  ));
  const getRepoPath = (index: number) => {
    return `/repo-${index}.png`;
  };
  return (
    <body className="relative font-inter antialiased">
      <main className="relative min-h-screen flex flex-col bg-background overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
          <Spotlight className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none group">
            {/* Card #5 */}
            <SpotlightCard className="lg:col-span-2">
              <div className="relative h-full bg-background p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                {/* Radial gradient */}
                <div
                  className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 translate-z-0 dark:bg-slate-900 bg-slate-200 rounded-full blur-[80px]"></div>
                </div>
                <div className="flex flex-col justify-center h-full items-center text-center gap-1">
                  <div className="relative object-contain object-center inline-flex">
                    <div
                      className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"
                      aria-hidden="true"
                    ></div>
                  </div>
                  {/* Text */}
                  <div className="flex flex-col items-start justify-start gap-1 w-full h-full">
                    <div className="flex w-full justify-between items-center">
                      <div className="flex gap-3">
                        <Avatar className="w-14 h-14 grayscale">
                          <AvatarImage src="https://avatars.githubusercontent.com/u/53792139?v=4" />
                          <AvatarFallback>SS</AvatarFallback>
                        </Avatar>
                        <div>
                          <h2 className="text-foreground text-2xl m-0 font-semibold">
                            Hi, I&apos;m Sajjad.
                          </h2>
                          <h2 className="text-slate-600 text-md m-0 font-semibold text-left">
                            web developer
                          </h2>
                        </div>
                      </div>
                      <div className="justify-end">
                        <a
                          className="inline-flex justify-center items-center whitespace-nowrap rounded-lg dark:bg-slate-900 bg-slate-200 hover:bg-background border dark:border-slate-800 border-slate-100 p-2 text-sm font-medium dark:dark:text-slate-400 text-slate-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-700 transition-colors duration-150"
                          href="mailto:samaralishaikh212@gmail.com"
                          target="_blank"
                        >
                          <Icons.mail className="w-6 h-6" />
                        </a>
                      </div>
                    </div>

                    <h2 className="text-foreground text-2xl m-0 font-semibold mt-4 text-left">
                      Passionate to pursue the technology.
                    </h2>
                    <h2 className="text-slate-600 text-lg m-0 mt-4 text-left">
                      I am a self-taught 👨‍💻 web developer and programmer who
                      recently pursued a computer science degree 🎓. I started
                      coding in the 11th grade and discovered my passion for 🌐
                      web development during the COVID-19 pandemic. I love
                      working on both the frontend and backend. Currently, I am
                      exploring the exciting world of Web 3 🕸️.
                    </h2>
                  </div>

                  {/* <div className="grow mb-5">
                    <h2 className="text-foreground text-4xl m-0 font-extrabold">
                      Hi, I&apos;m{" "}
                      <span className="dark:text-slate-400 text-slate-600">Sajjad</span>
                    </h2>
                    <h2 className="text-xl text-foreground font-bold mb-1">
                      Amazing Integration
                    </h2>
                    <p className="text-sm text-slate-600">
                      Quickly apply filters to refine your issues lists and
                      create custom views.
                    </p>
                  </div> */}
                </div>
              </div>
            </SpotlightCard>
            {/* Card #4 */}
            <SpotlightCard>
              <div className="relative h-full min-h-[250px] bg-background rounded-[inherit] z-20 overflow-hidden">
                {/* Radial gradient */}
                <div
                  className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 translate-z-0 dark:bg-slate-900 bg-slate-200 rounded-full blur-[80px]"></div>
                </div>
                <div className="flex flex-col h-full justify-center items-center text-center">
                  <div className="relative w-full h-full">
                    <div className="firefly-body w-full h-full overflow-hidden relative">
                      {divElements}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="p-4">
                        {/* Your content goes here */}
                        <div className="relative object-contain object-center inline-flex">
                          <div
                            className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"
                            aria-hidden="true"
                          ></div>
                          <Image
                            className="inline-flex"
                            src={Card04}
                            width={200}
                            height={200}
                            alt="Card 03"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  {/* <div className="relative object-contain object-center inline-flex">
                    <div
                      className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"
                      aria-hidden="true"
                    ></div>
                    <Image
                      className="inline-flex"
                      src={Card04}
                      width={200}
                      height={200}
                      alt="Card 03"
                    />
                  </div> */}
                  {/* Text */}
                  {/* <div className="grow mb-5">
                    <h2 className="text-xl text-foreground font-bold mb-1">
                      Amazing Integration
                    </h2>
                    <p className="text-sm text-slate-600">
                      Quickly apply filters to refine your issues lists and
                      create custom views.
                    </p>
                  </div>
                  <a
                    className="inline-flex justify-center items-center whitespace-nowrap rounded-lg dark:bg-slate-900 bg-slate-200 hover:bg-background border dark:border-slate-800 border-slate-100 px-3 py-1.5 text-sm font-medium dark:text-slate-400 text-slate-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-700 transition-colors duration-150"
                    href="#0"
                  >
                    <svg
                      className="fill-slate-600 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="14"
                    >
                      <path d="M12.82 8.116A.5.5 0 0 0 12 8.5V10h-.185a3 3 0 0 1-2.258-1.025l-.4-.457-1.328 1.519.223.255A5 5 0 0 0 11.815 12H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM12.82.116A.5.5 0 0 0 12 .5V2h-.185a5 5 0 0 0-3.763 1.708L3.443 8.975A3 3 0 0 1 1.185 10H1a1 1 0 1 0 0 2h.185a5 5 0 0 0 3.763-1.708l4.609-5.267A3 3 0 0 1 11.815 4H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM1 4h.185a3 3 0 0 1 2.258 1.025l.4.457 1.328-1.52-.223-.254A5 5 0 0 0 1.185 2H1a1 1 0 0 0 0 2Z" />
                    </svg>
                    <span>Connect</span>
                  </a> */}
                </div>
              </div>
            </SpotlightCard>
            {/* Card #1 */}
            <SpotlightCard>
              <div className="relative h-full bg-background p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                {/* Radial gradient */}
                <div
                  className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 translate-z-0 dark:bg-slate-900 bg-slate-200 rounded-full blur-[80px]"></div>
                </div>
                <div className="flex flex-col h-full justify-center items-center text-center">
                  {/* Image */}
                  <div className="relative inline-flex">
                    <div
                      className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"
                      aria-hidden="true"
                    ></div>
                    <Image
                      className="inline-flex"
                      src={Card01}
                      width={200}
                      height={200}
                      alt="Card 01"
                    />
                  </div>
                  {/* Text */}
                  <div className="grow mb-5">
                    <h2 className="text-xl text-foreground font-bold mb-1">
                      Github Profile
                    </h2>
                  </div>
                  <Link
                    className="inline-flex justify-center items-center whitespace-nowrap rounded-lg dark:bg-slate-900 bg-slate-200 hover:bg-background border dark:border-slate-800 border-slate-100 px-3 py-1.5 text-sm font-medium dark:text-slate-400 text-slate-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-700 transition-colors duration-150"
                    href="https://github.com/Darkrove"
                    target="_blank"
                  >
                    <Icons.up className="mr-2 w-4 h-4" />
                    <span>@darkrove</span>
                  </Link>
                </div>
              </div>
            </SpotlightCard>
            {/* Card #2 */}
            <SpotlightCard>
              <div className="relative h-full bg-background p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                {/* Radial gradient */}
                <div
                  className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 translate-z-0 dark:bg-slate-900 bg-slate-200 rounded-full blur-[80px]"></div>
                </div>
                <div className="flex flex-col h-full justify-center items-center text-center">
                  {/* Image */}
                  <div className="relative inline-flex">
                    <div
                      className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"
                      aria-hidden="true"
                    ></div>
                    <Image
                      className="inline-flex"
                      src={Card02}
                      width={200}
                      height={200}
                      alt="Card 02"
                    />
                  </div>
                  {/* Text */}
                  <div className="grow mb-5">
                    <h2 className="text-xl text-foreground font-bold mb-1">
                      Twitter Profile
                    </h2>
                  </div>
                  <Link
                    className="inline-flex justify-center items-center whitespace-nowrap rounded-lg dark:bg-slate-900 bg-slate-200 hover:bg-background border dark:border-slate-800 border-slate-100 px-3 py-1.5 text-sm font-medium dark:text-slate-400 text-slate-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-700 transition-colors duration-150"
                    href="https://twitter.com/sajjads72619701"
                    target="_blank"
                  >
                    <Icons.up className="mr-2 w-4 h-4" />
                    <span>@sajjadshaikh</span>
                  </Link>
                </div>
              </div>
            </SpotlightCard>
            {/* Card #3 */}
            <SpotlightCard>
              <div className="relative h-full bg-background p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                {/* Radial gradient */}
                <div
                  className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 translate-z-0 dark:bg-slate-900 bg-slate-200 rounded-full blur-[80px]"></div>
                </div>
                <div className="flex flex-col h-full items-center text-center">
                  {/* Image */}
                  <div className="relative inline-flex">
                    <div
                      className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"
                      aria-hidden="true"
                    ></div>
                    <Image
                      className="inline-flex"
                      src={Card03}
                      width={200}
                      height={200}
                      alt="Card 03"
                    />
                  </div>
                  {/* Text */}
                  <div className="grow mb-5">
                    <h2 className="text-xl text-foreground font-bold mb-1">
                      Linkedin Profile
                    </h2>
                  </div>
                  <Link
                    className="inline-flex justify-center items-center whitespace-nowrap rounded-lg dark:bg-slate-900 bg-slate-200 hover:bg-background border dark:border-slate-800 border-slate-100 px-3 py-1.5 text-sm font-medium dark:text-slate-400 text-slate-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-700 transition-colors duration-150"
                    href="https://www.linkedin.com/in/sajjad-shaikh-18a0811ab/"
                    target="_blank"
                  >
                    <Icons.up className="mr-2 w-4 h-4" />
                    <span>@sajjad</span>
                  </Link>
                </div>
              </div>
            </SpotlightCard>
            {/* Card #3 */}
            <h1 className="lg:col-span-3 text-3xl font-bold">
              <Separator className="mb-4" />
              Top Projects
              <Separator className="mt-4" />
            </h1>
            {res.map((repo: any, index: Key | null | undefined) => (
              <SpotlightCard key={index}>
                <div className="relative h-full bg-background p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                  {/* Radial gradient */}
                  <div
                    className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                    aria-hidden="true"
                  >
                    <div className="absolute inset-0 translate-z-0 dark:bg-slate-900 bg-slate-200 rounded-full blur-[80px]"></div>
                  </div>
                  <div className="flex flex-col h-full items-center text-center">
                    {/* Image */}
                    <div className="relative inline-flex">
                      <div
                        className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"
                        aria-hidden="true"
                      ></div>
                      <Image
                        className="inline-flex w-full"
                        src={`/${repo.name}.png`}
                        width={200}
                        height={200}
                        alt="Card 03"
                      />
                    </div>
                    {/* Text */}
                    <div className="grow mb-5">
                      <h2 className="text-xl text-foreground font-bold mb-1">
                        {repo.name}
                      </h2>
                      <p className="text-sm text-slate-600 ">
                        {repo.description}
                      </p>
                      <div className="mt-1 flex items-center justify-center w-full h-6 space-x-4">
                        <p className="flex justify-center items-center">
                          <Icons.star className="w-4 h-4 mr-1" /> {repo.stars}
                        </p>
                        <Separator orientation="vertical" />
                        <p className="flex justify-center items-center">
                          <Icons.fork className="w-4 h-4 mr-1" /> {repo.forks}
                        </p>
                      </div>
                    </div>
                    <Link
                      className="inline-flex justify-center items-center whitespace-nowrap rounded-lg dark:bg-slate-900 bg-slate-200 hover:bg-background border dark:border-slate-800 border-slate-100 px-3 py-1.5 text-sm font-medium dark:text-slate-400 text-slate-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-700 transition-colors duration-150"
                      href={`https://github.com/Darkrove/${repo.name}`}
                      target="_blank"
                    >
                      <Icons.link className="w-4 h-4 mr-2" />
                      <span>Repo</span>
                    </Link>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </Spotlight>
        </div>
      </main>
    </body>
  );
}
