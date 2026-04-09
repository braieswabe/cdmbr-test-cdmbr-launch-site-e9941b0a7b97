import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Professional website",
  description:
    "A modern, conversion-focused professional website built to showcase services, build trust, and drive inquiries."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}