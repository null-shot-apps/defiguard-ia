"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Brain, FileText, Shield } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Contract",
    description: "Paste your Solidity smart contract code or upload the file directly to our secure platform.",
    step: "01",
  },
  {
    icon: Brain,
    title: "AI Analysis",
    description: "Gemini 2.5 Flash AI analyzes your code using advanced pattern recognition and vulnerability databases.",
    step: "02",
  },
  {
    icon: FileText,
    title: "Detailed Report",
    description: "Receive comprehensive security report with vulnerability details, risk scores, and fix recommendations.",
    step: "03",
  },
  {
    icon: Shield,
    title: "Secure & Deploy",
    description: "Apply suggested fixes, get NFT certification, and deploy with confidence knowing your contract is secure.",
    step: "04",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">How It Works</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Simple 4-step process to secure your smart contracts with AI-powered analysis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-cyan-400/50 to-purple-400/50 z-0" />
              )}
              
              <Card className="relative z-10 text-center hover:scale-105 transition-all duration-300 cyber-glow">
                <CardHeader>
                  <div className="relative mx-auto mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mx-auto cyber-glow">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center text-xs font-bold text-white">
                      {step.step}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/70 leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
