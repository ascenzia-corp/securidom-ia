import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const webhookUrl = process.env.NEXT_PUBLIC_EVALUATION_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json(
      { status: "error", message: "Webhook URL not configured" },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();

    const resp = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      redirect: "follow",
    });

    const text = await resp.text();
    try {
      const data = JSON.parse(text);
      return NextResponse.json(data);
    } catch {
      return NextResponse.json({ status: "ok" });
    }
  } catch (err) {
    return NextResponse.json(
      { status: "error", message: String(err) },
      { status: 502 }
    );
  }
}
