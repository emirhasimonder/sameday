import { NextResponse } from "next/server";
import { site } from "@/lib/site";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, phone, volume, note } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Lütfen ad soyad ve telefon alanlarını doldurun." },
        { status: 400 }
      );
    }

    const payload = {
      "Ad Soyad": name,
      "Firma": company || "-",
      "Telefon": phone,
      "Günlük Gönderi Hacmi": volume || "-",
      "Not": note || "-",
      "_subject": `Sameday Lojistik - Yeni Teklif Talebi (${name})`,
      "_template": "table",
      "_captcha": "false",
    };

    const response = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: site.url,
        Referer: `${site.url}/`,
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json().catch(() => ({}));

    return NextResponse.json({
      success: true,
      message: data.message || "Talebiniz başarıyla iletildi.",
    });
  } catch (error) {
    console.error("Contact form submission error:", error);
    return NextResponse.json(
      { error: "Talebiniz gönderilirken bir hata oluştu." },
      { status: 500 }
    );
  }
}
