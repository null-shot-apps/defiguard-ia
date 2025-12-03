"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

const mockData = [
  { name: "Jan", risk: 45 },
  { name: "Feb", risk: 38 },
  { name: "Mar", risk: 52 },
  { name: "Apr", risk: 31 },
  { name: "May", risk: 28 },
  { name: "Jun", risk: 35 },
];

export function RiskChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-purple-400" />
          Risk Trends
        </CardTitle>
        <CardDescription>
          Average risk scores over time
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockData.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-sm text-white/70">{item.name}</span>
              <div className="flex items-center gap-2">
                <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-400 to-red-400 rounded-full"
                    style={{ width: `${item.risk}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-white w-8">
                  {item.risk}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
          <div className="text-sm text-green-400 font-medium">
            📈 Improvement Trend
          </div>
          <div className="text-xs text-white/70 mt-1">
            Your average risk score has decreased by 23% this quarter
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
