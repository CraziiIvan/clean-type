import "./globals.css"
import { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { OptionStoreProvider } from "@/utils/StoreContext";
import { cn } from "@/utils/utils";

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
      <OptionStoreProvider>
      <body className={cn(GeistSans.className, "bg-black p-6 max-w-5xl mx-auto")}>
        {children}
      </body>
      </OptionStoreProvider>
    </html>
  );
}
