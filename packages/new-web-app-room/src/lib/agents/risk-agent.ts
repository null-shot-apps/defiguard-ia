import { VulnerabilityAnalysis } from "../gemini/client";

export class RiskAgent {
  calculateRiskScore(analysis: VulnerabilityAnalysis): number {
    let score = 0;
    
    analysis.vulnerabilities.forEach(vuln => {
      switch (vuln.severity) {
        case "Critical": score += 30; break;
        case "High": score += 20; break;
        case "Medium": score += 10; break;
        case "Low": score += 5; break;
      }
    });
    
    return Math.min(100, score);
  }

  getRiskLevel(score: number): "Low" | "Medium" | "High" | "Critical" {
    if (score < 30) return "Low";
    if (score < 50) return "Medium";
    if (score < 75) return "High";
    return "Critical";
  }
}

export const riskAgent = new RiskAgent();
