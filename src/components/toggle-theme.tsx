"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Icons } from "@/components/icons";

export function ToggleTheme() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="overflow-hidden fixed bottom-4 left-4 z-50 flex items-center justify-center rounded-full p-3 font-mono text-xs">
      <Button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="rounded-full p-2"
      >
        <Icons.sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Icons.moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
