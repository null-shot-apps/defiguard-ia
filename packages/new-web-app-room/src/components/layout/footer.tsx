"use client";

import Link from "next/link";
import { Shield, Github, Twitter, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-cyan-400" />
              <span className="text-xl font-bold gradient-text">
                DeFiGuard AI
              </span>
            </div>
            <p className="text-white/70 mb-4 max-w-md">
              Advanced AI-powered smart contract security auditor using Gemini 2.5 Flash. 
              Protect your DeFi protocols with cutting-edge vulnerability detection.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com"
                className="text-white/60 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com"
                className="text-white/60 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://nullshot.ai"
                className="text-white/60 hover:text-white transition-colors"
              >
                <Globe className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/audit"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Start Audit
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/monitoring"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Monitoring
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/docs"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/api"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  API Reference
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/60">
            © 2024 DeFiGuard AI. Built for NullShot Hacks Season 0 - Track 1b.
          </p>
        </div>
      </div>
    </footer>
  );
}
