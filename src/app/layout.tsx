import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/dates/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { Navbar } from "app/components/Navbar";
import { UserSessionContextProvider } from "app/context/UserSessionContext";
import { ToastContainer } from "react-toastify";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Car go rentals",
  description: "Renta car anywhere",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <MantineProvider>
          <UserSessionContextProvider>
            <Navbar />
            {children}
            <ToastContainer />
          </UserSessionContextProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
