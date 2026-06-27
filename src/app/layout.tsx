import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../../public/css/index.css";
import AOSProvider from "@/components/atoms/AOSProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rangga Putra - Frontend Developer | Mweh",
  description: "Profile",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <AOSProvider>{children}</AOSProvider>
      </body>
    </html>
  );
}
