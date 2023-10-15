import { Metadata } from "next";
import NavBar from "@/components/nav";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: "Links",
    template: `%s | ${siteConfig.name}`,
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return <>{children}</>;
}
