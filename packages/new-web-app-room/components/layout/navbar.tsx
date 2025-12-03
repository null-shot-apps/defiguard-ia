"use client";

import Link from "next/link";
import { Shield, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-cyan-400" />
            <span className="text-xl font-bold gradient-text">
              DeFiGuard AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white/80 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/audit"
              className="text-white/80 hover:text-white transition-colors"
            >
              Audit
            </Link>
            <Link
              href="/dashboard"
              className="text-white/80 hover:text-white transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/monitoring"
              className="text-white/80 hover:text-white transition-colors"
            >
              Monitoring
            </Link>
          </div>

          {/* Connect Wallet Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline">
              Connect Wallet
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-white/10">
              <Link
                href="/"
                className="block px-3 py-2 text-white/80 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/audit"
                className="block px-3 py-2 text-white/80 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Audit
              </Link>
              <Link
                href="/dashboard"
                className="block px-3 py-2 text-white/80 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                href="/monitoring"
                className="block px-3 py-2 text-white/80 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Monitoring
              </Link>
              <div className="px-3 py-2">
                <Button variant="outline" className="w-full">
                  Connect Wallet
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
