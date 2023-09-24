import "./globals.css";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/context/theme-provider";
import { ToggleTheme } from "@/components/toggle-theme";
import NavBar from "@/components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sajjad",
  description: "student and web developer from India",
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
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {/* <div className="w-[6%] fixed left-0 h-full z-50 hidden lg:block md:block">
            <NavBar path={pathname} />
          </div> */}
          {/* <div className="fixed top-0 w-full z-50 block lg:hidden md:hidden px-8 pt-4">
              <MobileNavBar path={currentRoute} />
            </div> */}
          {children}
          <div className="hidden sm:block">
            <ToggleTheme />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
