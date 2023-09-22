import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/context/theme-provider";
import { ToggleTheme } from "@/components/toggle-theme";

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
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <div className="hidden sm:block">
            <ToggleTheme />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
