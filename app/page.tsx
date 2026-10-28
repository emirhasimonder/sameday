import { Header } from "@/components/Header";
import { Logo } from "@/components/Logo";
import { ContactForm } from "@/components/ContactForm";
import { HeroVideo } from "@/components/HeroVideo";
import {
  Arrow, Bell, Bolt, Boxes, Building, Chart, Check, Clock, Code, Mail, Phone, Pin, Plus, Shield, Truck,
  WhatsApp,
} from "@/components/icons";
import { districts, nav, site, whatsappLink } from "@/lib/site";

const services = [
  { icon: Bolt, title: "Aynı Gün Teslimat", text: `Saat ${site.cutoff}'e kadar teslim aldığımız gönderiler aynı gün akşamına kadar alıcısına ulaşır.`, featured: true },
  { icon: Truck, title: "Adresten Günlük Alım", text: "Kuryemiz her gün belirlediğiniz saatte deponuza ya da mağazanıza gelir, gönderileri toplu alır." },
  { icon: Shield, title: "İade & Değişim Yönetimi", text: "Alıcınızdan adresten iade ve değişim paketlerini teslim alır, deponuza güvenle geri ulaştırırız." },
  { icon: Boxes, title: "Toplu Dağıtım", text: "Kampanya, katalog, evrak ya da numune: yüzlerce gönderiyi tek seferde, bölge optimizasyonuyla dağıtıyoruz." },
  { icon: Code, title: "API & Panel Entegrasyonu", text: "E-ticaret altyapınıza bağlanan API ve kullanıcı paneli ile siparişleriniz otomatik kargoya aktarılır." },
];

const steps = [
  { title: "Siparişleri aktarın", text: "Panelden tek tuşla, Excel ile ya da API üzerinden gönderilerinizi sisteme iletin." },
  { title: "Adresinizden alalım", text: `${site.cutoff}'e kadar kuryemiz kapınızda. Gönderiler barkodlanır, anında takibe açılır.` },
  { title: "Akıllı rota", text: "Paketler bölgelere ayrılır, her kurye için en kısa teslimat rotası oluşturulur." },
  { title: "Bugün teslim", text: "Alıcıya teslim edilir; siz ve müşteriniz her adımda SMS ve panel bildirimi alırsınız." },
];

const benefits = [
  { icon: Chart, title: "Daha yüksek mağaza puanı", text: "Aynı gün teslimat seçeneği pazaryerlerinde satıcı puanınızı ve dönüşüm oranınızı yukarı taşır." },
  { icon: Shield, title: "Daha az iptal ve iade", text: "Sipariş soğumadan aynı gün teslim edilir; müşteri memnuniyeti artar, iptal ve bekleme oranı belirgin şekilde düşer." },
  { icon: Bell, title: "Tam görünürlük", text: "Her gönderinin anlık durumunu, teslimat raporlarını ve cari hesabınızı tek panelden izlersiniz." },
];

const faqs = [
  { q: "Aynı gün teslimat için son saat kaçtır?", a: `Saat ${site.cutoff}'e kadar adresinizden teslim aldığımız gönderiler aynı gün içinde alıcıya ulaştırılır. Bu saatten sonra alınan gönderiler ertesi gün ilk dağıtıma çıkar.` },
  { q: "Hangi bölgelere hizmet veriyorsunuz?", a: "İstanbul'un Avrupa ve Anadolu yakasındaki 34 ilçesine aynı gün teslimat yapıyoruz." },
  { q: "Hafta sonu teslimat yapıyor musunuz?", a: "Evet, e-ticaret operasyonlarınızın kesintisiz sürmesi için Cumartesi günleri de aynı gün teslimat hizmeti sağlıyoruz." },
  { q: "E-ticaret sitemle entegrasyon nasıl yapılıyor?", a: "REST API'miz ile siparişlerinizi otomatik olarak aktarabilirsiniz. Yazılım altyapınız yoksa panelimizden Excel yükleyerek tek seferde yüzlerce siparişi kargoya verebilirsiniz." },
  { q: "Minimum gönderi adedi var mı?", a: "Hayır. Günde birkaç gönderisi olan butik mağazalardan yüksek hacimli e-ticaret firmalarına kadar herkese uygun çözümlerimiz var. Fiyatlandırma hacminize göre belirlenir." },
  { q: "Gönderimi nasıl takip ederim?", a: "Her gönderiye özel takip numarası oluşturulur. Hem siz panelden hem de alıcınız SMS ile gönderinin durumunu anlık olarak görebilir." },
];

