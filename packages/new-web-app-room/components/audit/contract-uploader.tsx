"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Code, Loader2 } from "lucide-react";

interface ContractUploaderProps {
  onAnalyze: (code: string) => void;
  isAnalyzing: boolean;
}

export function ContractUploader({ onAnalyze, isAnalyzing }: ContractUploaderProps) {
  const [code, setCode] = useState("");

  const handleAnalyze = () => {
    if (code.trim()) {
      onAnalyze(code);
    }
  };

  const sampleContract = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VulnerableContract {
    mapping(address => uint256) public balances;
    
    function deposit() public payable {
        balances[msg.sender] += msg.value;
    }
    
    function withdraw(uint256 amount) public {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        
        // Vulnerable to reentrancy attack
        (bool success, ) = msg.sender.call{value: amount}("");
        require(success, "Transfer failed");
        
        balances[msg.sender] -= amount;
    }
    
    function getBalance() public view returns (uint256) {
        return balances[msg.sender];
    }
}`;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Code className="h-5 w-5 text-cyan-400" />
          Smart Contract Code
        </CardTitle>
        <CardDescription>
          Paste your Solidity contract code below for AI-powered security analysis
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-white/80">
              Contract Code
            </label>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCode(sampleContract)}
              className="text-xs text-cyan-400 hover:text-cyan-300"
            >
              Load Sample Contract
            </Button>
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Paste your Solidity contract code here..."
            className="w-full h-64 p-4 rounded-md border border-white/20 bg-white/5 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-md font-mono text-sm resize-none"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-white/60">
            {code.length} characters • {code.split('\n').length} lines
          </div>
          <Button
            onClick={handleAnalyze}
            disabled={!code.trim() || isAnalyzing}
            className="cyber-glow"
          >
            {isAnalyzing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <Upload className="mr-2 h-4 w-4" />
                Analyze Contract
              </>
            )}
          </Button>
        </div>

        {code.trim() && (
          <div className="text-xs text-white/60 bg-white/5 p-3 rounded-md">
            <strong>Analysis will include:</strong> Vulnerability detection, gas optimization suggestions, 
            security best practices, risk scoring, and automated fix recommendations.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
