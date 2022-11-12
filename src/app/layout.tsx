import React from "react";
import Head from 'next/head';
import './globals.css';

// This is the _app.tsx of NextJS 12.xx

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Head>
        <title>Salat Tracker</title>
        <meta name="description" content="A personal project to track missed Sa lat so that we can devise a plan to pray them at our earliest." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>{children}</body>
    </html>
  );
};

export default Layout;
