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

  getRiskColor(score: number): string {
    if (score < 30) return "text-green-400";
    if (score < 50) return "text-yellow-400";
    if (score < 75) return "text-orange-400";
    return "text-red-400";
  }

  generateRiskReport(analysis: VulnerabilityAnalysis): {
    level: string;
    score: number;
    recommendations: string[];
    criticalIssues: number;
  } {
    const score = this.calculateRiskScore(analysis);
    const level = this.getRiskLevel(score);
    const criticalIssues = analysis.vulnerabilities.filter(v => v.severity === "Critical").length;
    
    const recommendations = [
      "Review all critical and high severity vulnerabilities immediately",
      "Implement recommended fixes before deployment",
      "Consider additional security audits for high-risk contracts",
      "Follow security best practices and use established patterns"
    ];

    return {
      level,
      score,
      recommendations,
      criticalIssues
    };
  }
}

export const riskAgent = new RiskAgent();
