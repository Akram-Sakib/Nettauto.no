import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Toaster } from "@/components/ui/toaster";
import Providers from "@/components/providers";

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const inter = Inter({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const neulis = localFont({
  src: [
    {
      path: "./../fonts/Neulis-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../fonts/Neulis-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./../fonts/Neulis-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./../fonts/Neulis-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-neulis",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  session,
}: Readonly<{
  children: React.ReactNode;
  session: any;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${inter.variable} ${neulis.variable} dark:bg-[#0d1224] dark:text-[rgb(var(--foreground-rgb))] bg-white antialiased text-black`}
      >
        <Providers session={session}>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
