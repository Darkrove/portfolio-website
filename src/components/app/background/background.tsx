"use client";

import dynamic from "next/dynamic";
import { ReactNode, Suspense, useEffect, useState } from "react";
import { hasWebGLContext } from "@/lib/utils";
import { Space } from "@/components/app/background/space";

const FADE = {
  start: 300, // start fading out at 100px
  end: 1300, // end fading out at 300px
};

const Bubbles = dynamic(
  () => import("@/components/app/background/bubbles").then((m) => m.Bubbles),
  {
    ssr: false,
  }
);

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export function Background({ className }: Props) {
  const [opacity, setOpacity] = useState(0.6);
  const [isWindowResizing, setIsWindowResizing] = useState(false);
  const [inner, setInner] = useState<ReactNode>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= FADE.start) {
        setOpacity(0.6);
      } else if (currentScrollY <= FADE.end) {
        const range = FADE.end - FADE.start;
        const diff = currentScrollY - FADE.start;
        const ratio = diff / range;
        setOpacity(0.6 - ratio);
      } else {
        setOpacity(0);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      setIsWindowResizing(true);
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setIsWindowResizing(false);
      }, 100);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  useEffect(() => {
    setInner(hasWebGLContext() ? <Space /> : <Bubbles />);
  }, []);

  return (
    // you can pass opacity if you want in div
    // <div style={{ opacity }} className={className}>
    <div className={className}>
      <Suspense>{!isWindowResizing && inner}</Suspense>
    </div>
  );
}
