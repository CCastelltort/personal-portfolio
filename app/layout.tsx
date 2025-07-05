import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/navbar/NavBar";

export const metadata: Metadata = {
  title: "Carlota Castelltort Pinto's Portfolio",
  description: "Welcome to my personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  );
}
