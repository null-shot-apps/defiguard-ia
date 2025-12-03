"use client";

import { RecentAudits } from "@/components/dashboard/recent-audits";
import { RiskChart } from "@/components/dashboard/risk-chart";
import { NFTBadges } from "@/components/dashboard/nft-badges";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, TrendingUp, Award, Plus } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">
          <span className="gradient-text">Dashboard</span>
        </h1>
        <p className="text-white/70 text-lg">
          Monitor your smart contract security analytics and achievements
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-white/60">Total Audits</p>
                <p className="text-2xl font-bold text-white">23</p>
              </div>
              <Shield className="h-8 w-8 text-cyan-400" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-white/60">Avg Risk Score</p>
                <p className="text-2xl font-bold text-green-400">32</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-400" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-white/60">Vulnerabilities Fixed</p>
                <p className="text-2xl font-bold text-purple-400">47</p>
              </div>
              <Shield className="h-8 w-8 text-purple-400" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-white/60">NFT Badges</p>
                <p className="text-2xl font-bold text-orange-400">3</p>
              </div>
              <Award className="h-8 w-8 text-orange-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Start a new audit or explore your security analytics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/audit">
              <Button className="cyber-glow">
                <Plus className="mr-2 h-4 w-4" />
                New Audit
              </Button>
            </Link>
            <Link href="/monitoring">
              <Button variant="outline">
                <Shield className="mr-2 h-4 w-4" />
                Monitor Contracts
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentAudits />
        </div>
        <div className="space-y-6">
          <RiskChart />
          <NFTBadges />
        </div>
      </div>
    </div>
  );
}
