"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, FileCode, Loader2 } from "lucide-react";

interface ContractUploaderProps {
  onAnalyze: (code: string) => void;
  isAnalyzing: boolean;
}

export function ContractUploader({ onAnalyze, isAnalyzing }: ContractUploaderProps) {
  const [code, setCode] = useState("");
  const [dragActive, setDragActive] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.trim()) {
      onAnalyze(code);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.name.endsWith('.sol')) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const content = event.target?.result as string;
          setCode(content);
        };
        reader.readAsText(file);
      }
    }
  };

  const exampleContract = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VulnerableBank {
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
          <FileCode className="h-5 w-5 text-cyber-blue" />
          Upload Smart Contract
        </CardTitle>
        <CardDescription>
          Paste your Solidity code or drag & drop a .sol file for AI-powered security analysis
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div
            className={`relative border-2 border-dashed rounded-lg p-4 transition-colors ${
              dragActive
                ? "border-cyber-blue bg-cyber-blue/10"
                : "border-gray-600 hover:border-gray-500"
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Paste your Solidity contract code here..."
              className="w-full h-64 bg-transparent border-none outline-none resize-none font-mono text-sm"
              disabled={isAnalyzing}
            />
            {!code && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center text-muted-foreground">
                  <Upload className="h-8 w-8 mx-auto mb-2" />
                  <p>Drop your .sol file here or paste code above</p>
                </div>
              </div>
            )}
          </div>

          <div className="flex gap-2">
            <Button
              type="submit"
              disabled={!code.trim() || isAnalyzing}
              variant="cyber"
              className="flex-1"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Analyzing Contract...
                </>
              ) : (
                "Analyze Contract"
              )}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => setCode(exampleContract)}
              disabled={isAnalyzing}
            >
              Load Example
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
