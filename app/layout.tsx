import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "latin-ext"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono-face",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | İstanbul İçi Aynı Gün Kargo Teslimatı`,
    template: `%s | ${site.name}`,
  },
  description:
    "İstanbul'un 39 ilçesine aynı gün kargo teslimatı. E-ticaret firmalarına adresten alım, kapıda ödeme, toplu dağıtım ve API entegrasyonu.",
  keywords: ["aynı gün kargo", "sameday kargo", "istanbul içi kargo", "e-ticaret kargo", "kapıda ödeme kargo", "aynı gün teslimat"],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Bugün sipariş, bugün kapıda`,
    description: "İstanbul içi aynı gün teslimat. E-ticaretiniz için hızlı, entegre ve takip edilebilir lojistik.",
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className={`${jakarta.variable} ${mono.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
