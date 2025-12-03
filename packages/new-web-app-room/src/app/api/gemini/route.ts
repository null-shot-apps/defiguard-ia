import { NextRequest, NextResponse } from "next/server";
import { analyzeContractWithGemini } from "@/lib/gemini/client";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { code } = body as { code: string };

    if (!code) {
      return NextResponse.json(
        { error: "Code is required" },
        { status: 400 }
      );
    }

    const analysis = await analyzeContractWithGemini(code);
    return NextResponse.json(analysis);
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json(
      { error: "Failed to analyze with Gemini" },
      { status: 500 }
    );
  }
}

