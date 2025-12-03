"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatRiskScore } from "@/lib/utils";
import { Clock, FileText } from "lucide-react";

const mockAudits = [
  {
    id: "1",
    contractName: "TokenSwap.sol",
    timestamp: "2 hours ago",
    riskScore: 25,
    vulnerabilities: 2,
  },
  {
    id: "2", 
    contractName: "LendingPool.sol",
    timestamp: "1 day ago",
    riskScore: 65,
    vulnerabilities: 5,
  },
  {
    id: "3",
    contractName: "NFTMarketplace.sol", 
    timestamp: "3 days ago",
    riskScore: 40,
    vulnerabilities: 3,
  },
];

export function RecentAudits() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-cyan-400" />
          Recent Audits
        </CardTitle>
        <CardDescription>
          Your latest smart contract security analyses
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {mockAudits.map((audit) => {
          const riskInfo = formatRiskScore(audit.riskScore);
          return (
            <div
              key={audit.id}
              className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-3">
                <FileText className="h-4 w-4 text-white/60" />
                <div>
                  <div className="font-medium text-white">
                    {audit.contractName}
                  </div>
                  <div className="text-sm text-white/60">
                    {audit.timestamp} • {audit.vulnerabilities} vulnerabilities
                  </div>
                </div>
              </div>
              <Badge className={`${riskInfo.bgColor} ${riskInfo.color} border-0`}>
                {riskInfo.level}
              </Badge>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
