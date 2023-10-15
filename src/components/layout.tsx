import type { ReactElement } from "react";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <div>
      <main className="flex selection:bg-zinc-200/30 flex-col overflow-x-hidden min-h-screen items-center bg-background max-h-auto relative">
        <div className="flex w-full h-full lg:w-[50%] md:w-2/3">{children}</div>
      </main>
    </div>
  );
}
