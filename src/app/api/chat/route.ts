import { NextRequest, NextResponse } from "next/server";
import { processQuery } from "@/lib/pharma-engine";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    const { query, category } = await req.json();

    if (!query || typeof query !== "string" || query.trim().length === 0) {
      return NextResponse.json({ error: "Query required" }, { status: 400 });
    }

    if (query.length > 500) {
      return NextResponse.json({ error: "Query too long" }, { status: 400 });
    }

    const start = Date.now();
    const result = processQuery(query.trim());
    const responseTime = Date.now() - start;

    // Log anonymisé (en production, sauvegarder en BDD)
    const log = {
      sessionId: crypto.randomUUID(),
      category: result.category,
      queryHash: crypto.createHash("sha256").update(query.toLowerCase().trim()).digest("hex"),
      responseTime,
      timestamp: new Date().toISOString(),
    };
    // console.log("[PharmaBot Log]", log); // activer en prod avec Prisma

    void log; // évite l'avertissement unused variable

    return NextResponse.json({
      answer: result.answer,
      disclaimer: result.disclaimer,
      urgency: result.urgency ?? "normal",
      category: result.category,
      sources: result.sources ?? [],
    });
  } catch (error) {
    console.error("[API /chat]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
