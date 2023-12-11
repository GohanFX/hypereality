import Navbar from "@/components/Navbars/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { getIronSessionData } from "@/utils/session";
import { SessionProvider, useSession } from "@/components/SessionContext";
import { LayoutProvider } from "@/components/LayoutContext";
import { Suspense, useEffect, useState } from "react";
import { IronSessionData } from "iron-session";

export const metadata: Metadata = {
  title: "HypeReality",
  description: "Generated by create next app",
};

const getSession = async () => {
  const session = await getIronSessionData();
  return session;
};


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {user} = await getSession();
  
  return (
    <html lang="en">
      <body
        className={
          " bg-gradient-to-b from-slate-200 to-100% to-gray-200 overflow-x-hidden"
        }
      >
        <LayoutProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <SessionProvider user={user!}>
              <div className="h-[2000px]">
                <Navbar user={user!} />
                {children}

                <div className=" relative bottom-0 text-center text-comms">
                  <h3>
                    Made by <span className="text-firstPart">Szücs</span>{" "}
                    Levente
                  </h3>
                </div>
              </div>
            </SessionProvider>
          </Suspense>
        </LayoutProvider>
      </body>
    </html> 
  );
}
