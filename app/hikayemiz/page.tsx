import Link from "next/link";
import HikayemizEffects from "./HikayemizEffects";
import styles from "./page.module.css";

export default function HikayemizPage() {
  return (
    <>
      <HikayemizEffects
        starsClass={styles.stars}
        starClass={styles.star}
        mountainsClass={styles.mountainsSvg}
        heroClass={styles.hero}
        revealClass={styles.reveal}
        visibleClass={styles.visible}
      />

      {/* ==================== NAV ==================== */}
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <Link href="/" className={styles.navBrand} aria-label="81 İz anasayfa">
            81 İz
          </Link>
          <div className={styles.navLinks}>
            <Link href="/agri">Ağrı Pilot</Link>
            <Link href="/#pillars">Paydaşlar</Link>
            <Link href="/seffaflik">Şeffaflık</Link>
            <Link href="/hikayemiz" className={styles.navActive} aria-current="page">
              Hikaye
            </Link>
            <Link href="/katil" className={styles.navBtn}>
              Katıl
            </Link>
            <Link
              href="/katil?rol=bagis"
              className={`${styles.navBtn} ${styles.navBtnPrimary}`}
            >
              Bağış Yap
            </Link>
          </div>
        </div>
      </nav>

      {/* ==================== HERO ==================== */}
      <section className={styles.hero}>
        <div className={styles.stars} />

        <svg
          className={styles.mountainsSvg}
          viewBox="0 0 1440 500"
          preserveAspectRatio="xMidYMax slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 350 L180 220 L280 260 L420 160 L520 200 L620 120 L680 150 L760 90 L840 140 L920 100 L1020 180 L1120 130 L1200 190 L1300 150 L1440 230 L1440 500 L0 500Z"
            fill="rgba(74, 124, 143, 0.3)"
          />
          <path
            d="M500 350 L620 230 L680 180 L720 100 L750 80 L780 100 L820 170 L870 220 L940 280 L1000 350"
            fill="var(--mountain-blue)"
            opacity="0.5"
          />
          <path
            d="M690 160 L720 100 L750 80 L780 100 L810 145 L790 140 L770 148 L755 135 L740 142 L720 135 L705 150Z"
            fill="var(--snow)"
            opacity="0.7"
          />
          <path
            d="M880 350 L940 260 L960 230 L980 240 L1020 300 L1060 350"
            fill="var(--mountain-blue)"
            opacity="0.4"
          />
          <path
            d="M0 400 L100 340 L200 360 L350 310 L450 350 L550 330 L600 370 L0 500Z"
            fill="var(--earth-mid)"
            opacity="0.25"
          />
          <path
            d="M800 380 L950 320 L1050 350 L1150 310 L1250 340 L1350 320 L1440 360 L1440 500 L800 500Z"
            fill="var(--earth-mid)"
            opacity="0.2"
          />
          <path
            d="M0 430 Q360 390 720 410 Q1080 430 1440 400 L1440 500 L0 500Z"
            fill="var(--cream-deep)"
            opacity="0.6"
          />
          <path
            d="M0 460 Q360 440 720 450 Q1080 460 1440 445 L1440 500 L0 500Z"
            fill="var(--cream)"
          />
        </svg>

        <div className={styles.heroContent}>
          <div className={styles.heroLogo}>81 İz</div>
        </div>

        <div className={styles.scrollHint}>
          <div className={styles.scrollLine} />
        </div>
      </section>

      {/* ==================== FOOTPRINTS DIVIDER ==================== */}
      <div className={`${styles.footprintsDivider} ${styles.reveal}`}>
        <span className={styles.footprint}>👣</span>
        <span className={styles.footprint}>👣</span>
        <span className={styles.footprint}>👣</span>
        <span className={styles.footprint}>👣</span>
        <span className={styles.footprint}>👣</span>
      </div>

      {/* ==================== MANIFESTO ==================== */}
      <section className={styles.manifesto}>
        <div className={`${styles.manifestoOpening} ${styles.reveal}`}>
          <span className={styles.years}>Tam 10 yıl...</span>
          Dile kolay.
        </div>

        <p className={styles.reveal}>
          İçimde bir yerlerde hep susturduğum o ses artık daha gür çıkıyor:{" "}
          <span className={styles.voice}>&apos;Şimdi değilse ne zaman?&apos;</span>
        </p>

        <p className={styles.reveal}>
          Biliyorsunuz, hep bir vakıf hayalim vardı. Çocukların, özellikle de kız
          çocuklarımızın eğitimde, hayatta <em>&apos;biz de varız&apos;</em> diyebilmesi
          için bir şeyler yapmak istedim. Bugüne kadar çok koşturdum, çok çalıştım
          ama bu iş başka.
        </p>

        <div className={`${styles.highlightLine} ${styles.reveal}`}>
          Bu iş, kalbimin borcu.
        </div>

        <p className={`${styles.agriLine} ${styles.reveal}`}>
          81 İz yola çıkıyor. İlk durağımız, doğduğum topraklar; Ağrı. 🏔️
        </p>

        <p className={styles.reveal}>
          Üniversite ekiplerimizle sahada olacağız, mentorlarımızla çocukların
          elinden tutacağız. Belki bir gün dev bir şirketleşmeye gidecek bu
          yolculuk ama bugün sadece samimi bir niyetle, o ilk köy okuluna doğru
          yola çıkıyoruz.
        </p>

        <p className={styles.reveal}>
          Bu videoyu çekerken ellerim titredi desem yalan olmaz. Ama biliyorum ki
          yanımda siz varsınız. Destek olmak isteyen,{" "}
          <em>
            &apos;ben de bu çocukların hayatında bir iz bırakmak istiyorum&apos;
          </em>{" "}
          diyen herkesi bekliyorum.
        </p>

        <p className={`${styles.closing} ${styles.reveal}`}>
          Yolumuz uzun, heyecanımız çok. İyi ki varsınız! ✨
        </p>
      </section>

      {/* ==================== HASHTAGS ==================== */}
      <div className={`${styles.hashtagsSection} ${styles.reveal}`}>
        <div className={styles.hashtags}>
          <span className={styles.hashtag}>#81İz</span>
          <span className={styles.hashtag}>#Ağrı</span>
          <span className={styles.hashtag}>#FırsatEşitliği</span>
          <span className={styles.hashtag}>#YolculukBaşlıyor</span>
          <span className={styles.hashtag}>#10YılSonra</span>
        </div>
      </div>

      {/* ==================== FOOTER ==================== */}
      <footer className={styles.footer}>
        <div className={styles.footerLogo}>81 İz</div>
        <div className={styles.footerFootprints}>👣 👣 👣</div>
        <p className={styles.footerText}>© 2026 81 İz</p>
      </footer>
    </>
  );
}
