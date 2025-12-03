"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Shield, Star } from "lucide-react";

const mockBadges = [
  {
    id: "1",
    name: "Security Expert",
    description: "Audited 10+ contracts with low risk scores",
    icon: Shield,
    rarity: "Gold",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/20",
  },
  {
    id: "2",
    name: "Gas Optimizer",
    description: "Implemented 50+ gas optimizations",
    icon: Star,
    rarity: "Silver", 
    color: "text-gray-300",
    bgColor: "bg-gray-500/20",
  },
  {
    id: "3",
    name: "Early Adopter",
    description: "One of the first 100 users",
    icon: Award,
    rarity: "Bronze",
    color: "text-orange-400",
    bgColor: "bg-orange-500/20",
  },
];

export function NFTBadges() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Award className="h-5 w-5 text-orange-400" />
          NFT Badges
        </CardTitle>
        <CardDescription>
          Your earned security certifications
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {mockBadges.map((badge) => (
          <div
            key={badge.id}
            className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          >
            <div className={`w-10 h-10 rounded-full ${badge.bgColor} flex items-center justify-center`}>
              <badge.icon className={`h-5 w-5 ${badge.color}`} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-medium text-white">{badge.name}</span>
                <Badge variant="outline" className="text-xs">
                  {badge.rarity}
                </Badge>
              </div>
              <div className="text-sm text-white/60">
                {badge.description}
              </div>
            </div>
          </div>
        ))}
        
        <div className="mt-6 p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/20 text-center">
          <div className="text-sm text-cyan-400 font-medium mb-1">
            🎯 Next Badge: DeFi Guardian
          </div>
          <div className="text-xs text-white/70">
            Audit 5 more DeFi protocols to unlock
          </div>
          <div className="w-full bg-white/10 rounded-full h-2 mt-2">
            <div className="bg-gradient-to-r from-cyan-400 to-purple-600 h-2 rounded-full w-3/5" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
