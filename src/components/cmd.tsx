"use client";

import * as React from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { actions } from "@/lib/actions";
import { Icons } from "./icons";

export function Command() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const navigationActions = actions.filter(
    (action) => action.section === "Navigation"
  );
  const externalActions = actions.filter(
    (action) => action.section === "External"
  );

  return (
    <>
      {/* <p className="text-sm text-muted-foreground">
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="flex items-center p-1 hover:bg-zinc-100 dark:hover:bg-zinc-600 rounded-full transform hover:scale-105 transition-transform duration-300 ease-in-out">⌘</span>J
        </kbd>
      </p> */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={() => setOpen((open) => !open)}
              className="flex items-center p-1 hover:bg-zinc-100 dark:hover:bg-zinc-600 rounded-full transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <Icons.cmd className="w-5 h-5" />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-sm text-muted-foreground">
              Press{" "}
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                <span className="text-xs">⌘</span>J
              </kbd>
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Navigation">
            {navigationActions.map((action) => (
              <CommandItem key={action.id} onSelect={() => action.perform()}>
                {action.icon}
                <span className="ml-2">{action.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="External">
            {externalActions.map((action) => (
              <CommandItem key={action.id} onSelect={() => action.perform()}>
                {action.icon}
                <span className="ml-2">{action.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
