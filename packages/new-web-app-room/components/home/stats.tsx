"use client";

import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Shield, Zap } from "lucide-react";

const stats = [
  {
    icon: Shield,
    value: "10,000+",
    label: "Contracts Audited",
    description: "Smart contracts analyzed and secured",
    color: "text-cyan-400",
  },
  {
    icon: TrendingUp,
    value: "$50M+",
    label: "Value Protected",
    description: "Total value locked in audited contracts",
    color: "text-green-400",
  },
  {
    icon: Users,
    value: "500+",
    label: "Active Users",
    description: "Developers trusting our platform",
    color: "text-purple-400",
  },
  {
    icon: Zap,
    value: "99.9%",
    label: "Detection Rate",
    description: "Vulnerability detection accuracy",
    color: "text-yellow-400",
  },
];

export function Stats() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Trusted by Developers</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Join thousands of developers who trust DeFiGuard AI to secure their smart contracts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="text-center hover:scale-105 transition-all duration-300 cyber-glow group"
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className="space-y-2">
                  <div className={`text-4xl font-bold ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-xl font-semibold text-white">
                    {stat.label}
                  </div>
                  <div className="text-sm text-white/70">
                    {stat.description}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
