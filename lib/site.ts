// Sitenin tüm iletişim ve marka bilgileri burada. Değiştirmek için sadece bu dosyayı düzenleyin.
export const site = {
  name: "Sameday Lojistik",
  companyTitle: "Sameday Lojistik Ticaret Limited Şirketi",
  domain: "samedaylojistik.com",
  url: "https://samedaylojistik.com",
  tagline: "İstanbul içi aynı gün teslimat",
  // Boş bırakılan alanlar sitede gösterilmez. Doldurunca otomatik görünür.
  phone: "0537 765 25 54",
  phoneHref: "tel:+905377652554",
  whatsapp: "905377652554",
  email: "samedaylojistik@gmail.com",
  address: "",
  cutoff: "12:00",
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
  { href: "#iletisim", label: "İletişim" },
];

export const districts = [
  "Ataşehir", "Avcılar", "Bağcılar", "Bahçelievler", "Bakırköy",
  "Başakşehir", "Bayrampaşa", "Beşiktaş", "Beykoz", "Beylikdüzü", "Beyoğlu", "Büyükçekmece",
  "Çekmeköy", "Esenler", "Esenyurt", "Eyüpsultan", "Fatih", "Gaziosmanpaşa",
  "Güngören", "Kadıköy", "Kağıthane", "Kartal", "Küçükçekmece", "Maltepe", "Pendik",
  "Sancaktepe", "Sarıyer", "Sultanbeyli", "Sultangazi", "Şişli", "Tuzla",
  "Ümraniye", "Üsküdar", "Zeytinburnu",
];


