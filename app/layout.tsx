import Navigation from "@/components/Navigation";
import "@/styles/globals.css";
import { Metadata } from "next";
import { Orbitron, Roboto_Mono } from "next/font/google";

const roboto_mono_init = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto-mono",
});

const orbitron_init = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-orbitron",
});

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
    <html lang="en">
      <body
        className={`${orbitron_init.variable} ${roboto_mono_init.variable} bg-slate-900`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
