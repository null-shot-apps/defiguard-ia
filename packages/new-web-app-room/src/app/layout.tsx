import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DeFiGuard AI - AI-Powered Smart Contract Security Auditor",
  description: "Advanced AI-powered smart contract security auditor using Gemini 2.5 Flash",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Aurora Background Layers */}
        <div className="fixed inset-0 bg-aurora-layer-1 pointer-events-none"></div>
        <div className="fixed inset-0 bg-aurora-layer-2 pointer-events-none"></div>
        <div className="fixed inset-0 bg-aurora-layer-3 pointer-events-none"></div>
        <div className="fixed inset-0 bg-particles pointer-events-none"></div>
        
        {/* Main Content */}
        <div className="relative z-10 min-h-screen">
          <Navbar />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}



