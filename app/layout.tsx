import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import { Analytics } from "@vercel/analytics/next";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lemix",
  description: "SIMPLIFYING COMPLEXITY",
  icons: {
    icon: "/assets/logo-dark-svg.svg",
    apple: "/assets/logo-light-svg.svg",
    shortcut: "/assets/logo-light.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Chatbase Embed */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.chatbaseConfig = {
          chatbotId: "gUNSVJVLerPJY_FH-hriR",
        };
      `,
          }}
        />
        <script
          src="https://www.chatbase.co/embed.min.js"
          defer
        ></script>
      </head>
      <body className={`${interFont.variable} antialiased`}>
        {children}
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  );
}
