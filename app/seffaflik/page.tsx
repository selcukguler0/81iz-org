import type { Metadata } from "next";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import site from "../components/site.module.css";
import styles from "./page.module.css";
import SeffaflikClient from "./SeffaflikClient";

export const metadata: Metadata = {
  title: "81iz — Şeffaflık Raporu",
  description:
    "81iz'e yapılan her bağışın izlenebildiği şeffaflık raporu: gelir-gider zaman çizelgesi, aylık mutabakat, denetim süreci ve bağışçı duvarı.",
};

const DONORS = [
  { name: "★ ACME A.Ş.", amt: "₺60K", melek: true },
  { name: "★ Yıldız Vakfı", amt: "₺25K", melek: true },
  { name: "★ K.Ö. (anonim)", amt: "₺25K", melek: true },
  { name: "E. Yılmaz", amt: "₺5K" },
  { name: "A. Kaya", amt: "₺3K" },
  { name: "ODTÜ Topluluğu", amt: "₺2.5K" },
  { name: "F. Demir", amt: "₺1.2K" },
  { name: "N. Şahin", amt: "₺900" },
  { name: "M. Özkan", amt: "₺600" },
  { name: "Boğaziçi KSİ", amt: "₺450" },
  { name: "C. Aydın", amt: "₺300" },
  { name: "+ 68 bağışçı", amt: "₺9.7K" },
];

export default function SeffaflikPage() {
  return (
    <>
      <SiteNav active="seffaflik" />

      {/* Hero + KPIs */}
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <div className={site.eyebrow}>Şeffaflık Raporu · 2025–2026</div>
          <h1 className={styles.heroH1}>
            Her <em>kuruşun</em>
            <br />
            izini sürüyoruz.
          </h1>
          <p className={styles.heroLede}>
            81iz&apos;e yapılan her bağış, platforma kaydedilir ve bu sayfada
            kamuya açık olarak raporlanır. Aşağıdaki zaman çizelgesi, pilot
            programın başladığı günden bugüne kadar olan her girişi ve çıkışı
            içerir.
          </p>

          <div className={styles.kpis}>
            <div>
              <div className={styles.kpiN}>
                ₺120<span className={styles.kpiU}>K</span>
              </div>
              <div className={styles.kpiL}>Toplam Gelir</div>
              <div className={styles.kpiS}>Pilot dönem boyunca</div>
            </div>
            <div>
              <div className={styles.kpiN}>
                ₺104<span className={styles.kpiU}>K</span>
              </div>
              <div className={styles.kpiL}>Sahaya Aktarım</div>
              <div className={styles.kpiS}>Toplam gelirin %87&apos;si</div>
            </div>
            <div>
              <div className={styles.kpiN}>147</div>
              <div className={styles.kpiL}>Kayıtlı İşlem</div>
              <div className={styles.kpiS}>Giriş + çıkış</div>
            </div>
            <div>
              <div className={styles.kpiN}>12</div>
              <div className={styles.kpiL}>Sosyal Melek</div>
              <div className={styles.kpiS}>Kurumsal ortak</div>
            </div>
          </div>
        </div>
      </section>

      <SeffaflikClient />

      {/* Audit */}
      <section>
        <div className={styles.wrap}>
          <div className={styles.audit}>
            <div>
              <div className={site.eyebrow}>Doğrulama &amp; Denetim</div>
              <h3 className={styles.auditH3}>
                Şeffaflık sözden daha çok sürece dayanır.
              </h3>
            </div>
            <div className={styles.auditItems}>
              <div className={styles.auditItem}>
                <div className={styles.auditIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M9 11l3 3L22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                </div>
                <div>
                  <div className={styles.auditT}>Banka mutabakatı</div>
                  <div className={styles.auditS}>
                    Tüm bağışlar resmi dernek hesabına yatar; aylık mutabakat
                    yayınlanır.
                  </div>
                </div>
                <div className={styles.auditD}>AYLIK</div>
              </div>
              <div className={styles.auditItem}>
                <div className={styles.auditIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
                <div>
                  <div className={styles.auditT}>Yıllık bağımsız denetim</div>
                  <div className={styles.auditS}>
                    Bağımsız SMMM tarafından yıllık gelir-gider denetimi yapılır.
                  </div>
                </div>
                <div className={styles.auditD}>YILLIK</div>
              </div>
              <div className={styles.auditItem}>
                <div className={styles.auditIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <div className={styles.auditT}>Gerçek zamanlı dashboard</div>
                  <div className={styles.auditS}>
                    Her bağış platforma anında düşer; kayıt ilk 24 saat içinde
                    yayınlanır.
                  </div>
                </div>
                <div className={styles.auditD}>CANLI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donor wall */}
      <section className={styles.donorSection}>
        <div className={styles.wrap}>
          <div className={styles.sectionHead}>
            <div>
              <div className={site.eyebrow}>Bağışçı Duvarı</div>
              <h2 className={styles.sectionH2}>
                Teşekkürler, <em>iz bırakanlar</em>.
              </h2>
            </div>
            <p className={styles.sectionLede}>
              Anonim kalmak istemeyen bağışçılarımızın bir kısmı. Tam listeye
              PDF raporundan ulaşabilirsiniz.
            </p>
          </div>
          <div className={styles.donorWall}>
            {DONORS.map((d) => (
              <div
                key={d.name}
                className={`${styles.donorChip} ${d.melek ? styles.donorChipMelek : ""}`}
              >
                <span className={styles.donorN}>{d.name}</span>
                <span className={styles.donorA}>{d.amt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
