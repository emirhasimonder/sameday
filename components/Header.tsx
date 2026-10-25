"use client";

import { useEffect, useState } from "react";
import { nav, site, whatsappLink } from "@/lib/site";
import { Logo } from "./Logo";
import { Close, Menu, Phone, WhatsApp } from "./icons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const whatsappUrl = site.whatsapp
    ? whatsappLink("Merhaba, aynı gün teslimat hakkında bilgi almak istiyorum.")
    : "https://wa.me/?text=" + encodeURIComponent("Merhaba, aynı gün teslimat hakkında bilgi almak istiyorum.");

  const phoneUrl = site.phoneHref || (site.phone ? `tel:${site.phone}` : "#iletisim");

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 sm:px-5 ${
          scrolled || open
            ? "border border-white/10 bg-ink/80 shadow-2xl shadow-black/30 backdrop-blur-xl"
            : "border border-transparent"
        }`}
      >
        <Logo light />

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-white/70 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Sağ Taraf: Sol tarafta Telefon + WhatsApp, sağda Teklif Al */}
        <div className="hidden items-center gap-2.5 lg:flex">
          <a
            href={phoneUrl}
            className={`group flex h-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition-all hover:border-brand/40 hover:bg-brand/15 hover:text-white hover:scale-105 ${
              site.phone ? "gap-2 px-3.5 text-sm font-semibold" : "size-10"
            }`}
            title={site.phone ? `Telefon: ${site.phone}` : "Bizi Arayın"}
            aria-label="Telefon"
          >
            <Phone className="size-4 text-brand transition-transform group-hover:scale-110" />
            {site.phone && <span>{site.phone}</span>}
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#25D366] transition-all hover:border-[#25D366]/40 hover:bg-[#25D366]/15 hover:scale-105"
            title="WhatsApp ile İletişim"
            aria-label="WhatsApp"
          >
            <WhatsApp className="size-5 transition-transform group-hover:scale-110" />
          </a>

          <a
            href="#iletisim"
            className="rounded-xl bg-brand px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand/20 transition-all hover:bg-brand-2 hover:scale-[1.02]"
          >
            Teklif Al
          </a>
        </div>

        {/* Mobil Hızlı İletişim & Menü Butonu */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={phoneUrl}
            className="flex size-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-brand"
            aria-label="Telefon"
            title="Ara"
          >
            <Phone className="size-4" />
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#25D366]"
            aria-label="WhatsApp"
            title="WhatsApp"
          >
            <WhatsApp className="size-4" />
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-xl text-white hover:bg-white/10"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={open}
          >
            {open ? <Close className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/10 bg-ink/95 p-3 backdrop-blur-xl lg:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 font-medium text-white/80 hover:bg-white/5"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-3 grid grid-cols-2 gap-2 border-t border-white/10 pt-2">
            <a
              href={phoneUrl}
              className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-2.5 text-sm font-semibold text-white"
            >
              <Phone className="size-4 text-brand" /> Ara
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border border-[#25D366]/30 bg-[#25D366]/15 py-2.5 text-sm font-semibold text-[#25D366]"
            >
              <WhatsApp className="size-4" /> WhatsApp
            </a>
          </div>
          <a
            href="#iletisim"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-xl bg-brand px-4 py-3 text-center font-bold text-white"
          >
            Teklif Al
          </a>
        </div>
      )}
    </header>
  );
}
