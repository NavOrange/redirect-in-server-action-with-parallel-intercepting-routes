import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  form,
}: Readonly<{
  children: React.ReactNode;
  form: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="p-20">
          <Link href="/form">form</Link>
        </div>
        {children}
        {form}
      </body>
    </html>
  );
}
