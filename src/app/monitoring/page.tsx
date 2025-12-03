"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  AlertTriangle, 
  Activity, 
  Eye, 
  Clock, 
  TrendingUp,
  Zap,
  Bell
} from "lucide-react";

interface MonitoredContract {
  id: string;
  address: string;
  name: string;
  network: string;
  status: "safe" | "warning" | "critical";
  lastCheck: string;
  riskScore: number;
  alerts: number;
}

const mockContracts: MonitoredContract[] = [
  {
    id: "1",
    address: "0x1234...5678",
    name: "DeFi Vault V2",
    network: "Base Sepolia",
    status: "safe",
    lastCheck: "2 minutes ago",
    riskScore: 15,
    alerts: 0
  },
  {
    id: "2", 
    address: "0xabcd...efgh",
    name: "Token Bridge",
    network: "Arbitrum Sepolia",
    status: "warning",
    lastCheck: "5 minutes ago",
    riskScore: 45,
    alerts: 2
  },
  {
    id: "3",
    address: "0x9876...4321",
    name: "Lending Pool",
    network: "Ethereum Sepolia", 
    status: "critical",
    lastCheck: "1 minute ago",
    riskScore: 85,
    alerts: 5
  }
];

export default function MonitoringPage() {
  const [contracts] = useState<MonitoredContract[]>(mockContracts);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "safe": return "text-green-400 bg-green-400/10 border-green-400/20";
      case "warning": return "text-yellow-400 bg-yellow-400/10 border-yellow-400/20";
      case "critical": return "text-red-400 bg-red-400/10 border-red-400/20";
      default: return "text-gray-400 bg-gray-400/10 border-gray-400/20";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "safe": return <Shield className="w-4 h-4" />;
      case "warning": return <AlertTriangle className="w-4 h-4" />;
      case "critical": return <AlertTriangle className="w-4 h-4" />;
      default: return <Activity className="w-4 h-4" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">
          <span className="gradient-text">Real-Time Monitoring</span>
        </h1>
        <p className="text-muted-foreground">
          Monitor your audited contracts for security threats and anomalies in real-time
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="glass p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Monitored</p>
              <p className="text-2xl font-bold text-cyber-blue">{contracts.length}</p>
            </div>
            <Eye className="w-8 h-8 text-cyber-blue" />
          </div>
        </Card>

        <Card className="glass p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Active Alerts</p>
              <p className="text-2xl font-bold text-yellow-400">
                {contracts.reduce((sum, c) => sum + c.alerts, 0)}
              </p>
            </div>
            <Bell className="w-8 h-8 text-yellow-400" />
          </div>
        </Card>

        <Card className="glass p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Critical Issues</p>
              <p className="text-2xl font-bold text-red-400">
                {contracts.filter(c => c.status === "critical").length}
              </p>
            </div>
            <AlertTriangle className="w-8 h-8 text-red-400" />
          </div>
        </Card>

        <Card className="glass p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Avg Risk Score</p>
              <p className="text-2xl font-bold text-cyber-purple">
                {Math.round(contracts.reduce((sum, c) => sum + c.riskScore, 0) / contracts.length)}
              </p>
            </div>
            <TrendingUp className="w-8 h-8 text-cyber-purple" />
          </div>
        </Card>
      </div>

      {/* Monitored Contracts */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Monitored Contracts</h2>
          <Button className="bg-cyber-blue hover:bg-cyber-blue/80">
            <Zap className="w-4 h-4 mr-2" />
            Add Contract
          </Button>
        </div>

        <div className="grid gap-6">
          {contracts.map((contract) => (
            <Card key={contract.id} className="glass p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`p-2 rounded-lg border ${getStatusColor(contract.status)}`}>
                    {getStatusIcon(contract.status)}
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg">{contract.name}</h3>
                    <p className="text-sm text-muted-foreground font-mono">
                      {contract.address}
                    </p>
                    <div className="flex items-center space-x-4 mt-2">
                      <Badge variant="outline" className="text-xs">
                        {contract.network}
                      </Badge>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="w-3 h-3 mr-1" />
                        {contract.lastCheck}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Risk Score</p>
                    <p className={`text-lg font-bold ${
                      contract.riskScore < 30 ? 'text-green-400' :
                      contract.riskScore < 60 ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {contract.riskScore}
                    </p>
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Alerts</p>
                    <p className={`text-lg font-bold ${
                      contract.alerts === 0 ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {contract.alerts}
                    </p>
                  </div>

                  <Badge 
                    className={`${getStatusColor(contract.status)} capitalize`}
                  >
                    {contract.status}
                  </Badge>

                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Real-time Activity Feed */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
        <Card className="glass p-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-green-400/10 border border-green-400/20">
              <Shield className="w-5 h-5 text-green-400" />
              <div className="flex-1">
                <p className="text-sm">
                  <span className="font-medium">DeFi Vault V2</span> passed security check
                </p>
                <p className="text-xs text-muted-foreground">2 minutes ago</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 rounded-lg bg-yellow-400/10 border border-yellow-400/20">
              <AlertTriangle className="w-5 h-5 text-yellow-400" />
              <div className="flex-1">
                <p className="text-sm">
                  <span className="font-medium">Token Bridge</span> detected unusual transaction pattern
                </p>
                <p className="text-xs text-muted-foreground">5 minutes ago</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 rounded-lg bg-red-400/10 border border-red-400/20">
              <AlertTriangle className="w-5 h-5 text-red-400" />
              <div className="flex-1">
                <p className="text-sm">
                  <span className="font-medium">Lending Pool</span> critical vulnerability detected
                </p>
                <p className="text-xs text-muted-foreground">8 minutes ago</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