function SectionTag({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-[0.18em] ${dark ? "bg-white/10 text-white ring-1 ring-white/15" : "bg-brand/10 text-brand"}`}>
      <span className="size-1.5 rounded-full bg-brand" />
      {children}
    </span>
  );
}

function ShipmentCard() {
  const timeline = [
    { label: "Adresten alındı", time: "11:24", done: true },
    { label: "Transfer merkezinde", time: "13:05", done: true },
    { label: "Dağıtıma çıktı", time: "16:40", done: true },
    { label: "Teslim edildi", time: "18:12", done: false },
  ];
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="relative animate-float rounded-3xl border border-white/20 bg-ink-2/25 p-6 shadow-2xl shadow-black/40 backdrop-blur-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-white/50">Takip No</p>
            <p className="font-mono text-sm font-semibold text-white">SDL-34-882 190</p>
          </div>
          <span className="flex items-center gap-2 rounded-full bg-lime/15 px-3 py-1 text-xs font-bold text-lime ring-1 ring-lime/20">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-lime opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-lime" />
            </span>
            Bugün teslim
          </span>
        </div>

        <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-3 rounded-2xl bg-white/[0.05] p-4 ring-1 ring-white/10 backdrop-blur-sm">
          <div>
            <p className="text-[11px] text-white/50">Çıkış</p>
            <p className="font-semibold text-white">Levent</p>
          </div>
          <div className="flex items-center gap-1 text-brand">
            <span className="h-px w-6 bg-gradient-to-r from-transparent to-brand" />
            <Truck className="size-5" />
            <span className="h-px w-6 bg-gradient-to-r from-brand to-transparent" />
          </div>
          <div className="text-right">
            <p className="text-[11px] text-white/50">Varış</p>
            <p className="font-semibold text-white">Kadıköy</p>
          </div>
        </div>

        <ol className="mt-5 space-y-0 pb-6">
          {timeline.map((t, i) => (
            <li key={t.label} className="relative flex gap-4 pb-4 last:pb-0">
              {i < timeline.length - 1 && (
                <span className={`absolute left-[11px] top-6 h-[calc(100%-12px)] w-px ${t.done ? "bg-brand" : "bg-white/15"}`} />
              )}
              <span className={`grid size-6 shrink-0 place-items-center rounded-full ${t.done ? "bg-brand text-white shadow-lg shadow-brand/40" : "border border-dashed border-white/25 text-white/40"}`}>
                {t.done ? <Check className="size-3.5" strokeWidth={3} /> : <Clock className="size-3.5" />}
              </span>
              <div className="flex flex-1 items-center justify-between">
                <span className={`text-sm font-medium ${t.done ? "text-white" : "text-white/50"}`}>{t.label}</span>
                <span className="font-mono text-xs text-white/50">{t.done ? t.time : `~${t.time}`}</span>
              </div>
            </li>
          ))}
        </ol>

        {/* Floating Delivery Speed Badge */}
        <div className="absolute -bottom-5 -right-4 hidden rounded-2xl border border-white/20 bg-white/85 px-4 py-3.5 shadow-2xl shadow-black/30 backdrop-blur-md sm:flex sm:items-center sm:gap-3 sm:-right-6">
          <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
            <Bolt className="size-5" />
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-ink/60">Teslimat Hızı</p>
            <p className="text-sm font-extrabold text-ink sm:text-base">Aynı Gün Teslim</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden bg-ink pb-24 pt-32 text-white sm:pt-40 lg:pb-32">
          <HeroVideo />

          <div className="absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px]" />

          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-[1.15fr_1fr]">

            <div>
              <SectionTag dark>İstanbul içi · Aynı gün teslimat</SectionTag>
              <h1 className="mt-6 text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                Bugün sipariş,
                <br />
                <span className="text-gradient">bugün kapıda.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65">
                E-ticaretinizi hızlandıran yeni nesil kargo. Teslim aldığımız gönderileri
                İstanbul&apos;un 34 ilçesinde aynı gün teslim ediyoruz. Entegre panel ve anlık takip dahil, her şey kontrol edilebilir ve izlenebilir.
              </p>


              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#iletisim" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-4 font-bold transition hover:bg-brand-2">
                  Ücretsiz Teklif Al
                  <Arrow className="size-5 transition group-hover:translate-x-1" />
                </a>
                {site.whatsapp && <a href={whatsappLink("Merhaba, aynı gün teslimat hakkında bilgi almak istiyorum.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-4 font-semibold transition hover:bg-white/10">
                  <WhatsApp className="size-5 text-[#25D366]" />
                  WhatsApp&apos;tan Yazın
                </a>}
              </div>

              <dl className="mt-14 grid max-w-xl grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
                {[
                  ["34", "ilçede hizmet"],
                  [site.cutoff, "son alım saati"],
                  ["1.000+", "sipariş tek tıkla"],
                  ["8 yıl", "sektör tecrübesi"],
                ].map(([v, l]) => (
                  <div key={l}>
                    <dt className="sr-only">{l}</dt>
                    <dd className="text-3xl font-extrabold tracking-tight">{v}</dd>
                    <dd className="mt-1 text-sm text-white/50">{l}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <ShipmentCard />
          </div>
        </section>

        {/* MARQUEE */}
        <div className="overflow-hidden border-y border-ink/10 bg-brand py-4 text-white">
          <div className="flex w-max animate-marquee gap-10 whitespace-nowrap text-sm font-bold uppercase tracking-[0.2em]">
            {Array.from({ length: 2 }).flatMap((_, k) =>
              ["Aynı gün teslimat", "34 ilçede dağıtım", "Adresten alım", "API entegrasyonu", "Toplu dağıtım", "Anlık takip"].map((t) => (
                <span key={`${k}-${t}`} className="flex items-center gap-10">
                  {t} <Bolt className="size-4" />
                </span>
              )),
            )}
          </div>
        </div>


        {/* SERVICES */}
        <section id="hizmetler" className="mx-auto max-w-7xl px-5 py-24 lg:py-32">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <SectionTag>Hizmetler</SectionTag>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Satıştan teslimata, tek bir lojistik ortağı.
              </h2>
            </div>
            <p className="max-w-md text-lg text-ink/60">
              E-ticaret firmaları, butik mağazalar ve kurumsal göndericiler için uçtan uca İstanbul içi dağıtım çözümleri.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, text, featured }) => (
              <article
                key={title}
                className={`group relative overflow-hidden rounded-3xl p-8 transition duration-300 hover:-translate-y-1 ${featured ? "bg-ink text-white" : "bg-white ring-1 ring-ink/5 hover:shadow-xl hover:shadow-ink/5"
                  }`}
              >
                {featured && <div className="absolute -right-16 -top-16 size-48 rounded-full bg-brand/40 blur-3xl" />}
                <span className={`relative grid size-12 place-items-center rounded-2xl ${featured ? "bg-brand text-white" : "bg-brand/10 text-brand"}`}>
                  <Icon className="size-6" />
                </span>
                <h3 className="relative mt-6 text-xl font-bold">{title}</h3>
                <p className={`relative mt-3 leading-relaxed ${featured ? "text-white/65" : "text-ink/60"}`}>{text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="nasil-calisir" className="bg-white py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5">
            <div className="mx-auto max-w-2xl text-center">
              <SectionTag>Sistem nasıl çalışır</SectionTag>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Bir günde dört adım.</h2>
              <p className="mt-4 text-lg text-ink/60">
                Zaman pencereleri ve bölge optimizasyonu ile işleyen operasyonumuz, gönderinizi sabahtan akşama alıcısına ulaştırır.
              </p>
            </div>

            <div className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <div key={s.title} className="relative">
                  {/* Straight connecting line to the next step */}
                  {i < steps.length - 1 && (
                    <div className="absolute -right-6 left-14 top-7 hidden h-px bg-brand/35 lg:block" />
                  )}
                  <div className="flex items-center">
                    <span className="relative z-10 grid size-14 place-items-center rounded-2xl bg-ink font-mono text-sm font-bold text-white shadow-md shadow-ink/10">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink/60">{s.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 flex flex-col items-center justify-between gap-4 rounded-3xl bg-paper p-6 ring-1 ring-ink/5 sm:flex-row sm:p-8">
              <div className="flex items-center gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand text-white"><Clock className="size-6" /></span>
                <p className="text-lg font-semibold">
                  Son alım saati <span className="text-brand">{site.cutoff}</span>. Sonrasında alınan gönderiler ertesi sabah ilk dağıtımda.
                </p>
              </div>
              <a href="#iletisim" className="shrink-0 rounded-xl bg-ink px-5 py-3 font-bold text-white transition hover:bg-ink-3">Hemen başlayın</a>
            </div>
          </div>
        </section>

        {/* INTEGRATION */}
        <section id="entegrasyon" className="relative overflow-hidden bg-ink py-24 text-white lg:py-32">
          <div className="absolute -left-40 bottom-0 size-[500px] rounded-full bg-brand/15 blur-[120px]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2">
            <div>
              <SectionTag dark>Teknolojik altyapı</SectionTag>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                1.000 siparişi <span className="text-gradient">tek tuşla</span> kargoya verin.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/60">
                Kendi geliştirdiğimiz panel ve API, satış verilerinizi saniyeler içinde teslimat operasyonuna dönüştürür.
                Kargo girişi, takip, tahsilat ve cari hesabınız tek ekranda.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "REST API ile e-ticaret sitenize tam entegrasyon",
                  "Excel ile toplu sipariş yükleme, otomatik barkod",
                  "Anlık teslimat durumu ve webhook bildirimleri",
                  "Tahsilat, cari takip ve detaylı raporlama",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-lime/15 text-lime"><Check className="size-3.5" strokeWidth={3} /></span>
                    <span className="text-white/80">{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-ink-2 shadow-2xl shadow-black/40">
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
                <span className="size-3 rounded-full bg-white/15" />
                <span className="size-3 rounded-full bg-white/15" />
                <span className="size-3 rounded-full bg-white/15" />
                <span className="ml-3 font-mono text-xs text-white/40">POST /v1/shipments</span>
              </div>
              <pre className="overflow-x-auto p-6 font-mono text-[13px] leading-6">
                <code>
                  <span className="text-white/40">{"// Siparişi oluşturun, gerisini biz halledelim"}</span>{"\n"}
                  <span className="text-brand-2">const</span> <span className="text-white">res</span> = <span className="text-brand-2">await</span> <span className="text-lime">fetch</span>(<span className="text-amber-200">&quot;https://api.{site.domain}/v1/shipments&quot;</span>, {"{"}{"\n"}
                  {"  "}<span className="text-white">method</span>: <span className="text-amber-200">&quot;POST&quot;</span>,{"\n"}
                  {"  "}<span className="text-white">body</span>: <span className="text-lime">JSON</span>.<span className="text-lime">stringify</span>({"{"}{"\n"}
                  {"    "}<span className="text-white">receiver</span>: <span className="text-amber-200">&quot;Ayşe Yılmaz&quot;</span>,{"\n"}
                  {"    "}<span className="text-white">district</span>: <span className="text-amber-200">&quot;Kadıköy&quot;</span>,{"\n"}
                  {"    "}<span className="text-white">packages</span>: <span className="text-sky-300">2</span>,{"\n"}
                  {"    "}<span className="text-white">sameDay</span>: <span className="text-sky-300">true</span>,{"\n"}
                  {"  "}{"}"}),{"\n"}
                  {"}"});{"\n\n"}
                  <span className="text-white/40">{"// → { trackingNo: \"SDL-34-882190\", eta: \"18:00-20:00\" }"}</span>
                </code>
              </pre>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="mx-auto max-w-7xl px-5 py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <SectionTag>E-ticarete özel</SectionTag>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Hızlı teslimat, rekabette öne geçirir.</h2>
              <p className="mt-5 text-lg text-ink/60">
                Müşteriniz siparişini aynı gün aldığında sadece memnun olmaz, tekrar sizden alır.
              </p>
            </div>
            <div className="grid gap-4">
              {benefits.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-5 rounded-3xl bg-white p-6 ring-1 ring-ink/5 sm:p-8">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-ink text-brand"><Icon className="size-6" /></span>
                  <div>
                    <h3 className="text-lg font-bold">{title}</h3>
                    <p className="mt-1.5 leading-relaxed text-ink/60">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COVERAGE */}
        <section id="bolgeler" className="bg-white py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <SectionTag>Hizmet bölgeleri</SectionTag>
                <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                  İstanbul&apos;un <span className="text-brand">34 ilçesinde</span> aktif hizmet.
                </h2>
              </div>
              <p className="max-w-md text-lg text-ink/60">Avrupa ve Anadolu yakasında 34 ilçede her adrese aynı gün güvenle teslimat.</p>
            </div>
            <ul className="mt-12 flex flex-wrap gap-2.5">
              {districts.map((d) => (
                <li key={d} className="flex items-center gap-2 rounded-full border border-ink/10 bg-paper px-4 py-2 text-sm font-medium text-ink/80 transition hover:border-brand hover:text-brand">
                  <Pin className="size-3.5" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section id="sss" className="mx-auto max-w-4xl px-5 py-24 lg:py-32">
          <div className="text-center">
            <SectionTag>Sıkça sorulan sorular</SectionTag>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Aklınızdaki sorular.</h2>
          </div>
          <div className="mt-12 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl bg-white ring-1 ring-ink/5 open:shadow-lg open:shadow-ink/5">
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-6 text-lg font-semibold">
                  {f.q}
                  <span className="faq-icon grid size-8 shrink-0 place-items-center rounded-full bg-paper text-brand transition-transform"><Plus className="size-4" /></span>
                </summary>
                <p className="px-6 pb-6 leading-relaxed text-ink/60">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="iletisim" className="px-4 pb-24">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-ink px-6 py-16 text-white sm:px-12 lg:py-20">
            <div className="bg-grid absolute inset-0" />
            <div className="absolute -right-32 -top-32 size-[420px] rounded-full bg-brand/25 blur-[110px]" />
            <div className="relative grid gap-14 lg:grid-cols-2">
              <div>
                <SectionTag dark>İletişim</SectionTag>
                <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                  Yarın değil, <span className="text-gradient">bugün</span> teslim edelim.
                </h2>
                <p className="mt-5 max-w-md text-lg text-white/60">
                  Gönderi hacminizi paylaşın, size özel fiyat teklifimizi aynı gün iletelim.
                </p>
                <ul className="mt-10 space-y-5">
                  {site.phone && <li>
                    <a href={site.phoneHref} className="flex items-center gap-4 text-white/80 transition hover:text-white">
                      <span className="grid size-11 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10"><Phone className="size-5" /></span>
                      <span className="font-semibold">{site.phone}</span>
                    </a>
                  </li>}
                  <li>
                    <a href={`mailto:${site.email}`} className="flex items-center gap-4 text-white/80 transition hover:text-white">
                      <span className="grid size-11 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10"><Mail className="size-5" /></span>
                      <span className="font-semibold">{site.email}</span>
                    </a>
                  </li>
                  <li className="flex items-center gap-4 text-white/80">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10"><Building className="size-5 text-white/70" /></span>
                    <span className="font-semibold">{site.companyTitle}</span>
                  </li>
                  {site.address && <li className="flex items-center gap-4 text-white/80">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10"><Pin className="size-5" /></span>
                    <span className="font-semibold">{site.address}</span>
                  </li>}
                </ul>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur sm:p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-ink/10 bg-paper">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo size="lg" />
            <p className="mt-4 font-bold text-ink">
              {site.companyTitle}
            </p>
            <p className="mt-2 text-ink/60">
              İstanbul geneli 34 ilçeye aynı gün kargo teslimatı. E-ticaretin hızına yetişen yeni nesil lojistik.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-ink/40">Menü</h3>
            <ul className="mt-4 space-y-2.5">
              {nav.map((n) => (
                <li key={n.href}><a href={n.href} className="font-medium text-ink/70 hover:text-brand">{n.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-ink/40">Hizmetler</h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.title}><a href="#hizmetler" className="font-medium text-ink/70 hover:text-brand">{s.title}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-ink/10 bg-ink text-white/55">
          <div className="mx-auto flex max-w-7xl items-center justify-center px-5 py-5 text-center text-sm">
            <p>
              Web Sitesi{" "}
              <a
                href="https://www.levareon.com.tr"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#a3f100] transition hover:brightness-125 hover:underline"
              >
                LevaReon
              </a>{" "}
              tarafından geliştirilmiştir | Tüm Hakları Saklıdır
            </p>
          </div>
        </div>

      </footer>

      {/* FLOATING WHATSAPP */}
      {site.whatsapp && (
        <aside
          aria-label="WhatsApp İletişim Hattı"
          className="fixed bottom-20 right-6 z-50 flex items-center gap-3 sm:bottom-24 sm:right-8"
        >
          <a
            href={whatsappLink("Merhaba, aynı gün teslimat hakkında bilgi almak istiyorum.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-2.5"
          >
            <span className="pointer-events-none hidden items-center gap-1.5 rounded-full border border-white/10 bg-ink/90 px-3.5 py-1.5 text-xs font-semibold text-white shadow-xl backdrop-blur-md transition-all duration-200 group-hover:scale-105 sm:inline-flex">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#25D366] opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-[#25D366]" />
              </span>
              WhatsApp Destek
            </span>

            <div className="relative grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-110 hover:bg-[#20ba59] hover:shadow-[0_10px_35px_rgba(37,211,102,0.65)] active:scale-95 sm:size-15">
              <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-25" />
              <WhatsApp className="size-8" />
            </div>
          </a>
        </aside>
      )}
    </>
  );
}
