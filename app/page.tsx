import Link from "next/link";
import HomeEffects from "./HomeEffects";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      {/* ========== NAV ========== */}
      <nav className={styles.nav}>
        <div className={`${styles.wrap} ${styles.navInner}`}>
          <Link href="/" className={styles.wordmark} aria-label="81iz anasayfa">
            <span className={styles.wordmarkNum}>81</span>
            <span className={styles.wordmarkIz}>iz</span>
          </Link>
          <div className={styles.navLinks}>
            <Link href="/agri">Ağrı Pilot</Link>
            <a href="#pillars">Paydaşlar</a>
            <Link href="/seffaflik">Şeffaflık</Link>
            <Link href="/hikayemiz">Hikaye</Link>
            <Link
              href="/katil"
              className={`${styles.btn} ${styles.btnOutline} ${styles.navBtn}`}
            >
              Katıl
            </Link>
            <a
              href="#bagis"
              className={`${styles.btn} ${styles.btnPrimary} ${styles.navBtn}`}
            >
              Bağış Yap
            </a>
          </div>
        </div>
      </nav>

      {/* ========== HERO ========== */}
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <div className={styles.heroGrid}>
            <div>
              <div className={styles.heroEyebrow}>
                <span
                  className={`${styles.heroEyebrowDot} ${styles.pulse}`}
                  aria-hidden
                />
                <span className={styles.eyebrow}>
                  Ağrı&apos;da Aktif • 2026 İlkbaharı
                </span>
              </div>
              <h1 className={styles.heroH1}>
                81 ilde <em>kız çocuklarının</em> geleceği için{" "}
                <span className={styles.heroUnderline}>tek</span> bir iz.
              </h1>
              <p className={styles.heroLede}>
                81iz, Türkiye&apos;nin her ilindeki kız çocukları ve dezavantajlı
                çocuklar için eğitimde fırsat eşitliği hedefleyen bir sosyal
                girişim. Saha operasyonunu teknoloji ile birleştiriyoruz;
                bağışçı, gönüllü ve öğrenciyi tek bir ekosistemde buluşturuyoruz.
              </p>
              <div className={styles.heroCta}>
                <a
                  href="#bagis"
                  className={`${styles.btn} ${styles.btnPrimary}`}
                >
                  Bağış Yap <span aria-hidden>→</span>
                </a>
                <Link
                  href="/agri"
                  className={`${styles.btn} ${styles.btnOutline}`}
                >
                  Ağrı Pilotunu Gör
                </Link>
              </div>
              <div className={styles.heroMeta}>
                <div>
                  <div className={styles.heroMetaNum}>
                    1<span className={styles.heroMetaNumSub}>/81</span>
                  </div>
                  <div className={styles.heroMetaLabel}>Aktif il (Ağrı)</div>
                </div>
                <div>
                  <div className={styles.heroMetaNum}>
                    250<span className={styles.heroMetaNumSub}>+</span>
                  </div>
                  <div className={styles.heroMetaLabel}>Saha gönüllüsü</div>
                </div>
                <div>
                  <div className={styles.heroMetaNum}>5</div>
                  <div className={styles.heroMetaLabel}>Destek veren okul</div>
                </div>
                <div>
                  <div className={styles.heroMetaNum}>₺120k</div>
                  <div className={styles.heroMetaLabel}>Toplanan fon</div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <div className={styles.mapStage}>
                <div className={styles.mapReadout}>
                  <span>
                    <strong id="rd-active">1</strong>/81 İl
                  </span>
                  <span className={styles.mapReadoutSep} />
                  <span className={styles.mapReadoutCity}>● Ağrı</span>
                  <span className={styles.mapReadoutSep} />
                  <span>Pilot</span>
                </div>
                <div className={styles.mapCallout}>
                  <div className={styles.mapCalloutTitle}>Pilot İl</div>
                  <div>Ağrı — Doğubayazıt, 5 köy okulu</div>
                </div>
                <svg
                  className={styles.mapBase}
                  viewBox="0 0 1000 450"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <defs>
                    <pattern
                      id="tr-stripes"
                      patternUnits="userSpaceOnUse"
                      width="8"
                      height="8"
                      patternTransform="rotate(45)"
                    >
                      <rect width="8" height="8" fill="#F5EEDD" />
                      <rect width="1" height="8" fill="#E3DCC7" />
                    </pattern>
                  </defs>
                  <path
                    d="M 95,90 L 140,75 L 180,75 L 230,90 L 280,95 L 340,85 L 400,80 L 450,85 L 500,75 L 560,80 L 620,90 L 680,95 L 730,100 L 780,95 L 825,100 L 870,115 L 900,130 L 895,160 L 885,180 L 895,200 L 890,225 L 870,245 L 860,265 L 870,290 L 850,305 L 820,310 L 785,300 L 745,310 L 710,325 L 670,325 L 625,335 L 590,340 L 545,320 L 500,315 L 455,310 L 400,320 L 355,320 L 305,325 L 260,320 L 220,315 L 175,295 L 150,265 L 125,240 L 115,210 L 120,180 L 110,150 L 95,120 Z"
                    fill="url(#tr-stripes)"
                    stroke="#D3CBB4"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg
                  className={styles.mapOverlay}
                  viewBox="0 0 1000 450"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                />
              </div>
              <div className={styles.mapLegend}>
                <span className={styles.mapLegendItem}>
                  <span
                    className={`${styles.lgDot} ${styles.lgDotPilot}`}
                  />{" "}
                  Aktif pilot (Ağrı)
                </span>
                <span className={styles.mapLegendItem}>
                  <span
                    className={`${styles.lgDot} ${styles.lgDotPlanned}`}
                  />{" "}
                  2027 hedef
                </span>
                <span className={styles.mapLegendItem}>
                  <span
                    className={`${styles.lgDot} ${styles.lgDotVision}`}
                  />{" "}
                  81 il vizyonu
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== IMPACT STRIPE ========== */}
      <section className={styles.impact}>
        <div className={styles.wrap}>
          <div className={`${styles.eyebrow} ${styles.impactEyebrow}`}>
            Bir Yılın Sonunda
          </div>
          <h2 className={styles.impactH2}>
            Sayılarla <em className={styles.impactAccentEm}>Ağrı</em> pilotu.
          </h2>
          <div className={styles.impactGrid}>
            <div className={styles.impactStat}>
              <div className={styles.impactNum} data-count="250">
                0<span className={styles.impactUnit}>+</span>
              </div>
              <div className={styles.impactLabel}>Üniversite Gönüllüsü</div>
              <div className={styles.impactSub}>17 farklı üniversiteden</div>
            </div>
            <div className={styles.impactStat}>
              <div className={styles.impactNum} data-count="412">
                0<span className={styles.impactUnit}>öğrenci</span>
              </div>
              <div className={styles.impactLabel}>Destek Alan Çocuk</div>
              <div className={styles.impactSub}>%61&apos;i kız çocuğu</div>
            </div>
            <div className={styles.impactStat}>
              <div className={styles.impactNum} data-count="5">
                0<span className={styles.impactUnit}>okul</span>
              </div>
              <div className={styles.impactLabel}>Aktif Saha Noktası</div>
              <div className={styles.impactSub}>Doğubayazıt köy okulları</div>
            </div>
            <div className={styles.impactStat}>
              <div className={styles.impactNum}>
                ₺
                <span data-count="120">0</span>
                <span className={styles.impactUnit}>K</span>
              </div>
              <div className={styles.impactLabel}>Toplanan Fon</div>
              <div className={styles.impactSub}>
                %87&apos;si doğrudan sahaya
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PILLARS ========== */}
      <section className={styles.section} id="pillars">
        <div className={styles.wrap}>
          <div className={styles.sectionHead}>
            <div>
              <div className={styles.eyebrow}>Üç Paydaş, Bir Ekosistem</div>
              <h2 className={styles.sectionH2}>
                Herkesin bir <em>izi</em> var.
              </h2>
            </div>
            <p className={styles.sectionLede}>
              81iz platformu üç farklı paydaş grubunu aynı sürdürülebilir
              sistemde buluşturuyor. Her bağış, her gönüllü saati, her ders
              izlenebilir bir veri olarak raporlanıyor.
            </p>
          </div>

          <div className={styles.pillars}>
            <article className={styles.pillar}>
              <div className={styles.pillarNum}>01 / Gönüllü</div>
              <div className={styles.pillarIcon}>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden
                >
                  <circle cx="9" cy="8" r="3" />
                  <circle cx="17" cy="9" r="2.5" />
                  <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
                  <path d="M14 20c0-2.2 1.3-4 3-4s3 1.8 3 4" />
                </svg>
              </div>
              <h3 className={styles.pillarH3}>Saha Elçileri</h3>
              <div className={styles.pillarRole}>Üniversite Gönüllüleri</div>
              <p className={styles.pillarP}>
                Üniversite kulüpleri ve öğrencilerden oluşan saha ekiplerimiz;
                köy okullarına düzenli ziyaretler düzenler, atölyeler açar ve
                her ziyaretin çıktılarını platforma kaydeder.
              </p>
              <div className={styles.pillarStats}>
                <div>
                  <div className={styles.pillarStatsNum}>250+</div>
                  <div className={styles.pillarStatsLabel}>Aktif gönüllü</div>
                </div>
                <div>
                  <div className={styles.pillarStatsNum}>17</div>
                  <div className={styles.pillarStatsLabel}>Üniversite</div>
                </div>
              </div>
              <Link
                href="/katil?rol=gonullu"
                className={`${styles.btn} ${styles.btnPrimary} ${styles.pillarBtn}`}
              >
                Gönüllü Ol →
              </Link>
            </article>

            <article className={styles.pillar}>
              <div className={styles.pillarNum}>02 / Mentör</div>
              <div
                className={`${styles.pillarIcon} ${styles.pillarIconSaffron}`}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden
                >
                  <path d="M4 5v14M4 5l8-2 8 2v14l-8-2-8 2" />
                  <path d="M12 3v18" />
                  <path d="M8 8h1M8 12h1M15 8h1M15 12h1" />
                </svg>
              </div>
              <h3 className={styles.pillarH3}>Mentör Ağı</h3>
              <div className={styles.pillarRole}>Gönüllü Öğretmenler</div>
              <p className={styles.pillarP}>
                Emekli ve aktif öğretmenlerin kurduğu mentör ağı, köy
                okullarındaki çocuklara haftalık çevrimiçi ve yüz yüze eğitim
                desteği verir. Her mentör-öğrenci eşleşmesi takip edilir.
              </p>
              <div className={styles.pillarStats}>
                <div>
                  <div className={styles.pillarStatsNum}>48</div>
                  <div className={styles.pillarStatsLabel}>Mentör</div>
                </div>
                <div>
                  <div className={styles.pillarStatsNum}>312</div>
                  <div className={styles.pillarStatsLabel}>Eşleşme</div>
                </div>
              </div>
              <Link
                href="/katil?rol=mentor"
                className={`${styles.btn} ${styles.btnOutline} ${styles.pillarBtn}`}
              >
                Mentör Ol →
              </Link>
            </article>

            <article className={styles.pillar}>
              <div className={styles.pillarNum}>03 / Yatırımcı</div>
              <div
                className={`${styles.pillarIcon} ${styles.pillarIconCoral}`}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden
                >
                  <path d="M4 10c3-1.5 6-1 9 1s6 2.5 9 1" />
                  <path d="M4 16c3-1.5 6-1 9 1s6 2.5 9 1" />
                  <circle cx="12" cy="5" r="2" />
                </svg>
              </div>
              <h3 className={styles.pillarH3}>Sosyal Melek Yatırımcılar</h3>
              <div className={styles.pillarRole}>
                Kurumsal &amp; Bireysel Bağışçı
              </div>
              <p className={styles.pillarP}>
                Geleceğin sosyal girişimine ortak olan melek yatırımcılar.
                Şeffaf bağış modeli, çeyreklik etki raporları ve doğrudan saha
                görüşmeleri ile yatırımın izini sürebilirsiniz.
              </p>
              <div className={styles.pillarStats}>
                <div>
                  <div className={styles.pillarStatsNum}>12</div>
                  <div className={styles.pillarStatsLabel}>Melek yatırımcı</div>
                </div>
                <div>
                  <div className={styles.pillarStatsNum}>₺120K</div>
                  <div className={styles.pillarStatsLabel}>Taahhüt</div>
                </div>
              </div>
              <a
                href="#bagis"
                className={`${styles.btn} ${styles.btnCoral} ${styles.pillarBtn}`}
              >
                Yatırımcı Ol →
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* ========== STORY / CASE STUDY ========== */}
      <section className={styles.storySection} id="hikaye">
        <div className={styles.wrap}>
          <div className={styles.sectionHead}>
            <div>
              <div className={styles.eyebrow}>Saha Hikayesi · Ağrı</div>
              <h2 className={styles.sectionH2}>
                Problem → <em>Aksiyon</em> → Sonuç.
              </h2>
            </div>
            <p className={styles.sectionLede}>
              Her sosyal girişim gibi biz de bir problemle yola çıktık. Ağrı
              pilotunda neyi gördük, ne yaptık, ne ölçtük — hepsini şeffafça
              paylaşıyoruz.
            </p>
          </div>

          <div className={styles.story}>
            <div className={styles.storyImgWrap}>
              <div
                className={styles.storyPh}
                data-label={"SAHA FOTOĞRAFI\nAğrı Doğubayazıt\nKöy okulu ziyareti"}
              />
              <div className={styles.storyLabel}>
                <div className={styles.storyLabelMono}>Saha Ziyareti #47</div>
                <div className={styles.storyLabelT}>
                  &ldquo;İlk defa kendi adıma bir şey çizdim.&rdquo;
                </div>
              </div>
            </div>
            <div>
              <div className={`${styles.eyebrow} ${styles.storyEyebrow}`}>
                Ağrı&apos;da Başladık
              </div>
              <h2 className={styles.storyH2}>
                Tüm Türkiye&apos;de iz bırakacağız.
              </h2>
              <p className={styles.storyP}>
                Ağrı, Türkiye&apos;de okullaşma oranının en düşük olduğu
                illerden biri. UNESCO verilerine göre ilde her 10 kız
                çocuğundan 3&apos;ü lise eğitimini tamamlayamıyor. Biz burada
                başlamayı seçtik — çünkü değişimin başlayabileceği en anlamlı
                yer burası.
              </p>
              <div className={styles.storyCards}>
                <div className={styles.storyCard}>
                  <div className={styles.storyCardNum}>%61</div>
                  <div className={styles.storyCardLabel}>
                    Ulaşılan kız çocuğu oranı
                  </div>
                </div>
                <div className={styles.storyCard}>
                  <div
                    className={`${styles.storyCardNum} ${styles.storyCardNumSaffron}`}
                  >
                    12
                  </div>
                  <div className={styles.storyCardLabel}>
                    Ortalama aylık saha ziyareti
                  </div>
                </div>
              </div>
              <Link
                href="/agri"
                className={`${styles.btn} ${styles.btnOutline} ${styles.storyBtn}`}
              >
                Tam Pilot Raporu →
              </Link>
            </div>
          </div>

          {/* Case study steps */}
          <div className={styles.caseCard}>
            <div className={styles.caseStep}>
              <span className={styles.caseTag}>01 · Problem</span>
              <h4 className={styles.caseH4}>Fırsat eşitsizliği görünmez.</h4>
              <p className={styles.caseP}>
                Ağrı Doğubayazıt&apos;ta köy okullarındaki kız çocukları, lise
                çağına gelmeden eğitimden kopuyor. Mevcut bağışlar dağınık,
                etkisi ölçülemiyor.
              </p>
              <div className={styles.miniStat}>10&apos;da 3</div>
              <div className={styles.miniLabel}>
                Liseyi bitiremeyen kız çocuğu
              </div>
            </div>
            <div className={styles.caseStep}>
              <span className={`${styles.caseTag} ${styles.caseTagTeal}`}>
                02 · Aksiyon
              </span>
              <h4 className={styles.caseH4}>Saha + teknoloji + şeffaflık.</h4>
              <p className={styles.caseP}>
                5 köy okulunda düzenli gönüllü ziyaretleri, 48 gönüllü
                öğretmenden mentör eşleşmesi, her bağışın izlenebildiği
                dijital raporlama platformu.
              </p>
              <div className={styles.miniStat}>5 + 48 + 1</div>
              <div className={styles.miniLabel}>Okul · Mentör · Platform</div>
            </div>
            <div className={`${styles.caseStep} ${styles.caseStepOutcome}`}>
              <span className={styles.caseTag}>03 · Sonuç</span>
              <h4 className={styles.caseH4}>Ölçülebilir etki, ilk yıl.</h4>
              <p className={styles.caseP}>
                412 çocuğa düzenli eğitim desteği, 5 okulda kütüphane kurulumu,
                ₺120K fon — bunun %87&apos;si doğrudan sahaya aktarıldı.
              </p>
              <div className={styles.miniStat}>412</div>
              <div className={styles.miniLabel}>Destek alan çocuk</div>
            </div>
          </div>

          {/* Chart */}
          <div className={styles.chartBlock}>
            <div className={styles.chartHead}>
              <div>
                <div className={styles.eyebrow}>
                  Çeyreklik Büyüme · 2025–2026
                </div>
                <h3 className={styles.chartH3}>
                  Hedef mi, gerçek mi — ikisini de gösteriyoruz.
                </h3>
              </div>
              <div className={styles.chartLegend}>
                <span>
                  <span
                    className={`${styles.legDot} ${styles.legDotTarget}`}
                  />
                  Hedef
                </span>
                <span>
                  <span
                    className={`${styles.legDot} ${styles.legDotActual}`}
                  />
                  Gerçekleşen
                </span>
              </div>
            </div>
            <div className={styles.bars} />
            <div className={styles.barLabels}>
              <div className={styles.barLabel}>Q1 &apos;25</div>
              <div className={styles.barLabel}>Q2 &apos;25</div>
              <div className={styles.barLabel}>Q3 &apos;25</div>
              <div className={styles.barLabel}>Q4 &apos;25</div>
              <div className={styles.barLabel}>Q1 &apos;26</div>
              <div className={styles.barLabel}>Q2 &apos;26</div>
            </div>
            <div className={styles.chartFoot}>
              <div>Y ekseni: Destek alan çocuk sayısı</div>
              <Link href="/seffaflik" className={styles.chartFootLink}>
                Tüm veriyi incele →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA BAND ========== */}
      <section id="bagis" className={styles.ctaSection}>
        <div className={styles.ctaBand}>
          <div>
            <div className={styles.eyebrow}>Nasıl Dahil Olursun?</div>
            <h2 className={styles.ctaH2}>
              Bir <em>iz</em> bırakmak için dört yol.
            </h2>
            <p className={styles.ctaP}>
              Bağışçıdan yatırımcıya, gönüllüden basın kuruluşuna — 81iz
              ekosistemi farklı ölçeklerde katkıya açık.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <Link href="/katil?rol=bagis" className={styles.ctaAction}>
              <div className={styles.ctaActionLeft}>
                <div className={styles.ctaKicon}>₺</div>
                <div>
                  <div className={styles.ctaActionT}>Bireysel Bağış</div>
                  <div className={styles.ctaActionSt}>
                    Tek seferlik veya aylık — min. ₺50
                  </div>
                </div>
              </div>
              <div className={styles.ctaArrow}>→</div>
            </Link>
            <Link href="/katil?rol=yatirimci" className={styles.ctaAction}>
              <div className={styles.ctaActionLeft}>
                <div
                  className={`${styles.ctaKicon} ${styles.ctaKiconCoral}`}
                >
                  ★
                </div>
                <div>
                  <div className={styles.ctaActionT}>
                    Sosyal Melek Yatırımcı
                  </div>
                  <div className={styles.ctaActionSt}>
                    Kurumsal ortak ol · ₺25.000+ yıllık
                  </div>
                </div>
              </div>
              <div className={styles.ctaArrow}>→</div>
            </Link>
            <Link href="/katil?rol=mentor" className={styles.ctaAction}>
              <div className={styles.ctaActionLeft}>
                <div
                  className={`${styles.ctaKicon} ${styles.ctaKiconSaffron}`}
                >
                  ✎
                </div>
                <div>
                  <div className={styles.ctaActionT}>Mentör Öğretmen Ol</div>
                  <div className={styles.ctaActionSt}>
                    Haftada 2 saat, çevrimiçi veya saha
                  </div>
                </div>
              </div>
              <div className={styles.ctaArrow}>→</div>
            </Link>
            <Link href="/katil?rol=basin" className={styles.ctaAction}>
              <div className={styles.ctaActionLeft}>
                <div className={`${styles.ctaKicon} ${styles.ctaKiconNeutral}`}>
                  ◎
                </div>
                <div>
                  <div className={styles.ctaActionT}>Basın &amp; Medya</div>
                  <div className={styles.ctaActionSt}>
                    Basın kiti · İletişim
                  </div>
                </div>
              </div>
              <div className={styles.ctaArrow}>→</div>
            </Link>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className={styles.footer}>
        <div className={styles.wrap}>
          <div className={styles.footerGrid}>
            <div>
              <Link
                href="/"
                className={`${styles.wordmark} ${styles.wordmarkFooter}`}
              >
                <span className={styles.wordmarkNum}>81</span>
                <span
                  className={`${styles.wordmarkIz} ${styles.wordmarkIzFooter}`}
                >
                  iz
                </span>
              </Link>
              <p className={styles.footerBlurb}>
                81 ilde kız çocukları ve dezavantajlı çocuklar için eğitimde
                fırsat eşitliği. Ağrı&apos;da başladık, Türkiye&apos;de iz
                bırakıyoruz.
              </p>
            </div>
            <div>
              <h4 className={styles.footerH4}>Keşfet</h4>
              <ul className={styles.footerList}>
                <li><Link href="/agri">Ağrı Pilot</Link></li>
                <li><a href="#pillars">Paydaşlar</a></li>
                <li><Link href="/seffaflik">Şeffaflık Raporu</Link></li>
                <li><Link href="/hikayemiz">Hikaye</Link></li>
              </ul>
            </div>
            <div>
              <h4 className={styles.footerH4}>Katıl</h4>
              <ul className={styles.footerList}>
                <li><Link href="/katil?rol=bagis">Bağış Yap</Link></li>
                <li><Link href="/katil?rol=mentor">Mentör Ol</Link></li>
                <li><Link href="/katil?rol=gonullu">Gönüllü Ol</Link></li>
                <li><Link href="/katil?rol=yatirimci">Yatırımcı Ol</Link></li>
              </ul>
            </div>
            <div>
              <h4 className={styles.footerH4}>İletişim</h4>
              <ul className={styles.footerList}>
                <li><a href="mailto:merhaba@81iz.org">merhaba@81iz.org</a></li>
                <li>Ağrı, Türkiye</li>
                <li><a href="#">Basın Kiti →</a></li>
              </ul>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <div>© 2026 81iz Sosyal Girişim · Tüm hakları saklıdır</div>
            <div>Gizlilik · Şeffaflık Politikası · KVKK</div>
          </div>
        </div>
      </footer>

      <HomeEffects
        mapStageClass={styles.mapStage}
        mapOverlayClass={styles.mapOverlay}
        mapCalloutClass={styles.mapCallout}
        chartBarsClass={styles.bars}
        barClass={styles.bar}
        barTargetClass={styles.barTarget}
        barActualClass={styles.barActual}
        barNumClass={styles.barNum}
      />
    </>
  );
}
