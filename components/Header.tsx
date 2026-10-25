"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { Logo } from "./Logo";
import { Close, Menu, Phone } from "./icons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
            <a key={item.href} href={item.href} className="rounded-lg px-3.5 py-2 text-sm font-medium text-white/70 transition hover:bg-white/5 hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          {site.phone && <a href={site.phoneHref} className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-white/80 hover:text-white">
            <Phone className="size-4" /> {site.phone}
          </a>}
          <a href="#iletisim" className="rounded-xl bg-brand px-4 py-2.5 text-sm font-bold text-white transition hover:bg-brand-2">
            Teklif Al
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid size-10 place-items-center rounded-xl text-white hover:bg-white/10 lg:hidden"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
        >
          {open ? <Close className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/10 bg-ink/95 p-3 backdrop-blur-xl lg:hidden">
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 font-medium text-white/80 hover:bg-white/5">
              {item.label}
            </a>
          ))}
          <a href="#iletisim" onClick={() => setOpen(false)} className="mt-2 block rounded-xl bg-brand px-4 py-3 text-center font-bold text-white">
            Teklif Al
          </a>
        </div>
      )}
    </header>
  );
}
