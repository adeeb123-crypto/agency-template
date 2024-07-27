import type { Metadata } from "next";
import { Inter,Mulish } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['200','300','400','500'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: "Software Solutions",
  description: "Get the best software solutions | Best Marketing Campaigns",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mulish.className}>{children}</body>
    </html>
  );
}
