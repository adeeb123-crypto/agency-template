import type { Metadata } from "next";
import localfont from "next/font/local";
import { Mulish } from "next/font/google";
import "./globals.css";



const mulish = Mulish({
  subsets: ['latin'],
  weight: ['200','300','400','500'],
  variable: '--font-poppins',
})

// const copyLocalOne = localfont({
//   src: [ 
//     {
//       path:"../../public/fonts/jizHRFtNs2ka5fXjeivQ4LroWlx-6zAjjH7M.ttf",
//       weight: "400", 
//     },
//   ],
//   variable: '--font-copyLocalOne',
// });

const copyLocalOne = localfont({
  src:"../../public/fonts/jizHRFtNs2ka5fXjeivQ4LroWlx-6zAjjH7M.ttf",
  variable: '--font-copyLocalOne',
})

const copyLocalTwo = localfont({
  src:"../../public/fonts/7AHDUZ4A7LFLVFUIFSARGIWCRQJHISQP.ttf",
  variable: '--font-copyLocalTwo',
})
const copyLocalThree = localfont({
  src:"../../public/fonts/KFIAZD4RUMEZIYV6FQ3T3GP5PDBDB6JY.ttf",
  variable: '--font-copyLocalThree',
})
const copyLocalFour = localfont({
  src:"../../public/fonts/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxRSW32.ttf",
  variable: '--font-copyLocalFour',
})


export const metadata: Metadata = {
  title: "Agency Template",
  description: "Get the best software solutions | Best Marketing Campaigns",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${copyLocalOne.variable} ${copyLocalTwo.variable} ${copyLocalThree.variable} ${copyLocalFour.variable}`}>{children}</body>
    </html>
  );
}
