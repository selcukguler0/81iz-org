"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import site from "../components/site.module.css";
import styles from "./page.module.css";

type Role = "bagis" | "yatirimci" | "mentor" | "basin" | "gonullu";
type Freq = "aylik" | "tek" | "3ay" | "yillik";

const ROLES: { key: Role; num: string; title: string; sub: string }[] = [
  { key: "bagis",      num: "01 / BAĞIŞÇI",  title: "Bağış Yap",   sub: "Bireysel · tek seferlik veya aylık" },
  { key: "yatirimci",  num: "02 / YATIRIMCI", title: "Sosyal Melek", sub: "Kurumsal ortak · ₺25.000+" },
  { key: "mentor",     num: "03 / MENTÖR",    title: "Mentör Ol",    sub: "Gönüllü öğretmen · 2 saat/hafta" },
  { key: "basin",      num: "04 / BASIN",     title: "Basın & Medya", sub: "Basın kiti · İletişim" },
];

const FREQ_LABEL: Record<Freq, string> = {
  aylik: "Aylık",
  tek: "Tek seferlik",
  "3ay": "Her 3 ayda",
  yillik: "Yıllık taahhüt",
};

const FREQ_MULT: Record<Freq, number> = {
  aylik: 12,
  tek: 1,
  "3ay": 4,
  yillik: 1,
};

const PER_CHILD = 290;

function fmtTL(n: number) {
  return "₺" + n.toLocaleString("tr-TR");
}

function impactMessage(yearly: number, children: number) {
  if (yearly < 500) {
    return (
      <>
        Bu bağış <strong>bir çocuğa</strong> 2 aylık kütüphane kitap aboneliği
        veya 3 saha ziyaretinin ulaşımını karşılar.
      </>
    );
  }
  if (yearly < 3000) {
    return (
      <>
        Bu bağış{" "}
        <strong>bir yıl boyunca {children} çocuğa</strong> düzenli mentörlük
        desteği, 1 okul için kütüphane materyali ve 2 saha ziyaretinin
        ulaşımını karşılar.
      </>
    );
  }
  if (yearly < 30000) {
    return (
      <>
        Bu destek <strong>{children} çocuğa</strong> yıllık eğitim kaynağı, bir
        okul için yeni kütüphane kurulumu ve 6 ay saha operasyonunu karşılar.
      </>
    );
  }
  return (
    <>
      Bu yatırım <strong>bir köy okulunun</strong> 1 yıllık saha + mentörlük +
      materyal bütçesini tek başına karşılar. {children} çocuğun eğitim izini
      değiştirir.
    </>
  );
}

