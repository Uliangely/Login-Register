import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

import { PrimeReactProvider } from 'primereact/api';
import React from 'react';

export default function RootLayout({ children }) {
  return (
    <PrimeReactProvider>
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
        </PrimeReactProvider>
  );
};

