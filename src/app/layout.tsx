import type { Metadata } from "next";
import "./globals.css";
import PrelineScript from "@/components/PrelineScript";

export const metadata: Metadata = {
  title: {
    template: "%s | My Site",
    default: "Next Brand | Template", // a default is required when creating a template
  },
  description: "Tailwind Css Template",
  keywords: ["Next.js", "Tailwind CSS", "Landing Page"],
  // favicon
  icons: '/favicon.ico',
  robots: 'index, follow'
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
      <PrelineScript />
    </html>
  );
}
