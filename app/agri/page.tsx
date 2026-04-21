import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import site from "../components/site.module.css";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "81iz — Ağrı Pilot Raporu",
  description:
    "Ağrı Doğubayazıt'ta 5 köy okulunda yürüttüğümüz pilot programın bir yıllık detaylı raporu: saha, mentör, bütçe ve sonuçlar.",
};

const SCHOOLS = [
  { num: "OKUL 01", name: "Alakent", students: 82, left: 28, top: 40 },
  { num: "OKUL 02", name: "Türkeli", students: 94, left: 42, top: 62 },
  { num: "OKUL 03", name: "Taşlıçay", students: 71, left: 62, top: 38 },
  { num: "OKUL 04", name: "Sağlıksuyu", students: 88, left: 72, top: 66 },
  { num: "OKUL 05", name: "Güvence", students: 77, left: 34, top: 76 },
] as const;

const TIMELINE = [
  {
    major: true,
    date: "Tem 2025 · Kickoff",
    title: "İlk saha ziyareti — Alakent Köyü",
    body: "5 üniversite gönüllüsü ile ilk ziyaret. Okul müdürü ve veli toplantısı yapıldı; 47 çocuk kayıt altına alındı.",
  },
  {
    major: false,
    date: "Ağu 2025",
    title: "Mentör ağı 12 öğretmenle kuruldu",
    body: "Türkiye'nin 8 ilinden gönüllü öğretmenler çevrimiçi platforma davet edildi. İlk eşleştirmeler yapıldı.",
  },
  {
    major: false,
    date: "Eyl 2025",
    title: "Diğer 4 okul programa dahil oldu",
    body: "Eylül itibariyle 5 köy okulu aktif oldu. 250+ çocuğa erişim sağlandı.",
  },
  {
    major: true,
    date: "Kas 2025 · Fon",
    title: "İlk sosyal melek yatırımcı anlaşması — ₺60.000",
    body: "Kurumsal bağışçımız 3 yıllık destek sözü verdi. Şeffaflık dashboardu canlıya alındı.",
  },
  {
    major: false,
    date: "Oca 2026",
    title: "Okul kütüphaneleri kuruldu",
    body: "5 okulun tamamında toplam 2.400+ kitap içeren kütüphane birimleri açıldı.",
  },
  {
    major: false,
    date: "Nis 2026",
    title: "412 çocuğa ulaşıldı · 250+ gönüllü",
    body: "Pilot sürecinin ilk yıllık hedefi aşıldı. 2. il hazırlıkları başladı.",
  },
  {
    major: true,
    date: "Haz 2026 · Sıradaki",
    title: "Muş pilotu hazırlığı + şirketleşme",
    body: "Muş için saha araştırması başladı. 81iz, gelir modeli üreten bir sosyal şirkete dönüşüm sürecine giriyor.",
  },
] as const;

const BUDGET = [
  { pct: 42, color: "var(--teal)", textColor: "white", label: "Saha operasyonu (ulaşım, atölye, materyal)", amt: "₺50.400" },
  { pct: 23, color: "var(--teal-600)", textColor: "white", label: "Kütüphane ve eğitim materyali", amt: "₺27.600" },
  { pct: 22, color: "var(--saffron)", textColor: "var(--ink)", label: "Gönüllü koordinasyon ve platform", amt: "₺26.400" },
  { pct: 8, color: "var(--saffron-600)", textColor: "white", label: "Mentör destek ve eğitim", amt: "₺9.600" },
  { pct: 5, color: "var(--ink-3)", textColor: "white", label: "Operasyonel giderler", amt: "₺6.000" },
] as const;

