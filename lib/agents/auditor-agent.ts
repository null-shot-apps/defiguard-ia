import { analyzeContractWithGemini, VulnerabilityAnalysis } from "../gemini/client";

export class AuditorAgent {
  private name: string;
  private description: string;
  private version: string;

  constructor() {
    this.name = "SmartContractAuditor";
    this.description = "Analyzes smart contracts for security vulnerabilities using multiple detection methods";
    this.version = "1.0.0";
  }

  async analyzeContract(code: string): Promise<VulnerabilityAnalysis> {
    console.log("🔍 Starting security analysis...");
    
    // Use Gemini for AI-powered analysis
    const aiAnalysis = await analyzeContractWithGemini(code);
    
    console.log(`✅ Analysis complete. Found ${aiAnalysis.vulnerabilities.length} vulnerabilities`);
    
    return aiAnalysis;
  }

  async quickScan(code: string): Promise<{ riskScore: number; criticalCount: number }> {
    const analysis = await this.analyzeContract(code);
    
    const criticalCount = analysis.vulnerabilities.filter(
      v => v.severity === "Critical"
    ).length;
    
    return {
      riskScore: analysis.riskScore,
      criticalCount,
    };
  }

  getAgentInfo() {
    return {
      name: this.name,
      description: this.description,
      version: this.version,
    };
  }
}

export const auditorAgent = new AuditorAgent();
