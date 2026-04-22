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
        <div className={`${styles.wrap} ${styles.navInner}`}>
          <Link href="/" className={styles.wordmark} aria-label="81iz anasayfa">
            <span className={styles.wordmarkNum}>81</span>
            <span className={styles.wordmarkIz}>iz</span>
          </Link>
          <div className={styles.navLinks}>
            <Link href="/agri">Ağrı Pilot</Link>
            <Link href="/#pillars">Paydaşlar</Link>
            <Link href="/seffaflik">Şeffaflık</Link>
            <Link
              href="/hikayemiz"
              className={styles.navActive}
              aria-current="page"
            >
              Hikaye
            </Link>
            <Link
              href="/katil"
              className={`${styles.btn} ${styles.btnOutline} ${styles.navBtn}`}
            >
              Katıl
            </Link>
            <Link
              href="/katil?rol=bagis"
              className={`${styles.btn} ${styles.btnPrimary} ${styles.navBtn}`}
            >
              Bağış Yap
            </Link>
          </div>
        </div>
      </nav>

      {/* ==================== HERO ==================== */}
      <section className={styles.hero}>
        <div className={styles.stars} aria-hidden />

        <svg
          className={styles.mountainsSvg}
          viewBox="0 0 1440 500"
          preserveAspectRatio="xMidYMax slice"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <defs>
            <linearGradient id="ridge-back" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0b5d57" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#0b5d57" stopOpacity="0.08" />
            </linearGradient>
            <linearGradient id="ridge-mid" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#084842" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#084842" stopOpacity="0.22" />
            </linearGradient>
            <linearGradient id="ridge-front" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e8a33d" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#fdf8ef" stopOpacity="0.9" />
            </linearGradient>
          </defs>

          <path
            d="M0 350 L180 220 L280 260 L420 160 L520 200 L620 120 L680 150 L760 90 L840 140 L920 100 L1020 180 L1120 130 L1200 190 L1300 150 L1440 230 L1440 500 L0 500Z"
            fill="url(#ridge-back)"
          />
          <path
            d="M500 350 L620 230 L680 180 L720 100 L750 80 L780 100 L820 170 L870 220 L940 280 L1000 350"
            fill="url(#ridge-mid)"
          />
          <path
            d="M690 160 L720 100 L750 80 L780 100 L810 145 L790 140 L770 148 L755 135 L740 142 L720 135 L705 150Z"
            fill="#ffffff"
            opacity="0.8"
          />
          <path
            d="M880 350 L940 260 L960 230 L980 240 L1020 300 L1060 350"
            fill="url(#ridge-mid)"
            opacity="0.6"
          />
          <path
            d="M0 420 Q360 390 720 405 Q1080 420 1440 395 L1440 500 L0 500Z"
            fill="url(#ridge-front)"
          />
          <path
            d="M0 460 Q360 445 720 452 Q1080 460 1440 448 L1440 500 L0 500Z"
            fill="#fdf8ef"
          />
        </svg>

        <div className={styles.heroContent}>
          <div className={styles.heroEyebrow}>
            <span className={styles.heroEyebrowDot} aria-hidden />
            <span className={styles.eyebrow}>Kurucunun Mektubu</span>
          </div>
          <h1 className={styles.heroH1}>
            <span className={styles.heroH1Line}>Bir <em>iz</em> bırakmak</span>
            <span className={styles.heroH1Line}>neden başladı?</span>
          </h1>
        </div>

        <div className={styles.scrollHint} aria-hidden>
          <span className={styles.scrollHintLabel}>kaydır</span>
          <div className={styles.scrollLine} />
        </div>
      </section>

      {/* ==================== TRAIL DIVIDER ==================== */}
      <div className={`${styles.trailDivider} ${styles.reveal}`} aria-hidden>
        <span className={styles.trailDot} />
        <span className={styles.trailDot} />
        <span className={styles.trailDot} />
        <span className={styles.trailDot} />
        <span className={styles.trailDot} />
      </div>

      {/* ==================== MANIFESTO ==================== */}
      <section className={styles.manifesto}>
        <figure className={`${styles.epigraph} ${styles.reveal}`}>
          <span className={styles.epigraphRule} aria-hidden />
          <blockquote className={styles.epigraphText}>
            Her şey Ağrı&apos;nın o uçsuz bucaksız, bazen sert ama hep umut dolu
            gökyüzüne bakarken başladı…
          </blockquote>
          <span className={styles.epigraphRule} aria-hidden />
        </figure>

        <div className={styles.manifestoSheet}>
          <div className={styles.manifestoOpening}>
            <span className={styles.manifestoOpeningEyebrow}>
              · Ağrı, 2026 ·
            </span>
            <span className={styles.manifestoOpeningTitle}>
              Sevgili okuyucuya;
            </span>
          </div>

          <p className={`${styles.manifestoP} ${styles.manifestoFirst}`}>
            Bazen bir hayali gerçek kılmak için en doğru anın gelmesini bekleriz,
            oysa o an aslında bizim o cesur adımı attığımız andır. Benim için bu
            yolculuk, doğduğum topraklarda, Ağrı&apos;nın o tozlu yollarında bir
            çocukken kurduğum hayallerin bir devamı aslında. Orada, o pırıl pırıl
            gözlerin imkansızlıklara rağmen nasıl dev hayaller büyütebildiğini
            görerek büyüdüm. İçimde hep o çocukların{" "}
            <span className={styles.voice}>
              &apos;ya bir gün her şey hepimiz için eşit olursa?&apos;
            </span>{" "}
            sorusuna verilmiş bir söz vardı.
          </p>

          <p className={styles.manifestoP}>
            Yıllardır kalbimde taşıdığım o sessiz niyet, artık yerinde duramayan
            bir harekete dönüşüyor. Çünkü artık sadece istemenin yetmediğini, o
            çocukların hayatında gerçekten bir fark yaratmak için elimizi taşın
            altına koymamız gerektiğini biliyorum. İşte bu yüzden 81 İz doğdu;
            birikmiş tüm o umutları, somut bir geleceğe dönüştürmek için.
          </p>

          <blockquote className={styles.pullquote}>
            <span className={styles.pullquoteMark} aria-hidden>
              “
            </span>
            <p>Bu iş, kalbimin borcu.</p>
          </blockquote>

          <p className={styles.manifestoP}>
            Hikayemizin başladığı o ilk topraklardan, o ilk köy okulundan yola
            koyuluyoruz. Üniversiteli arkadaşlarımızla sahada olacak,
            mentorlarımızla o minik ellerden tutacak ve bu iyilik ağını 81
            ilimize, her bir çocuğun kalbine yayacağız. Belki bir gün çok daha
            büyük yapılara, dev bir aileye dönüşeceğiz ama bugün sadece o saf ve
            samimi inançla o ilk adımı atıyoruz.
          </p>

          <div className={styles.agriCard}>
            <svg
              className={styles.agriCardIcon}
              viewBox="0 0 32 32"
              aria-hidden
            >
              <path
                d="M3 26 L10 14 L14 20 L19 10 L24 18 L29 26 Z"
                fill="currentColor"
                opacity="0.85"
              />
              <path
                d="M17 13 L19 10 L21 13 L20.2 12.7 L19.4 13.2 L18.6 12.8 Z"
                fill="#ffffff"
                opacity="0.9"
              />
            </svg>
            <div className={styles.agriCardText}>
              81 İz yola çıkıyor. <br />
              İlk durağımız, doğduğum topraklar; Ağrı.
            </div>
          </div>

          <p className={styles.manifestoP}>
            Biliyorum, bu yolu tek başıma yürümem mümkün değil; çünkü bu hayal
            sadece benim değil, hepimizin.{" "}
            <em className={styles.manifestoEm}>
              &apos;Ben de bir çocuğun geleceğinde bir izim olsun
              istiyorum&apos;
            </em>{" "}
            diyen her yürek, bu projenin en değerli parçası. Bu izi beraber
            bırakmaya, o hayalleri beraber gerçeğe dönüştürmeye var mısınız?
          </p>

          <div className={styles.closing}>
            <span className={styles.closingLine} aria-hidden />
            <p className={styles.closingText}>
              Yolumuz uzun, heyecanımız çok. İyi ki bu yolda beraberiz!
            </p>
            <span className={styles.closingSignature}>— 81 İz Ekibi</span>
          </div>
        </div>

        <div className={`${styles.manifestoCta} ${styles.reveal}`}>
          <Link
            href="/katil?rol=bagis"
            className={`${styles.btn} ${styles.btnPrimary}`}
          >
            Sen de bir iz bırak <span aria-hidden>→</span>
          </Link>
          <Link
            href="/agri"
            className={`${styles.btn} ${styles.btnOutline}`}
          >
            Ağrı&apos;daki yolculuğumuz
          </Link>
        </div>
      </section>

      {/* ==================== HASHTAGS ==================== */}
      <div className={`${styles.hashtagsSection} ${styles.reveal}`}>
        <div className={styles.hashtags}>
          <span className={styles.hashtag}>#81İz</span>
          <span className={styles.hashtag}>#Ağrı</span>
          <span className={styles.hashtag}>#FırsatEşitliği</span>
          <span className={styles.hashtag}>#YolculukBaşlıyor</span>
          <span className={styles.hashtag}>#KalbiminBorcu</span>
        </div>
      </div>

      {/* ==================== FOOTER ==================== */}
      <footer className={styles.footer}>
        <div className={styles.wrap}>
          <div className={styles.footerInner}>
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
              81 ilde çocukların ve kız çocuklarının geleceği için tek bir iz.
            </p>
            <p className={styles.footerBottom}>
              © 2026 81iz Sosyal Girişim · Ağrı, Türkiye
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
