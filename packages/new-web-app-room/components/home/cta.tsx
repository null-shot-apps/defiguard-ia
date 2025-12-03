"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="glass rounded-3xl p-12 cyber-glow">
          <div className="space-y-8">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mx-auto cyber-glow animate-neural-pulse">
              <Shield className="h-10 w-10 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Ready to Secure</span>
              <br />
              <span className="text-white">Your Smart Contracts?</span>
            </h2>
            
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Join thousands of developers who trust DeFiGuard AI to protect their DeFi protocols. 
              Start your first security audit today and deploy with confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/audit">
                <Button size="lg" className="text-lg px-8 py-4 cyber-glow group">
                  Start Free Audit
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  View Dashboard
                </Button>
              </Link>
            </div>
            
            <div className="text-sm text-white/60">
              No credit card required • Free tier available • Enterprise support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
