import "./globals.css"
import { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import Header from "@/components/header/Header";

export const metadata: Metadata = {
  title: "Clean Type",
  description: "Minimalist typing test app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
