import React from "react";
import Image from "next/image";
import Spotlight, { SpotlightCard } from "@/components/spotlight";

interface Props {}

const page = () => {
  const Card01 = "/card-01.png";
  const Card03 = "/card-03.png";
  const Card02 = "/card-02.png";
  const Card04 = "/card-04.png";
  return (
    <body className="relative font-inter antialiased">
      <main className="relative min-h-screen flex flex-col bg-background overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <Spotlight className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none group">
            {/* Card #4 */}
            <SpotlightCard>
              <div className="relative h-full bg-background p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                {/* Radial gradient */}
                <div
                  className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 translate-z-0 bg-slate-900 rounded-full blur-[80px]"></div>
                </div>
                <div className="flex flex-col h-full justify-center items-center text-center">
                  {/* Image */}
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
                    className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-900 hover:bg-background border border-slate-800 px-3 py-1.5 text-sm font-medium text-slate-400 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-700 transition-colors duration-150"
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
            {/* Card #5 */}
            <SpotlightCard className="lg:col-span-2">
              <div className="relative h-full bg-background p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                {/* Radial gradient */}
                <div
                  className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 translate-z-0 bg-slate-900 rounded-full blur-[80px]"></div>
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
                    <h2 className="text-foreground text-4xl m-0 font-bold">
                      Hi, I&apos;m{" "}
                      <span className="text-slate-600">Sajjad</span>.
                    </h2>
                    <h2 className="text-slate-600 text-md m-0 font-bold">
                      web developer
                    </h2>
                    <h2 className="text-foreground text-2xl m-0 font-semibold mt-4 text-left">
                      Passionate to pursue the technology.
                    </h2>
                    <h2 className="text-slate-600 text-lg m-0 mt-4 text-left">
                      I enjoy learning new things and try to overcome new
                      challenges while analyzing how I improved through them.
                    </h2>
                  </div>

                  {/* <div className="grow mb-5">
                    <h2 className="text-foreground text-4xl m-0 font-extrabold">
                      Hi, I&apos;m{" "}
                      <span className="text-slate-400">Sajjad</span>
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
            {/* Card #1 */}
            <SpotlightCard>
              <div className="relative h-full bg-background p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                {/* Radial gradient */}
                <div
                  className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 translate-z-0 bg-slate-900 rounded-full blur-[80px]"></div>
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
                      src={Card01}
                      width={200}
                      height={200}
                      alt="Card 01"
                    />
                  </div>
                  {/* Text */}
                  <div className="grow mb-5">
                    <h2 className="text-xl text-foreground font-bold mb-1">
                      Amazing Integration
                    </h2>
                    <p className="text-sm text-slate-600">
                      Quickly apply filters to refine your issues lists and
                      create custom views.
                    </p>
                  </div>
                  <a
                    className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-900 hover:bg-background border border-slate-800 px-3 py-1.5 text-sm font-medium text-slate-400 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-700 transition-colors duration-150"
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
                  </a>
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
                  <div className="absolute inset-0 translate-z-0 bg-slate-900 rounded-full blur-[80px]"></div>
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
                      src={Card02}
                      width={200}
                      height={200}
                      alt="Card 02"
                    />
                  </div>
                  {/* Text */}
                  <div className="grow mb-5">
                    <h2 className="text-xl text-foreground font-bold mb-1">
                      Amazing Integration
                    </h2>
                    <p className="text-sm text-slate-600">
                      Quickly apply filters to refine your issues lists and
                      create custom views.
                    </p>
                  </div>
                  <a
                    className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-900 hover:bg-background border border-slate-800 px-3 py-1.5 text-sm font-medium text-slate-400 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-700 transition-colors duration-150"
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
                  </a>
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
                  <div className="absolute inset-0 translate-z-0 bg-slate-900 rounded-full blur-[80px]"></div>
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
                      Amazing Integration
                    </h2>
                    <p className="text-sm text-slate-600">
                      Quickly apply filters to refine your issues lists and
                      create custom views.
                    </p>
                  </div>
                  <a
                    className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-900 hover:bg-background border border-slate-800 px-3 py-1.5 text-sm font-medium text-slate-400 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-700 transition-colors duration-150"
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
                  </a>
                </div>
              </div>
            </SpotlightCard>
          </Spotlight>
        </div>
      </main>
    </body>
  );
};

export default page;
