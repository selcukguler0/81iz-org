export type Tx = {
  date: string;
  type: "in" | "out";
  amount: number;
  desc: string;
  target: string;
};

export const TRANSACTIONS: Tx[] = [
  { date: "2026-04-18", type: "in",  amount: 2500,  desc: "Aylık bireysel bağışlar toplamı", target: "Genel havuz · 17 bağışçı" },
  { date: "2026-04-12", type: "out", amount: 3200,  desc: "Nisan saha ziyareti · ulaşım",    target: "Ağrı · 5 okul" },
  { date: "2026-04-05", type: "out", amount: 1800,  desc: "Mentör platformu Zoom lisans yenileme", target: "Platform · 48 mentör" },
  { date: "2026-04-03", type: "in",  amount: 5000,  desc: "Boğaziçi KSİ kulüp bağışı",        target: "Kütüphane fonu" },
  { date: "2026-03-28", type: "out", amount: 8400,  desc: "Kütüphane kitap alımı · 2. parti", target: "Türkeli · Sağlıksuyu · Güvence" },
  { date: "2026-03-22", type: "in",  amount: 15000, desc: "Yıldız Vakfı çeyreklik transfer",   target: "Genel havuz" },
  { date: "2026-03-15", type: "out", amount: 2400,  desc: "Mart atölye materyalleri",          target: "Alakent · Taşlıçay" },
  { date: "2026-03-10", type: "out", amount: 4200,  desc: "Saha ekibi eğitim programı",        target: "Ankara · 12 gönüllü" },
  { date: "2026-02-25", type: "out", amount: 1600,  desc: "Doğubayazıt ofis kirası",           target: "Operasyon" },
  { date: "2026-02-20", type: "in",  amount: 3000,  desc: "E. Yılmaz kurumsal bağış",          target: "Muş pilot fonu" },
  { date: "2026-02-14", type: "out", amount: 5800,  desc: "Şubat saha ziyareti · ulaşım + konaklama", target: "Ağrı · 5 okul" },
  { date: "2026-02-08", type: "in",  amount: 4000,  desc: "Aylık bireysel bağışlar toplamı",   target: "Genel havuz · 23 bağışçı" },
  { date: "2026-01-30", type: "out", amount: 12000, desc: "Kütüphane açılışı · 5 okul kurulumu", target: "Tüm Ağrı okulları" },
  { date: "2026-01-22", type: "in",  amount: 6500,  desc: "Ocak bireysel bağışlar",            target: "Genel havuz · 34 bağışçı" },
  { date: "2026-01-10", type: "out", amount: 2200,  desc: "Platform geliştirme · freelance",   target: "Platform" },
  { date: "2025-11-28", type: "in",  amount: 60000, desc: "ACME A.Ş. 3 yıllık ilk dilim",      target: "Melek yatırımcı" },
  { date: "2025-11-14", type: "out", amount: 6000,  desc: "Platform ilk lansman + hosting",    target: "Platform" },
  { date: "2025-11-05", type: "out", amount: 4400,  desc: "Saha ekibi eğitimi · Van",          target: "Eğitim" },
  { date: "2025-09-20", type: "out", amount: 3800,  desc: "4 yeni okul · başlangıç materyali", target: "Türkeli · Taşlıçay · Sağlıksuyu · Güvence" },
  { date: "2025-08-15", type: "in",  amount: 8000,  desc: "Crowdfunding kampanya sonucu",      target: "Genel havuz · 51 bağışçı" },
  { date: "2025-07-08", type: "out", amount: 2400,  desc: "İlk saha ziyareti · Alakent Köyü",  target: "Alakent · 5 gönüllü" },
];

const MONTHS_SHORT = [
  "Oca", "Şub", "Mar", "Nis", "May", "Haz",
  "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara",
];
const MONTHS_LONG = [
  "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
  "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık",
];

export function fmtTL(n: number) {
  return "₺" + n.toLocaleString("tr-TR");
}

export function fmtDate(iso: string) {
  const [y, m, d] = iso.split("-");
  return `${d} ${MONTHS_SHORT[+m - 1]} ${y}`;
}

export function monthKey(iso: string) {
  const [y, m] = iso.split("-");
  return `${MONTHS_LONG[+m - 1]} ${y}`;
}

export function receiptNumber(t: Tx) {
  const sum = t.date.split("").reduce((a, c) => a + c.charCodeAt(0), 0) + t.amount;
  return "TX-" + Math.abs(sum).toString(16).toUpperCase().slice(0, 8);
}
