import type { Metadata, Viewport } from "next";
import { Inter, Ubuntu } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--next-font-inter",
  subsets: ["latin"],
});

const ubuntu = Ubuntu({
  variable: "--next-font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Rent gaming gadgets in Bangalore |  Zero Deposit Rentals  | SharePal",
  description:
    "Rent gaming gadgets in Bangalore from SharePal - India's most trusted lifestyle gear rental platform. Zero Deposit | Free Delivery | Excellent Quality | Pay on Delivery",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${ubuntu.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
