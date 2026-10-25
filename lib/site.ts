// Sitenin tüm iletişim ve marka bilgileri burada. Değiştirmek için sadece bu dosyayı düzenleyin.
export const site = {
  name: "Sameday Lojistik",
  domain: "samedaylojistik.com",
  url: "https://samedaylojistik.com",
  tagline: "İstanbul içi aynı gün teslimat",
  // Boş bırakılan alanlar sitede gösterilmez. Doldurunca otomatik görünür.
  phone: "", // örn. "0 5xx xxx xx xx"
  phoneHref: "", // örn. "tel:+905xxxxxxxxx"
  whatsapp: "", // örn. "905xxxxxxxxx" (başında + olmadan)
  email: "info@samedaylojistik.com",
  address: "",
  cutoff: "14:00",
  social: {
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    x: "https://x.com/",
  },
};

export const whatsappLink = (text?: string) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const nav = [
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#nasil-calisir", label: "Nasıl Çalışır" },
  { href: "#entegrasyon", label: "Entegrasyon" },
  { href: "#bolgeler", label: "Bölgeler" },
  { href: "#sss", label: "SSS" },
];

export const districts = [
  "Adalar", "Arnavutköy", "Ataşehir", "Avcılar", "Bağcılar", "Bahçelievler", "Bakırköy",
  "Başakşehir", "Bayrampaşa", "Beşiktaş", "Beykoz", "Beylikdüzü", "Beyoğlu", "Büyükçekmece",
  "Çatalca", "Çekmeköy", "Esenler", "Esenyurt", "Eyüpsultan", "Fatih", "Gaziosmanpaşa",
  "Güngören", "Kadıköy", "Kağıthane", "Kartal", "Küçükçekmece", "Maltepe", "Pendik",
  "Sancaktepe", "Sarıyer", "Silivri", "Sultanbeyli", "Sultangazi", "Şile", "Şişli", "Tuzla",
  "Ümraniye", "Üsküdar", "Zeytinburnu",
];
