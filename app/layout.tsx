import type { Metadata } from "next";
import { Martian_Mono, Roboto_Mono } from "next/font/google";
import "./globals.css";

const display = Martian_Mono({
  subsets: ["latin"],
  variable: "--font-martian",
  weight: ["600", "800"],
});

const body = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Concrete Season — 16–18 July 2027, Basin Works",
  description:
    "Three days of electronic music and installation art inside a decommissioned water treatment works. Four halls, no headliner billing, 2,400 people.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
