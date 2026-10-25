"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { Arrow, Check } from "./icons";

const volumes = ["Günde 1-20", "Günde 20-100", "Günde 100-500", "Günde 500+"];

export function ContactForm() {
  const [volume, setVolume] = useState(volumes[1]);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const f = new FormData(e.currentTarget);
    const payload = {
      name: f.get("name") as string,
      company: f.get("company") as string,
      phone: f.get("phone") as string,
      volume,
      note: f.get("note") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error || "Gönderim sırasında bir hata oluştu.");
      }

      setStatus("success");
    } catch (err: unknown) {
      console.error("Form submit error:", err);
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Talebiniz gönderilirken bir sorun oluştu. Lütfen doğrudan e-posta ile iletin."
      );
    }
  }

  const input =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/35 outline-none transition focus:border-brand focus:bg-white/[0.07] disabled:opacity-50";

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-lime/30 bg-lime/10 p-8 text-center text-white backdrop-blur-md">
        <div className="mx-auto grid size-14 place-items-center rounded-full bg-lime text-ink shadow-lg shadow-lime/20">
          <Check className="size-7" strokeWidth={3} />
        </div>
        <h3 className="mt-5 text-2xl font-bold tracking-tight text-white">Teklif Talebiniz Alındı!</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/80">
          Bilgileriniz <span className="font-semibold text-lime">{site.email}</span> adresine başarıyla iletildi.
          Müşteri temsilcimiz en kısa sürede sizinle iletişime geçecektir.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20"
        >
          Yeni Teklif İste
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {status === "error" && (
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200">
          <p>{errorMessage}</p>
          <a
            href={`mailto:${site.email}?subject=Teklif Talebi`}
            className="mt-2 inline-block font-semibold text-white underline"
          >
            Doğrudan {site.email} adresine e-posta gönderin →
          </a>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="name"
          required
          disabled={status === "loading"}
          placeholder="Ad Soyad"
          className={input}
          autoComplete="name"
        />
        <input
          name="company"
          disabled={status === "loading"}
          placeholder="Firma / Mağaza adı"
          className={input}
          autoComplete="organization"
        />
      </div>
      <input
        name="phone"
        required
        disabled={status === "loading"}
        type="tel"
        placeholder="Telefon"
        className={input}
        autoComplete="tel"
      />

      <fieldset>
        <legend className="mb-2 text-sm font-medium text-white/60">Günlük gönderi hacminiz</legend>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {volumes.map((v) => (
            <button
              type="button"
              key={v}
              disabled={status === "loading"}
              onClick={() => setVolume(v)}
              aria-pressed={volume === v}
              className={`rounded-xl border px-3 py-2.5 text-sm font-semibold transition ${
                volume === v
                  ? "border-brand bg-brand/15 text-white"
                  : "border-white/10 text-white/60 hover:border-white/25"
              }`}
            >
              {v.replace("Günde ", "")}
            </button>
          ))}
        </div>
      </fieldset>

      <textarea
        name="note"
        rows={3}
        disabled={status === "loading"}
        placeholder="Eklemek istedikleriniz (opsiyonel)"
        className={input}
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="group flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-4 font-bold text-white transition hover:bg-brand-2 disabled:cursor-not-allowed disabled:opacity-75"
      >
        {status === "loading" ? (
          <span className="flex items-center gap-2">
            <span className="size-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            Gönderiliyor...
          </span>
        ) : (
          <>
            Teklif İste
            <Arrow className="size-5 transition group-hover:translate-x-1" />
          </>
        )}
      </button>
      <p className="text-center text-xs text-white/40">
        “Teklif İste”ye bastığınızda talebiniz doğrudan <span className="text-white/60">{site.email}</span> adresine iletilir.
      </p>
    </form>
  );
}
