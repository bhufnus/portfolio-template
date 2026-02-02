import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Brian Hufnus - Fullstack JavaScript Engineer",
    template: "%s | Brian Hufnus"
  },
  description:
    "Portfolio of a fullstack JavaScript developer specializing in React, Node.js, and modern web technologies.",
  keywords: [
    "fullstack developer",
    "JavaScript",
    "React",
    "Node.js",
    "Next.js",
    "portfolio"
  ],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.vercel.app",
    title: "Brian Hufnus - Fullstack JavaScript Engineer",
    description:
      "Portfolio of a fullstack JavaScript developer specializing in React, Node.js, and modern web technologies.",
    siteName: "Your Name Portfolio",
    images: [
      {
        url: "https://yourportfolio.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Brian Hufnus - Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Brian Hufnus - Fullstack JavaScript Engineer",
    description:
      "Portfolio of a fullstack JavaScript developer specializing in React, Node.js, and modern web technologies.",
    images: ["https://yourportfolio.vercel.app/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  verification: {
    // Add your verification codes here
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
