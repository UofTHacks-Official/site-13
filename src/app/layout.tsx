import type { Metadata } from "next";
import {
  Onest,
  Orbitron,
  Oooh_Baby,
  Sixtyfour,
  Pixelify_Sans,
} from "next/font/google";

import "./globals.css";

const onset = Onest({
  variable: "--font-onset",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const ooohBaby = Oooh_Baby({
  variable: "--font-oooh-baby",
  subsets: ["latin"],
  weight: "400",
});

const sixtyfour = Sixtyfour({
  variable: "--font-sixtyfour",
  subsets: ["latin"],
});

const pixelifySans = Pixelify_Sans({
  variable: "--font-pixelify-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UofTHacks 13",
  description: "Welcome to UofTHacks 13!!! :)",
  icons: {
    icon: "/shared/uofthacks_logo.svg",
    shortcut: "/shared/uofthacks_logo.svg",
    apple: "/shared/uofthacks_logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${onset.variable} ${orbitron.variable} ${ooohBaby.variable} ${sixtyfour.variable} ${pixelifySans.variable}`}
    >
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
