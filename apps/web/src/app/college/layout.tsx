import MainDashboard from "@/components/own/Dashboard/MainDashboard";
import FacultySidebar from "@/components/own/FacultySidebar";
import MainNav from "@/components/own/Nav/MainNav";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row w-full h-full">
      {/* <div>this will contain sidebar</div> */}
      <div className="fixed top-0 left-0 z-50 lg:relative lg:block">
        <FacultySidebar />
      </div>

      <div className="fixed top-0 z-30 w-full  ">
        <MainNav />
      </div>
      <div className="w-full h-full flex flex-col bg-primary_background">
        {/* this will contain navbar and main content */}

        <div className="pt-20 max-h-screen">{children}</div>
      </div>
    </div>
  );
}
