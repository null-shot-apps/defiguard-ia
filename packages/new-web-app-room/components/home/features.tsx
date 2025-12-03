"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Shield, Zap, Eye, Code, Award } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Advanced Gemini 2.5 Flash AI analyzes your smart contracts for complex vulnerabilities and security patterns.",
    color: "text-cyan-400",
  },
  {
    icon: Shield,
    title: "Comprehensive Security",
    description: "Detects reentrancy, overflow, access control, and 20+ other vulnerability types with high accuracy.",
    color: "text-purple-400",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get detailed security reports in under 30 seconds with real-time vulnerability detection.",
    color: "text-yellow-400",
  },
  {
    icon: Eye,
    title: "Real-time Monitoring",
    description: "Continuous monitoring of deployed contracts with instant alerts for suspicious activities.",
    color: "text-green-400",
  },
  {
    icon: Code,
    title: "Auto-Fix Generation",
    description: "AI generates secure code fixes for identified vulnerabilities with detailed explanations.",
    color: "text-pink-400",
  },
  {
    icon: Award,
    title: "NFT Certification",
    description: "Earn on-chain security certificates as NFTs for audited contracts with low risk scores.",
    color: "text-orange-400",
  },
];

export function Features() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Powerful Features</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Advanced AI-driven security analysis with comprehensive vulnerability detection
            and automated remediation suggestions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:scale-105 transition-all duration-300 cyber-glow hover:cyber-glow animate-neural-pulse"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/70 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
