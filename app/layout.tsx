import type { Metadata } from "next";
import { Geist, Geist_Mono, M_PLUS_1p, Dela_Gothic_One } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const mPlus1p = M_PLUS_1p({
  weight: ["400", "500", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-mplus-1p",
  display: "swap",
});

const delaGothicOne = Dela_Gothic_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dela-gothic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "次世代NFT - Next Generation NFT",
  description: "次世代NFTプラットフォーム",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${mPlus1p.variable} ${delaGothicOne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

