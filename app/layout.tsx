import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flowora — Your AI Team for Every Lead",
  description: "Flowora calls, chats, and follows up with your leads automatically across Voice, WhatsApp, and Web.",
  keywords: ["AI Sales Agent", "Autonomous Lead Followup", "AI Voice Agent", "WhatsApp Chatbot", "Flowora"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full bg-[#070709] text-zinc-100 flex flex-col font-sans selection:bg-white/20 selection:text-white">
        {children}
      </body>
    </html>
  );
}
