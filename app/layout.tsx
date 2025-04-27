import type { Metadata } from "next";
import { Barlow_Semi_Condensed } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";

const barlowSemiCondensed = Barlow_Semi_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["700", "600"],
  style: 'normal',
  display: 'swap'
});

const brixSans = localFont({
  variable: "--font-brix",
  src: [
    {
      path: '../public/fonts/HvDTrial_BrixSans-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/HvDTrial_BrixSans-Bold.otf',
      weight: '700',
      style: 'normal'
    }
  ]
})

export const metadata: Metadata = {
  title: "Triton Mario Kart @ UC San Diego",
  description: "UC San Diego's competitive Mario Kart team website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlowSemiCondensed.variable} ${brixSans.variable} antialiased`}>
      <body>
        {children}
      </body>
    </html>
  );
}
