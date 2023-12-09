import Navbar from "@/components/Navbars/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getIronSessionData } from "@/utils/session";
import { SessionProvider } from "@/components/SessionContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HypeReality",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getIronSessionData();
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          " bg-gradient-to-b from-slate-200 to-100% to-gray-200 overflow-x-hidden"
        }
      >
        <SessionProvider user={session.user!}>
          <div className="h-[2000px]">
            <Navbar user={session.user} />
            {children}

            <div className=" relative bottom-0 text-center text-comms">
              <h3>
                Made by <span className="text-firstPart">Szücs</span> Levente
              </h3>
            </div>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
