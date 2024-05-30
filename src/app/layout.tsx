import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Landing Page",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>

      <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"/>

      <link href="./src/app/resources/fonts/Avenir-Light.ttf" rel="stylesheet"/>


      <link href="https://cdn.jsdelivr.net/npm/purecss@3.0.0/build/pure-min.css" rel="stylesheet"/>
      {/*pure responsive*/}
      <link href="https://cdn.jsdelivr.net/npm/purecss@3.0.0/build/grids-responsive-min.css" rel="stylesheet"/>
      {/*pure grids responsive*/}

    </head>
    <body className={inter.className}>{children}</body>
    </html>
  );
}