export default function AgriPage() {
  return (
    <>
      <SiteNav active="agri" />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <div className={styles.breadcrumb}>
            <Link href="/">81iz</Link>
            <span className={styles.sep}>/</span>
            <span>Pilot Program</span>
            <span className={styles.sep}>/</span>
            <span className={styles.here}>Ağrı</span>
          </div>
          <h1 className={styles.heroH1}>
            Ağrı&apos;da <em>başladık</em>,
            <br />
            burada öğreniyoruz.
          </h1>
          <p className={styles.heroLede}>
            İlk pilot ilimiz Doğubayazıt — Türkiye&apos;de okullaşma oranının en
            düşük olduğu bölgelerden biri. 2025 yazında 5 köy okulunda başlayan
            programın bir yıllık detaylı raporu.
          </p>
          <div className={styles.pilotMeta}>
            <div>
              <div className={styles.pmL}>Başlangıç</div>
              <div className={styles.pmV}>Temmuz 2025</div>
            </div>
            <div>
              <div className={styles.pmL}>Konum</div>
              <div className={styles.pmV}>Ağrı · Doğubayazıt</div>
            </div>
            <div>
              <div className={styles.pmL}>Durum</div>
              <div className={`${styles.pmV} ${styles.pmVTeal}`}>● Aktif Pilot</div>
            </div>
            <div>
              <div className={styles.pmL}>Sonraki il</div>
              <div className={`${styles.pmV} ${styles.pmVMuted}`}>Muş (2026 Q4)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Ağrı */}
      <section>
        <div className={styles.wrap}>
          <div className={styles.split}>
            <div
              className={styles.phImg}
              data-label={"SAHA · AĞRI\nDoğubayazıt\nKöy okulu"}
            />
            <div>
              <div className={styles.eyebrow}>Neden Ağrı?</div>
              <h2 className={styles.splitH2}>
                Çünkü en büyük eşitsizlik, görünmeyen yerdedir.
              </h2>
              <p className={styles.splitP}>
                TÜİK ve MEB verilerine göre Ağrı, Türkiye&apos;de kız
                çocuklarının orta öğretime devam oranının en düşük olduğu 5
                ilden biri. Doğubayazıt ilçesinde köy okullarındaki kütüphane
                kaynağı, öğretmen yoğunluğu ve dijital altyapı ülke
                ortalamasının yarısı seviyesinde.
              </p>
              <p className={styles.splitP}>
                81iz olarak, değişimin en meşru başlangıç noktasının en büyük
                farkın olduğu yer olduğuna inandık. Pilot için Ağrı&apos;yı
                seçtik.
              </p>
              <div className={styles.dataGrid}>
                <div className={styles.dgCard}>
                  <div className={styles.dgV}>%42</div>
                  <div className={styles.dgL}>
                    Kız çocuğu lise tamamlama oranı (TR ort. %73)
                  </div>
                </div>
                <div className={styles.dgCard}>
                  <div className={styles.dgV}>1/8</div>
                  <div className={styles.dgL}>
                    Köy okulunda kütüphane (TR ort. 1/3)
                  </div>
                </div>
                <div className={`${styles.dgCard} ${styles.dgCardAccent}`}>
                  <div className={styles.dgV}>2023</div>
                  <div className={styles.dgL}>
                    Saha araştırmasına başladığımız yıl
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Schools map */}
          <div className={styles.sectionHead}>
            <div>
              <div className={styles.eyebrow}>Aktif Saha Noktaları</div>
              <h2 className={styles.sectionH2}>5 köy okulu, bir bölge.</h2>
            </div>
            <p className={styles.sectionLede}>
              Doğubayazıt ilçesi sınırları içinde, merkeze 12–38 km uzaklıkta 5
              köy okuluyla çalışıyoruz. Her okul haftada en az bir saha ziyareti
              ve üç çevrimiçi mentor oturumuyla destekleniyor.
            </p>
          </div>
          <div className={styles.agriMap}>
            <span className={styles.agriMapLabel}>
              Ağrı · Doğubayazıt · 1:250.000
            </span>
            <svg
              className={styles.agriMapSvg}
              viewBox="0 0 1000 500"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                d="M -50 380 Q 100 320, 300 350 T 600 330 T 1050 360 L 1050 510 L -50 510 Z"
                fill="#E3DCC7"
                opacity="0.7"
              />
              <path
                d="M 100 200 Q 350 140, 500 220 T 850 180"
                fill="none"
                stroke="#D3CBB4"
                strokeWidth="1.5"
                strokeDasharray="3 6"
              />
              <circle
                cx="500"
                cy="280"
                r="60"
                fill="#FDF8EF"
                stroke="#D3CBB4"
                strokeWidth="1.5"
              />
              <text
                x="500"
                y="285"
                textAnchor="middle"
                fontFamily="JetBrains Mono"
                fontSize="11"
                fill="#5A6F6B"
              >
                DOĞUBAYAZIT
              </text>
              <text
                x="500"
                y="298"
                textAnchor="middle"
                fontFamily="JetBrains Mono"
                fontSize="9"
                fill="#8A9A96"
              >
                Merkez
              </text>
              <path
                d="M 150 250 L 180 200 L 210 250 Z"
                fill="#C9E2DE"
                opacity="0.4"
                stroke="#0F766E"
                strokeWidth="0.5"
              />
              <text
                x="180"
                y="195"
                textAnchor="middle"
                fontFamily="JetBrains Mono"
                fontSize="8"
                fill="#5A6F6B"
              >
                AĞRI DAĞI
              </text>
            </svg>
            {SCHOOLS.map((s) => (
              <div
                key={s.name}
                className={styles.agriDot}
                style={{ left: `${s.left}%`, top: `${s.top}%` }}
                data-name={`${s.name} Köyü İlkokulu`}
              />
            ))}
          </div>
          <div className={styles.schools}>
            {SCHOOLS.map((s) => (
              <div key={s.name} className={styles.school}>
                <div className={styles.schoolNum}>{s.num}</div>
                <h5 className={styles.schoolH5}>{s.name}</h5>
                <div className={styles.schoolSt}>{s.students} öğrenci</div>
              </div>
            ))}
          </div>

          {/* Quote block */}
          <div className={styles.quoteBlock}>
            <div>
              <div className={styles.quoteMark}>&ldquo;</div>
              <h2 className={styles.quoteH2}>
                İlk defa bir kitabı sadece benim için okuyan biri oldu. Şimdi
                okula daha erken gelmeye çalışıyorum — çünkü artık neden
                geldiğimi biliyorum.
              </h2>
              <div className={styles.quoteAuthor}>
                — Zeynep, 11 · Alakent İlkokulu 5. Sınıf
              </div>
            </div>
            <div className={styles.quoteStats}>
              <div className={styles.qStat}>
                <div className={styles.qStatN}>412</div>
                <div className={styles.qStatL}>
                  Pilot süresince düzenli destek alan çocuk
                </div>
              </div>
              <div className={styles.qStat}>
                <div className={styles.qStatN}>%61</div>
                <div className={styles.qStatL}>Destek alan kız çocuk oranı</div>
              </div>
              <div className={styles.qStat}>
                <div className={styles.qStatN}>%94</div>
                <div className={styles.qStatL}>
                  Program sonunda okula devam oranı
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className={styles.sectionHead}>
            <div>
              <div className={styles.eyebrow}>Pilot Zaman Çizelgesi</div>
              <h2 className={styles.sectionH2}>On iki ayda on iki adım.</h2>
            </div>
            <p className={styles.sectionLede}>
              Saha araştırmasından şirketleşme kararına kadar, Ağrı pilotunun
              tüm kilometre taşları.
            </p>
          </div>
          <div className={styles.timeline}>
            {TIMELINE.map((e) => (
              <div
                key={e.date}
                className={`${styles.tlEvent} ${e.major ? styles.tlEventMajor : ""}`}
              >
                <div className={styles.tlDate}>{e.date}</div>
                <h4 className={styles.tlH4}>{e.title}</h4>
                <p className={styles.tlP}>{e.body}</p>
              </div>
            ))}
          </div>

          {/* Budget */}
          <div className={styles.budgetSection}>
            <div className={styles.sectionHead}>
              <div>
                <div className={styles.eyebrow}>
                  Bütçe Dağılımı · ₺120.000
                </div>
                <h2 className={styles.sectionH2}>Her liranın izini sürüyoruz.</h2>
              </div>
              <p className={styles.sectionLede}>
                Pilot süresince toplanan ₺120.000 fonun, %87&apos;si doğrudan
                sahaya aktarıldı. Tüm kalemler şeffaflık panosunda aylık olarak
                raporlanıyor.
              </p>
            </div>
            <div className={styles.budgetBar}>
              {BUDGET.map((b) => (
                <div
                  key={b.label}
                  className={styles.budgetSeg}
                  style={{
                    background: b.color,
                    color: b.textColor,
                    flex: b.pct,
                  }}
                >
                  {b.pct}%
                </div>
              ))}
            </div>
            <div className={styles.budgetLegend}>
              {BUDGET.map((b) => (
                <div key={b.label} className={styles.budgetItem}>
                  <span
                    className={styles.budgetSq}
                    style={{ background: b.color }}
                  />
                  <span>{b.label}</span>
                  <span className={styles.budgetAmt}>{b.amt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Outcomes */}
          <div className={`${styles.split} ${styles.splitReverse}`}>
            <div>
              <div className={styles.eyebrow}>Bir Yıllık Çıktı</div>
              <h2 className={styles.splitH2}>
                Sonuç: ölçülebilir, tekrar edilebilir, büyütülebilir.
              </h2>
              <p className={styles.splitP}>
                Pilotun en büyük başarısı sayılardan çok, modelin tekrar
                edilebilir olduğunu kanıtlaması. 2026 Q4&apos;te başlayacak Muş
                pilotu için artık bir oyun kitabımız var.
              </p>
              <div className={styles.dataGrid}>
                <div className={styles.dgCard}>
                  <div className={styles.dgV}>5/5</div>
                  <div className={styles.dgL}>Hedeflenen okul sayısına ulaşıldı</div>
                  <div className={styles.dgTrend}>↑ Hedef %100</div>
                </div>
                <div className={styles.dgCard}>
                  <div className={styles.dgV}>412</div>
                  <div className={styles.dgL}>Destek alan çocuk</div>
                  <div className={styles.dgTrend}>↑ Hedefin %103&apos;ü</div>
                </div>
                <div className={`${styles.dgCard} ${styles.dgCardAccent}`}>
                  <div className={styles.dgV}>%94</div>
                  <div className={styles.dgL}>
                    Okula devam oranı (başlangıç: %76)
                  </div>
                  <div className={`${styles.dgTrend} ${styles.dgTrendSaffron}`}>
                    ↑ 18 puan artış
                  </div>
                </div>
                <div className={styles.dgCard}>
                  <div className={styles.dgV}>2.4K</div>
                  <div className={styles.dgL}>Kütüphanelere eklenen kitap</div>
                  <div className={styles.dgTrend}>↑ 5 okula dağıtıldı</div>
                </div>
                <div className={styles.dgCard}>
                  <div className={styles.dgV}>12</div>
                  <div className={styles.dgL}>
                    Pilot süresince aylık saha ziyareti
                  </div>
                  <div className={styles.dgTrend}>Hedef: 10 / ay</div>
                </div>
                <div className={`${styles.dgCard} ${styles.dgCardAccent}`}>
                  <div className={styles.dgV}>%87</div>
                  <div className={styles.dgL}>
                    Fonun doğrudan sahaya aktarılma oranı
                  </div>
                  <div className={`${styles.dgTrend} ${styles.dgTrendSaffron}`}>
                    Sektör ort. %68
                  </div>
                </div>
              </div>
            </div>
            <div
              className={styles.phImg}
              data-label={"SAHA · AĞRI\nKütüphane açılışı\nMart 2026"}
            />
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className={styles.footerCta}>
        <div className={styles.wrap}>
          <div className={styles.eyebrow}>
            Sıradaki il: <span style={{ color: "var(--ink)" }}>Muş (2026 Q4)</span>
          </div>
          <h2 className={styles.footerCtaH2}>
            Ağrı&apos;da öğrendik,
            <br />
            <em>Muş&apos;ta</em> uyguluyoruz.
          </h2>
          <p className={styles.footerCtaP}>
            Muş pilotu için saha araştırması başladı. Bir sonraki ilin kurulumu
            için 8 hafta, ₺80.000 fona ihtiyacımız var.
          </p>
          <div className={styles.footerCtaActions}>
            <Link
              href="/katil?rol=bagis"
              className={`${site.btn} ${site.btnPrimary}`}
            >
              Muş Pilotuna Bağış Yap →
            </Link>
            <Link
              href="/seffaflik"
              className={`${site.btn} ${site.btnOutline}`}
            >
              Şeffaflık Raporunu Gör
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
