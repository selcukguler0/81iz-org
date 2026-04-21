import Link from "next/link";
import styles from "./site.module.css";

type Active = "agri" | "pillars" | "seffaflik" | "hikaye" | "katil";

export default function SiteNav({ active }: { active?: Active }) {
  const activeCls = (key: Active) => (active === key ? styles.active : "");

  return (
    <nav className={styles.nav}>
      <div className={`${styles.wrap} ${styles.navInner}`}>
        <Link href="/" className={styles.wordmark} aria-label="81iz anasayfa">
          <span className={styles.wordmarkNum}>81</span>
          <span className={styles.wordmarkIz}>iz</span>
        </Link>
        <div className={styles.navLinks}>
          <Link href="/agri" className={activeCls("agri")}>Ağrı Pilot</Link>
          <Link href="/#pillars" className={activeCls("pillars")}>Paydaşlar</Link>
          <Link href="/seffaflik" className={activeCls("seffaflik")}>Şeffaflık</Link>
          <Link href="/hikayemiz" className={activeCls("hikaye")}>Hikaye</Link>
          <Link
            href="/katil"
            className={`${styles.btn} ${styles.btnOutline} ${styles.navBtn} ${activeCls("katil")}`}
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
  );
}