export default function KatilForm() {
  const params = useSearchParams();
  const initialRole = (params.get("rol") as Role | null) ?? "bagis";

  const [role, setRole] = useState<Role>(
    ROLES.some((r) => r.key === initialRole) || initialRole === "gonullu"
      ? initialRole
      : "bagis"
  );
  const [freq, setFreq] = useState<Freq>("aylik");
  const [amount, setAmount] = useState(150);
  const [investorAmt, setInvestorAmt] = useState(60000);
  const [customAmt, setCustomAmt] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const p = params.get("rol") as Role | null;
    if (!p) return;
    if (ROLES.some((r) => r.key === p) || p === "gonullu") setRole(p);
  }, [params]);

  // Gönüllü is a pseudo-role that maps to mentor panel (handoff didn't ship a dedicated gönüllü panel).
  const activePanel: Role = role === "gonullu" ? "mentor" : role;

  const showSummary = activePanel === "bagis" || activePanel === "yatirimci";

  const { yearly, children, freqLabel, displayAmount } = useMemo(() => {
    if (activePanel === "yatirimci") {
      const yr = investorAmt;
      return {
        yearly: yr,
        children: Math.max(1, Math.round(yr / PER_CHILD)),
        freqLabel: "Yıllık taahhüt",
        displayAmount: investorAmt,
      };
    }
    const yr = amount * FREQ_MULT[freq];
    return {
      yearly: yr,
      children: Math.max(1, Math.round(yr / PER_CHILD)),
      freqLabel: FREQ_LABEL[freq],
      displayAmount: amount,
    };
  }, [activePanel, amount, freq, investorAmt]);

  const amtPreset = (v: number) => {
    setAmount(v);
    setCustomAmt("");
  };
  const onCustom = (v: string) => {
    setCustomAmt(v);
    const n = parseInt(v, 10);
    if (n > 0) setAmount(n);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero + tabs */}
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <div className={styles.eyebrow}>Ekosisteme Katıl</div>
          <h1 className={styles.heroH1}>
            Bir <em>iz</em> bırakmanın
            <br />
            dört yolu var.
          </h1>
          <p className={styles.heroLede}>
            Bağışçı, mentör, saha gönüllüsü ya da sosyal melek yatırımcı — 81iz
            ekosisteminde kendine uygun yolu seç.
          </p>

          <div className={styles.roleTabs}>
            {ROLES.map((r) => (
              <button
                key={r.key}
                type="button"
                className={`${styles.roleTab} ${activePanel === r.key ? styles.active : ""}`}
                onClick={() => {
                  setRole(r.key);
                  setSubmitted(false);
                }}
              >
                <span className={styles.roleTabNum}>{r.num}</span>
                <span className={styles.roleTabT}>{r.title}</span>
                <span className={styles.roleTabS}>{r.sub}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Form + summary */}
      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.grid}>
            <div className={styles.formCard}>
              {submitted ? (
                <div className={styles.success}>
                  <div className={styles.successCheck}>
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      aria-hidden
                    >
                      <path
                        d="M4 12l5 5L20 6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h2 className={styles.successH2}>Teşekkürler.</h2>
                  <p className={styles.successP}>
                    Mesajını aldık. 48 saat içinde sana e-postayla dönüş
                    yapacağız. Bu süreçte Ağrı pilotundaki en güncel
                    gelişmeleri inceleyebilirsin.
                  </p>
                  <Link
                    href="/agri"
                    className={`${site.btn} ${site.btnOutline}`}
                  >
                    Ağrı Pilot Raporunu Gör →
                  </Link>
                </div>
              ) : activePanel === "bagis" ? (
                <form onSubmit={submit}>
                  <h2 className={styles.formH2}>Düzenli bir iz bırak.</h2>
                  <p className={styles.formSub}>
                    Her bağış doğrudan sahaya akar. Bağışının hangi köy
                    okuluna, hangi kaleme gittiğini aylık raporla takip
                    edersin.
                  </p>

                  <div className={styles.row}>
                    <label>Sıklık</label>
                    <div className={styles.freqSeg}>
                      {(["aylik", "tek", "3ay"] as Freq[]).map((f) => (
                        <button
                          key={f}
                          type="button"
                          className={freq === f ? styles.active : ""}
                          onClick={() => setFreq(f)}
                        >
                          {f === "aylik" ? "Aylık" : f === "tek" ? "Tek Seferlik" : "3 Aylık"}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className={styles.row}>
                    <label>Tutar (₺)</label>
                    <div className={styles.amountGrid}>
                      {[50, 150, 500, 1000].map((v) => (
                        <button
                          key={v}
                          type="button"
                          className={`${styles.amtBtn} ${amount === v && !customAmt ? styles.active : ""}`}
                          onClick={() => amtPreset(v)}
                        >
                          ₺{v.toLocaleString("tr-TR")}
                        </button>
                      ))}
                    </div>
                    <input
                      type="number"
                      value={customAmt}
                      onChange={(e) => onCustom(e.target.value)}
                      placeholder="Veya özel tutar gir..."
                      className={styles.customAmt}
                      min={1}
                    />
                  </div>

                  <div className={styles.row}>
                    <label>Özel bir okula yönlendir (opsiyonel)</label>
                    <select defaultValue="">
                      <option value="">
                        Genel havuz — en çok ihtiyaç duyulan yere
                      </option>
                      <option>Alakent Köyü İlkokulu</option>
                      <option>Türkeli Köyü İlkokulu</option>
                      <option>Taşlıçay İlkokulu</option>
                      <option>Sağlıksuyu İlkokulu</option>
                      <option>Güvence Köyü İlkokulu</option>
                      <option>Muş Pilot Fonu (2026 Q4)</option>
                    </select>
                  </div>

                  <div className={`${styles.row} ${styles.rowCols}`}>
                    <div>
                      <label>Ad Soyad</label>
                      <input placeholder="Adın" />
                    </div>
                    <div>
                      <label>E-posta</label>
                      <input type="email" placeholder="ornek@mail.com" />
                    </div>
                  </div>

                  <div className={styles.row}>
                    <label>Tercihler</label>
                    <div className={styles.checkList}>
                      <label className={styles.checkRow}>
                        <input type="checkbox" defaultChecked />
                        <div>
                          <div className={styles.checkT}>
                            Şeffaflık raporlarını al
                          </div>
                          <div className={styles.checkS}>
                            Her ay e-postanla, bağışının hangi kaleme gittiğini
                            gör.
                          </div>
                        </div>
                      </label>
                      <label className={styles.checkRow}>
                        <input type="checkbox" />
                        <div>
                          <div className={styles.checkT}>Anonim bağışçı ol</div>
                          <div className={styles.checkS}>
                            Bağışçı duvarında ismin görünmesin.
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>

                  <button type="submit" className={styles.submit}>
                    Güvenli Ödemeye Geç →
                  </button>
                  <div className={styles.trustRow}>
                    <span>🔒 SSL</span>
                    <span>·</span>
                    <span>iyzico</span>
                    <span>·</span>
                    <span>KVKK Uyumlu</span>
                  </div>
                </form>
              ) : activePanel === "yatirimci" ? (
                <form onSubmit={submit}>
                  <h2 className={styles.formH2}>Bir ilin hikayesine ortak ol.</h2>
                  <p className={styles.formSub}>
                    Sosyal melek yatırımcılarımız, çeyreklik raporlar, saha
                    ziyareti davetleri ve marka görünürlüğü kazanır. Yıllık
                    taahhüt ₺25.000&apos;den başlar.
                  </p>
                  <div className={`${styles.row} ${styles.rowCols}`}>
                    <div>
                      <label>Ad Soyad</label>
                      <input placeholder="Adın" />
                    </div>
                    <div>
                      <label>Unvan / Şirket</label>
                      <input placeholder="CEO · ACME A.Ş." />
                    </div>
                  </div>
                  <div className={`${styles.row} ${styles.rowCols}`}>
                    <div>
                      <label>E-posta</label>
                      <input type="email" placeholder="ornek@mail.com" />
                    </div>
                    <div>
                      <label>Telefon</label>
                      <input type="tel" placeholder="+90" />
                    </div>
                  </div>
                  <div className={styles.row}>
                    <label>Düşündüğün taahhüt</label>
                    <div className={styles.amountGrid}>
                      {[
                        { v: 25000,  l: "₺25K" },
                        { v: 60000,  l: "₺60K" },
                        { v: 120000, l: "₺120K" },
                        { v: 0,      l: "Özel" },
                      ].map(({ v, l }) => (
                        <button
                          key={l}
                          type="button"
                          className={`${styles.amtBtn} ${investorAmt === v ? styles.active : ""}`}
                          onClick={() => setInvestorAmt(v)}
                        >
                          {l}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className={styles.row}>
                    <label>İlgilendiğin alan</label>
                    <select defaultValue="Tüm ekosistem">
                      <option>Tüm ekosistem</option>
                      <option>İl sponsorluğu (1 il · 3 yıl)</option>
                      <option>Okul sponsorluğu (1 okul · 1 yıl)</option>
                      <option>Kütüphane / materyal fonu</option>
                      <option>Teknoloji platformu geliştirme</option>
                    </select>
                  </div>
                  <div className={styles.row}>
                    <label>Mesaj (opsiyonel)</label>
                    <textarea placeholder="Aklındaki soru, özel talep veya toplantı istediğin tarih..." />
                  </div>
                  <button type="submit" className={styles.submit}>
                    Randevu Talep Et →
                  </button>
                  <div className={styles.trustRow}>
                    <span>Kurucu 48 saat içinde seninle iletişime geçer</span>
                  </div>
                </form>
              ) : activePanel === "mentor" ? (
                <form onSubmit={submit}>
                  <h2 className={styles.formH2}>Bir çocuğa yol arkadaşı ol.</h2>
                  <p className={styles.formSub}>
                    Haftada 2 saatini bir köy okulundaki çocukla paylaşarak
                    81iz mentör ağına katıl. Çevrimiçi ya da saha — sana uygun
                    olanı seç.
                  </p>
                  <div className={`${styles.row} ${styles.rowCols}`}>
                    <div>
                      <label>Ad Soyad</label>
                      <input placeholder="Adın" />
                    </div>
                    <div>
                      <label>E-posta</label>
                      <input type="email" placeholder="ornek@mail.com" />
                    </div>
                  </div>
                  <div className={`${styles.row} ${styles.rowCols}`}>
                    <div>
                      <label>Branş</label>
                      <select defaultValue="Sınıf Öğretmeni">
                        <option>Sınıf Öğretmeni</option>
                        <option>Türkçe / Edebiyat</option>
                        <option>Matematik</option>
                        <option>Fen Bilimleri</option>
                        <option>İngilizce</option>
                        <option>Görsel Sanatlar / Müzik</option>
                        <option>Diğer</option>
                      </select>
                    </div>
                    <div>
                      <label>Mesleki Deneyim</label>
                      <select defaultValue="1–5 yıl">
                        <option>1–5 yıl</option>
                        <option>5–15 yıl</option>
                        <option>15+ yıl</option>
                        <option>Emekli</option>
                      </select>
                    </div>
                  </div>
                  <div className={styles.row}>
                    <label>Nasıl katkı sağlamak istersin?</label>
                    <div className={styles.checkList}>
                      <label className={styles.checkRow}>
                        <input type="checkbox" defaultChecked />
                        <div>
                          <div className={styles.checkT}>Çevrimiçi mentörlük</div>
                          <div className={styles.checkS}>
                            Haftada 1–2 saat video görüşme
                          </div>
                        </div>
                      </label>
                      <label className={styles.checkRow}>
                        <input type="checkbox" />
                        <div>
                          <div className={styles.checkT}>Saha ziyareti</div>
                          <div className={styles.checkS}>
                            3 ayda 1 köy okuluna ziyaret (ulaşım karşılanır)
                          </div>
                        </div>
                      </label>
                      <label className={styles.checkRow}>
                        <input type="checkbox" />
                        <div>
                          <div className={styles.checkT}>Materyal hazırlığı</div>
                          <div className={styles.checkS}>
                            Ders içerikleri ve atölye tasarımı
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                  <button type="submit" className={styles.submit}>
                    Başvuruyu Gönder →
                  </button>
                </form>
              ) : (
                /* BASIN */
                <div>
                  <h2 className={styles.formH2}>
                    Basın ve medya için kaynaklar.
                  </h2>
                  <p className={styles.formSub}>
                    Röportaj, haber, etkinlik daveti ya da basın kiti için
                    aşağıdaki kaynakları kullanabilir veya direkt iletişime
                    geçebilirsin.
                  </p>

                  <div className={styles.pressLinks}>
                    <a
                      className={styles.pressLink}
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      <div>
                        <div className={styles.pressN}>Basın Kiti (ZIP · 42 MB)</div>
                        <div className={styles.pressD}>
                          Logolar, yüksek çözünürlük görseller, PDF broşür
                        </div>
                      </div>
                      <span className={styles.pressArrow}>↓</span>
                    </a>
                    <a
                      className={styles.pressLink}
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      <div>
                        <div className={styles.pressN}>2025–2026 Etki Raporu (PDF)</div>
                        <div className={styles.pressD}>
                          18 sayfa · Ağrı pilot detayları
                        </div>
                      </div>
                      <span className={styles.pressArrow}>↓</span>
                    </a>
                    <a
                      className={styles.pressLink}
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      <div>
                        <div className={styles.pressN}>Kurucu Bio (PDF)</div>
                        <div className={styles.pressD}>
                          Kısa biyografi · Yüksek çöz. portre
                        </div>
                      </div>
                      <span className={styles.pressArrow}>↓</span>
                    </a>
                    <a
                      className={styles.pressLink}
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      <div>
                        <div className={styles.pressN}>Saha Görselleri (Drive)</div>
                        <div className={styles.pressD}>
                          120+ telif-sız saha fotoğrafı
                        </div>
                      </div>
                      <span className={styles.pressArrow}>↗</span>
                    </a>
                  </div>

                  <form onSubmit={submit} className={styles.basinDivider}>
                    <h3 className={styles.basinH3}>
                      Ya da doğrudan iletişime geç
                    </h3>
                    <div className={`${styles.row} ${styles.rowCols}`}>
                      <div>
                        <label>Ad Soyad</label>
                        <input placeholder="Adın" />
                      </div>
                      <div>
                        <label>Yayın / Kurum</label>
                        <input placeholder="Gazete / dergi / kanal" />
                      </div>
                    </div>
                    <div className={`${styles.row} ${styles.rowCols}`}>
                      <div>
                        <label>E-posta</label>
                        <input type="email" />
                      </div>
                      <div>
                        <label>Telefon</label>
                        <input type="tel" />
                      </div>
                    </div>
                    <div className={styles.row}>
                      <label>Talep türü</label>
                      <select defaultValue="Röportaj / söyleşi">
                        <option>Röportaj / söyleşi</option>
                        <option>Haber / makale</option>
                        <option>Saha ziyareti daveti</option>
                        <option>Etkinlik konuşmacı daveti</option>
                        <option>Diğer</option>
                      </select>
                    </div>
                    <button type="submit" className={styles.submit}>
                      Basın Talebini Gönder →
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Summary */}
            {showSummary && !submitted && (
              <div className={styles.summary}>
                <h3 className={styles.summaryH3}>
                  {activePanel === "yatirimci" ? "Yatırımının İzi" : "Bağışının İzi"}
                </h3>
                <div className={styles.summaryRow}>
                  <span className="l">Tutar</span>
                  <span className="v">
                    {activePanel === "yatirimci" && investorAmt === 0
                      ? "Özel"
                      : fmtTL(displayAmount)}
                  </span>
                </div>
                <div className={styles.summaryRow}>
                  <span className="l">Sıklık</span>
                  <span className="v">{freqLabel}</span>
                </div>
                <div className={styles.summaryRow}>
                  <span className="l">Yıllık toplam taahhüt</span>
                  <span className="v">
                    {activePanel === "yatirimci" && investorAmt === 0
                      ? "—"
                      : fmtTL(yearly)}
                  </span>
                </div>
                <div className={`${styles.summaryRow} ${styles.summaryTotal}`}>
                  <span className="l">Etki</span>
                  <span className="v">
                    {activePanel === "yatirimci" && investorAmt === 0
                      ? "—"
                      : `${children} çocuk`}
                  </span>
                </div>

                <div className={styles.impact}>
                  {activePanel === "yatirimci" && investorAmt === 0
                    ? "Özel taahhüt tutarını paylaşırsan, etki projeksiyonunu sana özel olarak hesaplayıp gönderiyoruz."
                    : impactMessage(yearly, children)}
                </div>

                <div className={styles.summaryFoot}>
                  <div>↳ %87 doğrudan sahaya</div>
                  <div>↳ Aylık e-posta raporu</div>
                  <div>↳ İstediğin zaman iptal</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
