import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const sans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Shreedhar Joshi | Founding Engineer",
  description:
    "Founding engineer building full-stack products with Next.js, Go and Python. Legal-AI, payments, and developer tools like DbScope.",
  openGraph: {
    title: "Shreedhar Joshi | Founding Engineer",
    description: "Full-stack products with Next.js, Go and Python.",
    url: "https://shreedhar-portfolio.vercel.app/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
