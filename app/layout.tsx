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
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      <head>
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
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
        <script src="https://www.chatbase.co/embed.min.js" defer></script>
        <script defer src="https://cloud.umami.is/script.js" data-website-id="53dde39c-dcef-45ff-94fe-7577faefc386"></script>
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
