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
}

export const remediationAgent = new RemediationAgent();
