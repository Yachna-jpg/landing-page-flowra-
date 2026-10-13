import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Flowra — Your AI Team for Every Lead",
  description: "Flowra calls, chats, and follows up with your leads automatically across WhatsApp, Voice, and Web.",
  keywords: ["AI Sales Agent", "Autonomous Lead Followup", "AI Voice Agent", "WhatsApp Chatbot", "Flowra"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#FAFAFA] text-slate-900 flex flex-col font-sans selection:bg-emerald-500/20 selection:text-emerald-950">
        {children}
      </body>
    </html>
  );
}
