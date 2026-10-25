"use client";

import { useState } from "react";
import { site, whatsappLink } from "@/lib/site";
import { Arrow } from "./icons";

const volumes = ["Günde 1-20", "Günde 20-100", "Günde 100-500", "Günde 500+"];

// Backend olmadan çalışsın diye form, bilgileri hazır bir mesaj olarak açar:
// WhatsApp numarası varsa WhatsApp'ta, yoksa e-posta uygulamasında.
export function ContactForm() {
  const [volume, setVolume] = useState(volumes[1]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const text = [
      "Merhaba, aynı gün teslimat için teklif almak istiyorum.",
      `Ad Soyad: ${f.get("name")}`,
      `Firma: ${f.get("company") || "-"}`,
      `Telefon: ${f.get("phone")}`,
      `Gönderi hacmi: ${volume}`,
      f.get("note") ? `Not: ${f.get("note")}` : "",
    ].filter(Boolean).join("\n");
    if (site.whatsapp) {
      window.open(whatsappLink(text), "_blank", "noopener");
    } else {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Teklif talebi")}&body=${encodeURIComponent(text)}`;
    }
  }

  const input = "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/35 outline-none transition focus:border-brand focus:bg-white/[0.07]";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" required placeholder="Ad Soyad" className={input} autoComplete="name" />
        <input name="company" placeholder="Firma / Mağaza adı" className={input} autoComplete="organization" />
      </div>
      <input name="phone" required type="tel" placeholder="Telefon" className={input} autoComplete="tel" />

      <fieldset>
        <legend className="mb-2 text-sm font-medium text-white/60">Günlük gönderi hacminiz</legend>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {volumes.map((v) => (
            <button
              type="button"
              key={v}
              onClick={() => setVolume(v)}
              aria-pressed={volume === v}
              className={`rounded-xl border px-3 py-2.5 text-sm font-semibold transition ${
                volume === v ? "border-brand bg-brand/15 text-white" : "border-white/10 text-white/60 hover:border-white/25"
              }`}
            >
              {v.replace("Günde ", "")}
            </button>
          ))}
        </div>
      </fieldset>

      <textarea name="note" rows={3} placeholder="Eklemek istedikleriniz (opsiyonel)" className={input} />

      <button type="submit" className="group flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-4 font-bold text-white transition hover:bg-brand-2">
        Teklif İste
        <Arrow className="size-5 transition group-hover:translate-x-1" />
      </button>
      <p className="text-center text-xs text-white/40">“Teklif İste”ye bastığınızda talebiniz {site.whatsapp ? "WhatsApp" : "e-posta"} üzerinden bize iletilir.</p>
    </form>
  );
}
