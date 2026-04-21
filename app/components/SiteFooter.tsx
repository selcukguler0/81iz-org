import Link from "next/link";
import styles from "./site.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <div className={styles.footerGrid}>
          <div>
            <Link
              href="/"
              className={`${styles.wordmark} ${styles.wordmarkFooter}`}
            >
              <span className={styles.wordmarkNum}>81</span>
              <span className={`${styles.wordmarkIz} ${styles.wordmarkIzFooter}`}>
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
              <li><Link href="/#pillars">Paydaşlar</Link></li>
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
              <li><Link href="/katil?rol=basin">Basın Kiti →</Link></li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div>© 2026 81iz Sosyal Girişim · Tüm hakları saklıdır</div>
          <div>Gizlilik · Şeffaflık Politikası · KVKK</div>
        </div>
      </div>
    </footer>
  );
}
