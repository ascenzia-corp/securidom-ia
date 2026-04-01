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
    // Google Apps Script redirige vers script.googleusercontent.com
    // On doit suivre la redirection manuellement pour éviter les pages HTML
    let finalUrl = url;
    let resp = await fetch(finalUrl, { redirect: "manual" });

    // Suivre les redirections manuellement (max 5)
    let redirects = 0;
    while ((resp.status === 301 || resp.status === 302) && redirects < 5) {
      const location = resp.headers.get("location");
      if (!location) break;
      finalUrl = location;
      resp = await fetch(finalUrl, { redirect: "manual" });
      redirects++;
    }

    const text = await resp.text();

    // Vérifier que c'est bien du JSON
    if (text.startsWith("<!")) {
      return NextResponse.json(
        {
          status: "error",
          message: "Google Apps Script a retourné du HTML au lieu de JSON. Vérifiez que le script est déployé avec accès 'Tout le monde'.",
          debug: { finalUrl, statusCode: resp.status, bodyPreview: text.substring(0, 200) }
        },
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
