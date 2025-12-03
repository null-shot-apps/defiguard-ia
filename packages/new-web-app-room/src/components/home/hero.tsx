"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, Zap, Brain } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Neural Background Pattern */}
      <div className="absolute inset-0 neural-pattern opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Floating Icons */}
        <div className="absolute top-20 left-20 animate-float">
          <Shield className="h-12 w-12 text-cyan-400/30" />
        </div>
        <div className="absolute top-32 right-32 animate-float" style={{ animationDelay: "2s" }}>
          <Zap className="h-10 w-10 text-purple-400/30" />
        </div>
        <div className="absolute bottom-40 left-32 animate-float" style={{ animationDelay: "4s" }}>
          <Brain className="h-14 w-14 text-pink-400/30" />
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="gradient-text animate-gradient">
              DeFiGuard AI
            </span>
            <br />
            <span className="text-white/90">
              Smart Contract
            </span>
            <br />
            <span className="text-white/90">
              Security Auditor
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Advanced AI-powered security auditing using{" "}
            <span className="text-cyan-400 font-semibold">Gemini 2.5 Flash</span>.
            Detect vulnerabilities, optimize gas usage, and secure your DeFi protocols
            with cutting-edge artificial intelligence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/audit">
              <Button size="lg" className="text-lg px-8 py-4 cyber-glow">
                Start Auditing
                <Shield className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                View Dashboard
                <Brain className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">
                99.9%
              </div>
              <div className="text-white/70 mt-2">
                Vulnerability Detection Rate
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">
                &lt;30s
              </div>
              <div className="text-white/70 mt-2">
                Average Analysis Time
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">
                $50M+
              </div>
              <div className="text-white/70 mt-2">
                Value Protected
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

