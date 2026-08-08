import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata = {
  title: "Prapul Upendrakumar — SOC Analyst & Founder of Aquila",
  description: "SOC-focused security engineer with hands-on cloud experience. Founder of Aquila — a web studio building modern websites for businesses worldwide.",
  // ... keep the rest of your metadata (icons, etc.)
};;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased bg-black text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}