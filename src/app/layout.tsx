import "./globals.css";
import "./firefly.sass";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/context/theme-provider";
import { ToggleTheme } from "@/components/toggle-theme";
import { siteConfig } from "@/config/site";
import { Command } from "@/components/cmd";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = headers();
  const domain = headersList.get("x-forwarded-host") || "";
  const protocol = headersList.get("x-forwarded-proto") || "";
  const pathname = headersList.get("x-invoke-path") || "";
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami-space.vercel.app/script.js" data-website-id="9820318d-59d2-4a97-b6a6-5e1f197b367e"></script>
        <script defer src="https://umami-space.vercel.app/recorder.js" data-website-id="9820318d-59d2-4a97-b6a6-5e1f197b367e"></script>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {/* <div className="w-[6%] fixed left-0 h-full z-50 hidden lg:block md:block">
            <NavBar path={pathname} />
          </div> */}
          {/* <div className="fixed top-0 w-full z-50 block lg:hidden md:hidden px-8 pt-4">
              <MobileNavBar path={currentRoute} />
            </div> */}
          {children}
          {/* <div className="hidden sm:block">
            <ToggleTheme />
          </div> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
