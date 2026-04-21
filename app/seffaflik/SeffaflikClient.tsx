"use client";

import { useEffect, useMemo, useState } from "react";
import site from "../components/site.module.css";
import styles from "./page.module.css";
import {
  TRANSACTIONS,
  fmtDate,
  fmtTL,
  monthKey,
  receiptNumber,
  type Tx,
} from "./transactions";

type Filter = "all" | "in" | "out";

const MONTHLY_IN  = [8, 14, 19, 22, 34, 18, 9, 7, 8, 11];
const MONTHLY_OUT = [3,  8, 12, 14, 17, 16, 12, 10, 9, 11];
const TREND_LABELS = ["Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara", "Oca", "Şub", "Mar", "Nis"];
const TREND_MAX = 36;

export default function SeffaflikClient() {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Tx | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return TRANSACTIONS.filter((t) => {
      if (filter === "in" && t.type !== "in") return false;
      if (filter === "out" && t.type !== "out") return false;
      if (q && !(`${t.desc} ${t.target}`.toLowerCase().includes(q))) return false;
      return true;
    });
  }, [filter, query]);

  const grouped = useMemo(() => {
    const byMonth = new Map<string, Tx[]>();
    for (const t of filtered) {
      const key = monthKey(t.date);
      if (!byMonth.has(key)) byMonth.set(key, []);
      byMonth.get(key)!.push(t);
    }
    return Array.from(byMonth.entries());
  }, [filtered]);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <>
      {/* Dashboard */}
      <section>
        <div className={styles.wrap}>
          <div className={styles.dashboard}>
            <div className={styles.panel}>
              <div className={`${site.eyebrow} ${styles.panelEyebrow}`}>
                Harcama Dağılımı
              </div>
              <h3 className={styles.panelH3}>Her ₺100&apos;ün nereye gittiği.</h3>
              <div className={styles.donutWrap}>
                <svg className={styles.donutSvg} viewBox="0 0 42 42" aria-hidden>
                  <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#E3DCC7" strokeWidth="6" />
                  <circle cx="21" cy="21" r="15.915" fill="transparent"
                    stroke="#0F766E" strokeWidth="6"
                    strokeDasharray="42 58" strokeDashoffset="25" />
                  <circle cx="21" cy="21" r="15.915" fill="transparent"
                    stroke="#0B5D57" strokeWidth="6"
                    strokeDasharray="23 77" strokeDashoffset="-17" />
                  <circle cx="21" cy="21" r="15.915" fill="transparent"
                    stroke="#E8A33D" strokeWidth="6"
                    strokeDasharray="22 78" strokeDashoffset="-40" />
                  <circle cx="21" cy="21" r="15.915" fill="transparent"
                    stroke="#C8851E" strokeWidth="6"
                    strokeDasharray="8 92" strokeDashoffset="-62" />
                  <circle cx="21" cy="21" r="15.915" fill="transparent"
                    stroke="#8A9A96" strokeWidth="6"
                    strokeDasharray="5 95" strokeDashoffset="-70" />
                  <text x="21" y="21" textAnchor="middle" fontSize="6" fontFamily="Fraunces" fill="#0F1F1C">
                    ₺120K
                  </text>
                  <text x="21" y="25" textAnchor="middle" fontSize="2.5" fontFamily="JetBrains Mono" fill="#5A6F6B">
                    TOPLAM
                  </text>
                </svg>
                <div className={styles.donutLegend}>
                  <div className={styles.donutItem}>
                    <span className={styles.donutSq} style={{ background: "#0F766E" }} />
                    Saha operasyonu
                    <span className={styles.donutPct}>42%</span>
                  </div>
                  <div className={styles.donutItem}>
                    <span className={styles.donutSq} style={{ background: "#0B5D57" }} />
                    Kütüphane + materyal
                    <span className={styles.donutPct}>23%</span>
                  </div>
                  <div className={styles.donutItem}>
                    <span className={styles.donutSq} style={{ background: "#E8A33D" }} />
                    Koordinasyon + platform
                    <span className={styles.donutPct}>22%</span>
                  </div>
                  <div className={styles.donutItem}>
                    <span className={styles.donutSq} style={{ background: "#C8851E" }} />
                    Mentör desteği
                    <span className={styles.donutPct}>8%</span>
                  </div>
                  <div className={styles.donutItem}>
                    <span className={styles.donutSq} style={{ background: "#8A9A96" }} />
                    Operasyonel
                    <span className={styles.donutPct}>5%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.panel}>
              <div className={`${site.eyebrow} ${styles.panelEyebrow}`}>
                Aylık Nakit Akışı
              </div>
              <h3 className={styles.panelH3}>Son 10 ay · Tem 2025 → Nis 2026</h3>
              <div className={styles.trendChart}>
                {MONTHLY_IN.map((inVal, i) => (
                  <div key={i} className={styles.trendCol}>
                    <div
                      className={`${styles.trendBar} ${i === MONTHLY_IN.length - 1 ? styles.trendBarLatest : ""}`}
                      style={{ height: `${(inVal / TREND_MAX) * 100}%` }}
                    >
                      <div className={styles.trendBarV}>₺{inVal}K</div>
                    </div>
                    <div
                      className={`${styles.trendBar} ${styles.trendBarOut}`}
                      style={{ height: `${(MONTHLY_OUT[i] / TREND_MAX) * 100}%` }}
                    >
                      <div className={styles.trendBarV}>₺{MONTHLY_OUT[i]}K</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.trendLabels}>
                {TREND_LABELS.map((l) => <div key={l}>{l}</div>)}
              </div>
              <div className={styles.trendFoot}>
                <div>
                  <span className={styles.mono}>NET NAKİT</span>
                  <span style={{ color: "var(--teal)", fontWeight: 600 }}>+₺16.000</span>
                </div>
                <div>
                  <span className={styles.mono}>EN YÜKSEK AY</span>
                  <span style={{ fontWeight: 600 }}>Kasım 2025</span>
                </div>
                <div>
                  <span className={styles.mono}>TREND</span>
                  <span style={{ color: "var(--teal)", fontWeight: 600 }}>↑ 3 ay üst üste</span>
                </div>
              </div>
            </div>
          </div>

          {/* Toolbar */}
          <div className={styles.toolbar}>
            <div className={styles.search}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4-4" />
              </svg>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="İşlem, okul veya bağışçı ara..."
              />
            </div>
            <div className={styles.filterSeg}>
              <button
                type="button"
                className={filter === "all" ? styles.active : ""}
                onClick={() => setFilter("all")}
              >
                Tümü
              </button>
              <button
                type="button"
                className={filter === "in" ? styles.active : ""}
                onClick={() => setFilter("in")}
              >
                Giriş
              </button>
              <button
                type="button"
                className={filter === "out" ? styles.active : ""}
                onClick={() => setFilter("out")}
              >
                Çıkış
              </button>
            </div>
            <div className={styles.export}>
              <a href="#" onClick={(e) => e.preventDefault()}>CSV ↓</a>
              <a href="#" onClick={(e) => e.preventDefault()}>PDF ↓</a>
            </div>
          </div>

          {/* Timeline */}
          <div className={styles.timeline}>
            {grouped.length === 0 ? (
              <div className={styles.empty}>Aramanızla eşleşen işlem bulunamadı.</div>
            ) : (
              grouped.map(([mk, txs]) => {
                const mIn = txs.filter((t) => t.type === "in").reduce((s, t) => s + t.amount, 0);
                const mOut = txs.filter((t) => t.type === "out").reduce((s, t) => s + t.amount, 0);
                return (
                  <div key={mk}>
                    <div className={styles.groupHeader}>
                      <div className={styles.monthLabel}>
                        <strong>{mk}</strong>
                        <span>{txs.length} işlem</span>
                      </div>
                      <div className={styles.monthSum}>
                        {mIn > 0 && (
                          <span className={styles.monthSumIn}>+{fmtTL(mIn)}</span>
                        )}
                        {mIn > 0 && mOut > 0 && (
                          <span className={styles.monthSumSep}> · </span>
                        )}
                        {mOut > 0 && (
                          <span className={styles.monthSumOut}>-{fmtTL(mOut)}</span>
                        )}
                      </div>
                    </div>
                    {txs.map((t) => (
                      <button
                        key={t.date + t.amount + t.desc}
                        type="button"
                        className={styles.row}
                        onClick={() => setActive(t)}
                      >
                        <div className={styles.rowDate}>{fmtDate(t.date)}</div>
                        <div>
                          <span className={`${styles.rowType} ${t.type === "in" ? styles.typeIn : styles.typeOut}`}>
                            {t.type === "in" ? "Giriş" : "Çıkış"}
                          </span>
                        </div>
                        <div className={styles.rowDesc}>{t.desc}</div>
                        <div className={styles.rowTarget}>→ {t.target}</div>
                        <div className={`${styles.rowAmount} ${t.type === "in" ? styles.amountIn : styles.amountOut}`}>
                          {t.type === "in" ? "+" : "−"}
                          {fmtTL(t.amount)}
                        </div>
                      </button>
                    ))}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* Drawer */}
      <div
        className={`${styles.backdrop} ${active ? styles.backdropShow : ""}`}
        onClick={() => setActive(null)}
      />
      <aside
        className={`${styles.drawer} ${active ? styles.drawerShow : ""}`}
        aria-hidden={!active}
      >
        {active && (
          <>
            <button
              type="button"
              className={styles.drawerClose}
              onClick={() => setActive(null)}
              aria-label="Kapat"
            >
              ×
            </button>
            <div className={site.eyebrow}>İşlem Detayı</div>
            <h2 className={styles.drawerH2}>{active.desc}</h2>
            <div
              className={`${styles.rowType} ${active.type === "in" ? styles.typeIn : styles.typeOut}`}
            >
              {active.type === "in" ? "Giriş (Inflow)" : "Çıkış (Outflow)"}
            </div>

            <div
              className={`${styles.drawerAmt} ${active.type === "in" ? styles.drawerAmtIn : styles.drawerAmtOut}`}
            >
              {active.type === "in" ? "+" : "−"}
              {fmtTL(active.amount)}
            </div>

            <div className={styles.drawerDetails}>
              <div className={styles.drawerRow}>
                <span className="l">İşlem tarihi</span>
                <span className="mono">{fmtDate(active.date)}</span>
              </div>
              <div className={styles.drawerRow}>
                <span className="l">Hedef</span>
                <span className="v">{active.target}</span>
              </div>
              <div className={styles.drawerRow}>
                <span className="l">Hesap</span>
                <span className="mono">81iz Derneği · Ziraat *4871</span>
              </div>
              <div className={styles.drawerRow}>
                <span className="l">Dekont numarası</span>
                <span className="txNum">{receiptNumber(active)}</span>
              </div>
              <div className={styles.drawerRow}>
                <span className="l">Mutabakat durumu</span>
                <span className="confirmed">● Onaylandı</span>
              </div>
            </div>

            <div className={styles.drawerNote}>
              <strong>Not</strong>
              Bu işlem aylık banka mutabakatı ile doğrulanmıştır. Dekont
              PDF&apos;ini e-posta ile talep edebilirsiniz.
            </div>

            <button
              type="button"
              className={`${site.btn} ${site.btnOutline} ${styles.drawerBtn}`}
            >
              Dekontu E-postayla Al →
            </button>
          </>
        )}
      </aside>
    </>
  );
}
