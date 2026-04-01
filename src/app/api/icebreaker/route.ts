import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const webhookUrl = process.env.NEXT_PUBLIC_ICEBREAKER_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json(
      { status: "error", message: "Webhook URL not configured" },
      { status: 500 }
    );
  }

  const session = request.nextUrl.searchParams.get("session") || "";
  const url = `${webhookUrl}?session=${encodeURIComponent(session)}`;

  try {
    const resp = await fetch(url, { redirect: "follow" });
    const text = await resp.text();
    const data = JSON.parse(text);
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { status: "error", message: String(err) },
      { status: 502 }
    );
  }
}
