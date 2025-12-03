import { NextRequest, NextResponse } from "next/server";
import { auditorAgent } from "@/lib/agents/auditor-agent";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { code } = body as { code: string };

    if (!code || typeof code !== "string") {
      return NextResponse.json(
        { error: "Invalid contract code" },
        { status: 400 }
      );
    }

    // Analyze contract using AI agent
    const analysis = await auditorAgent.analyzeContract(code);

    return NextResponse.json(analysis);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to analyze contract" },
      { status: 500 }
    );
  }
}

