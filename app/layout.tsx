import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'], // or other necessary subsets
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],    // You can specify different weights and styles
  style: ['normal'], // Or 'italic'
});

export const metadata: Metadata = {
  title: "RSK Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
