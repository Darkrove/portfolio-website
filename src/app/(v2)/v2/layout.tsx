import { Metadata } from "next";
import NavBar from "@/components/nav";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: "V2",
    template: `%s | ${siteConfig.name}`,
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      {/* <div className="w-[6%] fixed left-0 h-full z-50 hidden lg:block md:block">
        <NavBar path={"/v2"} />
      </div> */}
      {/* <div className="fixed top-0 w-full z-50 block lg:hidden md:hidden px-8 pt-4">
              <MobileNavBar path={currentRoute} />
            </div> */}
      {children}
    </>
  );
}
