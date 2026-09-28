import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const data = body as Record<string, unknown>;
  const firstName = typeof data.first_name === "string" ? data.first_name.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";

  if (!firstName || !email) {
    return NextResponse.json(
      { error: "first_name and email are required" },
      { status: 400 },
    );
  }

  // TODO: forward to FormInit / CRM endpoint. For now the payload is
  // acknowledged so the UI can advance to the success state.
  return NextResponse.json({ ok: true });
}