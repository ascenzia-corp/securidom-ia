import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const webhookUrl = process.env.NEXT_PUBLIC_EVALUATION_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json(
      { status: "error", message: "Webhook URL not configured" },
      { status: 500 }
    );
  }

  const session = request.nextUrl.searchParams.get("session") || "";
  const url = `${webhookUrl}?session=${encodeURIComponent(session)}`;

  try {
    let finalUrl = url;
    let resp = await fetch(finalUrl, { redirect: "manual" });
    let redirects = 0;
    while ((resp.status === 301 || resp.status === 302) && redirects < 5) {
      const location = resp.headers.get("location");
      if (!location) break;
      finalUrl = location;
      resp = await fetch(finalUrl, { redirect: "manual" });
      redirects++;
    }

    const text = await resp.text();
    if (text.startsWith("<!")) {
      return NextResponse.json(
        { status: "error", message: "Apps Script returned HTML. Check deployment." },
        { status: 502 }
      );
    }

    const data = JSON.parse(text);
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { status: "error", message: String(err) },
      { status: 502 }
    );
  }
}
