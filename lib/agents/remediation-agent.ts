import { generateRemediationCode, Vulnerability } from "../gemini/client";

export class RemediationAgent {
  async generateFix(originalCode: string, vulnerability: Vulnerability): Promise<string> {
    return await generateRemediationCode(originalCode, vulnerability);
  }

  async generateMultipleFixes(
    originalCode: string,
    vulnerabilities: Vulnerability[]
  ): Promise<Record<string, string>> {
    const fixes: Record<string, string> = {};
    
    for (const vuln of vulnerabilities) {
      fixes[vuln.type] = await this.generateFix(originalCode, vuln);
    }
    
    return fixes;
  }

  generateQuickFix(vulnerability: Vulnerability): string {
    const quickFixes: Record<string, string> = {
      "Reentrancy": "Use ReentrancyGuard modifier or checks-effects-interactions pattern",
      "Integer Overflow": "Use SafeMath library or Solidity 0.8+ built-in overflow protection",
      "Access Control": "Implement proper access control with OpenZeppelin's Ownable or AccessControl",
      "Unchecked External Call": "Check return values of external calls and handle failures",
      "DOS": "Implement gas limits and avoid unbounded loops",
      "Front-running": "Use commit-reveal schemes or other anti-MEV techniques",
      "Timestamp Manipulation": "Avoid using block.timestamp for critical logic",
      "Uninitialized Storage": "Always initialize storage variables explicitly",
      "Delegatecall": "Validate delegatecall targets and be aware of storage layout",
      "tx.origin": "Use msg.sender instead of tx.origin for authentication"
    };

    return quickFixes[vulnerability.type] || vulnerability.fix;
  }

  prioritizeVulnerabilities(vulnerabilities: Vulnerability[]): Vulnerability[] {
    const severityOrder = { "Critical": 4, "High": 3, "Medium": 2, "Low": 1 };
    
    return vulnerabilities.sort((a, b) => {
      return severityOrder[b.severity] - severityOrder[a.severity];
    });
  }
}

export const remediationAgent = new RemediationAgent();
