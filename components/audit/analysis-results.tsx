"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { VulnerabilityCard } from "./vulnerability-card";
import { VulnerabilityAnalysis } from "@/lib/gemini/client";
import { formatRiskScore, getRiskColor } from "@/lib/utils";
import { 
  Shield, 
  AlertTriangle, 
  TrendingUp, 
  CheckCircle, 
  Code,
  Download,
  Share
} from "lucide-react";

interface AnalysisResultsProps {
  analysis: VulnerabilityAnalysis;
}

export function AnalysisResults({ analysis }: AnalysisResultsProps) {
  const [activeTab, setActiveTab] = useState<"vulnerabilities" | "gas" | "practices">("vulnerabilities");

  const riskColor = getRiskColor(analysis.riskScore);
  const riskLevel = formatRiskScore(analysis.riskScore);

  const criticalCount = analysis.vulnerabilities.filter(v => v.severity === "Critical").length;
  const highCount = analysis.vulnerabilities.filter(v => v.severity === "High").length;
  const mediumCount = analysis.vulnerabilities.filter(v => v.severity === "Medium").length;
  const lowCount = analysis.vulnerabilities.filter(v => v.severity === "Low").length;

  const tabs = [
    { id: "vulnerabilities", label: "Vulnerabilities", icon: AlertTriangle, count: analysis.vulnerabilities.length },
    { id: "gas", label: "Gas Optimizations", icon: TrendingUp, count: analysis.gasOptimizations.length },
    { id: "practices", label: "Best Practices", icon: CheckCircle, count: analysis.bestPractices.length },
  ];

  return (
    <div className="space-y-6">
      {/* Risk Score Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-cyber-blue" />
            Security Analysis Results
          </CardTitle>
          <CardDescription>
            AI-powered analysis completed using advanced vulnerability detection
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 rounded-lg glass">
              <div className={`text-3xl font-bold ${riskColor}`}>
                {analysis.riskScore}
              </div>
              <div className="text-sm text-muted-foreground">Risk Score</div>
              <Badge variant={analysis.riskScore > 70 ? "critical" : analysis.riskScore > 50 ? "high" : "medium"}>
                {riskLevel}
              </Badge>
            </div>
            
            <div className="text-center p-4 rounded-lg glass">
              <div className="text-3xl font-bold text-red-400">
                {criticalCount}
              </div>
              <div className="text-sm text-muted-foreground">Critical Issues</div>
            </div>
            
            <div className="text-center p-4 rounded-lg glass">
              <div className="text-3xl font-bold text-orange-400">
                {highCount}
              </div>
              <div className="text-sm text-muted-foreground">High Severity</div>
            </div>
            
            <div className="text-center p-4 rounded-lg glass">
              <div className="text-3xl font-bold text-yellow-400">
                {mediumCount + lowCount}
              </div>
              <div className="text-sm text-muted-foreground">Medium & Low</div>
            </div>
          </div>

          <div className="mt-4 p-4 rounded-lg bg-muted/50">
            <h4 className="font-semibold mb-2">Summary</h4>
            <p className="text-sm text-muted-foreground">{analysis.summary}</p>
          </div>

          <div className="flex gap-2 mt-4">
            <Button variant="cyber" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
            <Button variant="outline" size="sm">
              <Share className="h-4 w-4 mr-2" />
              Share Results
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Tabs Navigation */}
      <div className="flex space-x-1 bg-muted/20 p-1 rounded-lg">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors flex-1 justify-center ${
              activeTab === tab.id
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <tab.icon className="h-4 w-4" />
            {tab.label}
            {tab.count > 0 && (
              <Badge variant="secondary" className="ml-1">
                {tab.count}
              </Badge>
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="space-y-4">
        {activeTab === "vulnerabilities" && (
          <div className="space-y-4">
            {analysis.vulnerabilities.length > 0 ? (
              analysis.vulnerabilities.map((vulnerability, index) => (
                <VulnerabilityCard
                  key={index}
                  vulnerability={vulnerability}
                  onViewFix={() => {
                    // TODO: Implement fixed code viewer
                    console.log("View fix for:", vulnerability.type);
                  }}
                />
              ))
            ) : (
              <Card>
                <CardContent className="text-center py-8">
                  <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No Vulnerabilities Found</h3>
                  <p className="text-muted-foreground">
                    Great! The AI analysis didn't detect any security vulnerabilities in your contract.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {activeTab === "gas" && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-400" />
                Gas Optimization Suggestions
              </CardTitle>
            </CardHeader>
            <CardContent>
              {analysis.gasOptimizations.length > 0 ? (
                <ul className="space-y-3">
                  {analysis.gasOptimizations.map((optimization, index) => (
                    <li key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="text-sm">{optimization}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground text-center py-4">
                  No gas optimization suggestions available.
                </p>
              )}
            </CardContent>
          </Card>
        )}

        {activeTab === "practices" && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-blue-400" />
                Security Best Practices
              </CardTitle>
            </CardHeader>
            <CardContent>
              {analysis.bestPractices.length > 0 ? (
                <ul className="space-y-3">
                  {analysis.bestPractices.map((practice, index) => (
                    <li key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="text-sm">{practice}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground text-center py-4">
                  No additional best practices recommendations.
                </p>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
