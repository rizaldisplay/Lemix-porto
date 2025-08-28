import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-W1MBQWZ87L"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W1MBQWZ87L');
          `}
        </Script>
        {/* Chatbase Embed */}
        <Script id="chatbase-config" strategy="afterInteractive">
          {`
            window.chatbaseConfig = {
              chatbotId: "gUNSVJVLerPJY_FH-hriR",
            };
          `}
        </Script>
        <Script
          src="https://www.chatbase.co/embed.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="53dde39c-dcef-45ff-94fe-7577faefc386"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${interFont.variable} antialiased`}>
        {children}
        <ScrollToTop />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
