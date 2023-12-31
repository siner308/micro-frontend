import './globals.css';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { RecoilRoot } from "recoil";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};

export default function RootLayout({ Component }: { Component: React.JSX.ElementType }) {
  return (
    <div className={inter.className}>
      <RecoilRoot>
        <Component />
      </RecoilRoot>
    </div>
  );
}
