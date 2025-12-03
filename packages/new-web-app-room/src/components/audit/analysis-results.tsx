"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VulnerabilityCard } from "./vulnerability-card";
import { VulnerabilityAnalysis } from "@/lib/gemini/client";
import { formatRiskScore } from "@/lib/utils";
import { Shield, AlertTriangle, Zap, CheckCircle, TrendingUp } from "lucide-react";

interface AnalysisResultsProps {
  analysis: VulnerabilityAnalysis;
}

export function AnalysisResults({ analysis }: AnalysisResultsProps) {
  // const [selectedVulnerability, setSelectedVulnerability] = useState<Vulnerability | null>(null);
  const riskInfo = formatRiskScore(analysis.riskScore);

  const criticalCount = analysis.vulnerabilities.filter(v => v.severity === "Critical").length;
  const highCount = analysis.vulnerabilities.filter(v => v.severity === "High").length;
  const mediumCount = analysis.vulnerabilities.filter(v => v.severity === "Medium").length;
  const lowCount = analysis.vulnerabilities.filter(v => v.severity === "Low").length;

  return (
    <div className="space-y-8">
      {/* Risk Score Overview */}
      <Card className="cyber-glow">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-cyan-400" />
            Security Analysis Results
          </CardTitle>
          <CardDescription>
            Comprehensive AI-powered security assessment of your smart contract
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Risk Score */}
            <div className="text-center">
              <div className={`text-4xl font-bold ${riskInfo.color} mb-2`}>
                {analysis.riskScore}
              </div>
              <div className="text-white/70 text-sm">Risk Score</div>
              <Badge className={`mt-2 ${riskInfo.bgColor} ${riskInfo.color} border-0`}>
                {riskInfo.level} Risk
              </Badge>
            </div>

            {/* Vulnerability Counts */}
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400 mb-2">
                {criticalCount + highCount}
              </div>
              <div className="text-white/70 text-sm">Critical & High</div>
              <div className="text-xs text-white/50 mt-1">
                {criticalCount} Critical, {highCount} High
              </div>
            </div>

            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400 mb-2">
                {mediumCount + lowCount}
              </div>
              <div className="text-white/70 text-sm">Medium & Low</div>
              <div className="text-xs text-white/50 mt-1">
                {mediumCount} Medium, {lowCount} Low
              </div>
            </div>

            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-2">
                {analysis.gasOptimizations.length}
              </div>
              <div className="text-white/70 text-sm">Gas Optimizations</div>
              <div className="text-xs text-white/50 mt-1">
                Potential savings
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-purple-400" />
            Executive Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-white/80 leading-relaxed">
            {analysis.summary}
          </p>
        </CardContent>
      </Card>

      {/* Detailed Results */}
      <Tabs defaultValue="vulnerabilities" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="vulnerabilities" className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            Vulnerabilities ({analysis.vulnerabilities.length})
          </TabsTrigger>
          <TabsTrigger value="gas" className="flex items-center gap-2">
            <Zap className="h-4 w-4" />
            Gas Optimizations ({analysis.gasOptimizations.length})
          </TabsTrigger>
          <TabsTrigger value="practices" className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4" />
            Best Practices ({analysis.bestPractices.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="vulnerabilities" className="space-y-4">
          {analysis.vulnerabilities.length > 0 ? (
            <div className="grid gap-4">
              {analysis.vulnerabilities.map((vulnerability, index) => (
                <VulnerabilityCard
                  key={index}
                  vulnerability={vulnerability}
                />
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="text-center py-12">
                <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  No Vulnerabilities Found
                </h3>
                <p className="text-white/70">
                  Great job! Your smart contract appears to be secure.
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="gas" className="space-y-4">
          {analysis.gasOptimizations.length > 0 ? (
            <div className="space-y-3">
              {analysis.gasOptimizations.map((optimization, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-yellow-400 mt-0.5" />
                      <p className="text-white/80 leading-relaxed">
                        {optimization}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="text-center py-12">
                <Zap className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  No Gas Optimizations Found
                </h3>
                <p className="text-white/70">
                  Your contract is already well-optimized for gas usage.
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="practices" className="space-y-4">
          {analysis.bestPractices.length > 0 ? (
            <div className="space-y-3">
              {analysis.bestPractices.map((practice, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5" />
                      <p className="text-white/80 leading-relaxed">
                        {practice}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="text-center py-12">
                <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Following Best Practices
                </h3>
                <p className="text-white/70">
                  Your contract follows security best practices well.
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}






