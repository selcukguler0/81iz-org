"use client";

import { useEffect } from "react";
import { TURKEY_CITIES, type City } from "./cities";

type Props = {
  mapStageClass: string;
  mapOverlayClass: string;
  mapCalloutClass: string;
  chartBarsClass: string;
  barClass: string;
  barTargetClass: string;
  barActualClass: string;
  barNumClass: string;
};

const QUARTER_DATA = [
  { target: 50, actual: 38 },
  { target: 120, actual: 128 },
  { target: 220, actual: 215 },
  { target: 300, actual: 310 },
  { target: 380, actual: 390 },
  { target: 420, actual: 412 },
];
const CHART_MAX = 480;

const SVG_NS = "http://www.w3.org/2000/svg";

export default function HomeEffects({
  mapStageClass,
  mapOverlayClass,
  mapCalloutClass,
  chartBarsClass,
  barClass,
  barTargetClass,
  barActualClass,
  barNumClass,
}: Props) {
  useEffect(() => {
    const cleanupFns: Array<() => void> = [];
    const timeouts: number[] = [];
    const intervals: number[] = [];

    // Visibility detector that works even when IntersectionObserver misbehaves
    // (iOS Safari with body overflow, etc). Uses IO + scroll + initial check.
    const onVisible = (el: Element, cb: () => void) => {
      let fired = false;
      const fire = () => {
        if (fired) return;
        fired = true;
        cleanup();
        cb();
      };
      const isInView = () => {
        const r = el.getBoundingClientRect();
        const vh = window.innerHeight || document.documentElement.clientHeight;
        return r.top < vh * 0.95 && r.bottom > 0;
      };
      const onScroll = () => {
        if (isInView()) fire();
      };
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) fire();
          });
        },
        { threshold: 0, rootMargin: "0px 0px -5% 0px" }
      );
      const cleanup = () => {
        io.disconnect();
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
        window.removeEventListener("touchmove", onScroll);
        document.removeEventListener("scroll", onScroll, true);
      };
      io.observe(el);
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll, { passive: true });
      window.addEventListener("touchmove", onScroll, { passive: true });
      document.addEventListener("scroll", onScroll, { passive: true, capture: true });
      cleanupFns.push(cleanup);
      // Initial check after layout settles
      requestAnimationFrame(() => {
        if (isInView()) fire();
      });
    };

    /* ============ MAP ============ */
    const stage = document.querySelector<HTMLElement>(`.${mapStageClass}`);
    const overlay = stage?.querySelector<SVGSVGElement>(`.${mapOverlayClass}`);
    const callout = stage?.querySelector<HTMLElement>(`.${mapCalloutClass}`);
    const readoutActive = document.getElementById("rd-active");
    const agri = TURKEY_CITIES.find((c) => c.pilot)!;

    if (stage && overlay) {
      overlay.innerHTML = "";

      const ripples = document.createElementNS(SVG_NS, "g");
      ripples.setAttribute("id", "ripples-grp");
      overlay.appendChild(ripples);

      const lines = document.createElementNS(SVG_NS, "g");
      lines.setAttribute("id", "lines-grp");
      lines.style.opacity = "0";
      lines.style.transition = "opacity 1.2s ease";
      overlay.appendChild(lines);

      TURKEY_CITIES.forEach((city: City) => {
        if (city.pilot) return;
        const circle = document.createElementNS(SVG_NS, "circle");
        circle.setAttribute("cx", String(city.x));
        circle.setAttribute("cy", String(city.y));
        circle.setAttribute("r", "2.5");
        circle.setAttribute("fill", "#C9E2DE");
        circle.setAttribute("stroke", "#0F766E");
        circle.setAttribute("stroke-width", "0.8");
        circle.style.opacity = "0";
        circle.style.transition = "opacity 0.5s ease";
        circle.setAttribute("data-city", city.name);
        overlay.appendChild(circle);
      });

      // Pilot pin (Ağrı)
      const pinGroup = document.createElementNS(SVG_NS, "g");
      pinGroup.setAttribute("id", "agri-pin");
      pinGroup.style.transformBox = "fill-box";
      pinGroup.style.transformOrigin = "center";
      pinGroup.style.transform = "scale(0) translateY(-20px)";
      pinGroup.style.opacity = "0";
      pinGroup.style.transition =
        "transform 0.8s cubic-bezier(0.34, 1.8, 0.64, 1), opacity 0.4s";

      const ring = document.createElementNS(SVG_NS, "circle");
      ring.setAttribute("cx", String(agri.x));
      ring.setAttribute("cy", String(agri.y));
      ring.setAttribute("r", "14");
      ring.setAttribute("fill", "none");
      ring.setAttribute("stroke", "#E8A33D");
      ring.setAttribute("stroke-width", "1.5");
      ring.setAttribute("opacity", "0.6");
      pinGroup.appendChild(ring);

      const inner = document.createElementNS(SVG_NS, "circle");
      inner.setAttribute("cx", String(agri.x));
      inner.setAttribute("cy", String(agri.y));
      inner.setAttribute("r", "7");
      inner.setAttribute("fill", "#E8A33D");
      inner.setAttribute("stroke", "#FDF8EF");
      inner.setAttribute("stroke-width", "2");
      pinGroup.appendChild(inner);

      const label = document.createElementNS(SVG_NS, "text");
      label.setAttribute("x", String(agri.x));
      label.setAttribute("y", String(agri.y - 20));
      label.setAttribute("text-anchor", "middle");
      label.setAttribute("fill", "#0F1F1C");
      label.setAttribute("font-size", "12");
      label.setAttribute("font-weight", "600");
      label.setAttribute("font-family", "Inter, sans-serif");
      label.textContent = "AĞRI";
      pinGroup.appendChild(label);

      overlay.appendChild(pinGroup);

      // Vision lines
      TURKEY_CITIES.forEach((city) => {
        if (city.pilot) return;
        const line = document.createElementNS(SVG_NS, "line");
        line.setAttribute("x1", String(agri.x));
        line.setAttribute("y1", String(agri.y));
        line.setAttribute("x2", String(city.x));
        line.setAttribute("y2", String(city.y));
        line.setAttribute("stroke", "#0F766E");
        line.setAttribute("stroke-width", "0.3");
        line.setAttribute("stroke-dasharray", "2 3");
        line.setAttribute("opacity", "0.3");
        lines.appendChild(line);
      });

      // Ripple circles
      for (let i = 0; i < 3; i++) {
        const r = document.createElementNS(SVG_NS, "circle");
        r.setAttribute("cx", String(agri.x));
        r.setAttribute("cy", String(agri.y));
        r.setAttribute("r", "14");
        r.setAttribute("fill", "none");
        r.setAttribute("stroke", "#E8A33D");
        r.setAttribute("stroke-width", "1");
        r.style.opacity = "0";
        r.setAttribute("data-ripple", String(i));
        ripples.appendChild(r);
      }
    }

    const runRipples = () => {
      const nodes = overlay?.querySelectorAll<SVGCircleElement>(
        "[data-ripple]"
      );
      if (!nodes) return;
      const once = () => {
        nodes.forEach((r, i) => {
          const t = window.setTimeout(() => {
            r.style.transition = "none";
            r.style.setProperty("r", "14px");
            r.style.opacity = "0.8";
            r.getBoundingClientRect();
            r.style.transition =
              "r 3.5s ease-out, opacity 3.5s ease-out";
            r.style.setProperty("r", "200px");
            r.style.opacity = "0";
          }, i * 800);
          timeouts.push(t);
        });
      };
      once();
      const iv = window.setInterval(once, 4500);
      intervals.push(iv);
    };

    const animateMap = () => {
      if (!stage || !overlay) return;

      timeouts.push(
        window.setTimeout(() => {
          const pin = document.getElementById("agri-pin");
          if (pin) {
            pin.style.opacity = "1";
            pin.style.transform = "scale(1) translateY(0)";
          }
        }, 300)
      );

      timeouts.push(
        window.setTimeout(() => {
          if (!callout) return;
          const rect = stage.getBoundingClientRect();
          callout.style.left = `${(agri.x / 1000) * rect.width - 200}px`;
          callout.style.top = `${(agri.y / 450) * rect.height - 20}px`;
          callout.dataset.show = "1";
        }, 1000)
      );

      timeouts.push(window.setTimeout(runRipples, 1500));

      const sorted = TURKEY_CITIES.filter((c) => !c.pilot)
        .map((c) => ({
          ...c,
          dist: Math.hypot(c.x - agri.x, c.y - agri.y),
        }))
        .sort((a, b) => a.dist - b.dist);

      sorted.forEach((c, idx) => {
        timeouts.push(
          window.setTimeout(() => {
            const el = overlay.querySelector<SVGCircleElement>(
              `[data-city="${c.name}"]`
            );
            if (el) {
              el.style.opacity = "1";
            }
            if (readoutActive) {
              const active = Math.min(1 + idx + 1, 81);
              readoutActive.textContent = String(active);
            }
          }, 1800 + idx * 35)
        );
      });

      timeouts.push(
        window.setTimeout(() => {
          const linesGrp = document.getElementById("lines-grp");
          if (linesGrp) linesGrp.style.opacity = "0.5";
        }, 4500)
      );
    };

    if (stage) onVisible(stage, animateMap);

    /* ============ COUNT UP ============ */
    const countUp = (el: HTMLElement, target: number, duration = 1800) => {
      const start = performance.now();
      const step = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = Math.round(target * eased);
        el.childNodes[0].nodeValue = val.toLocaleString("tr-TR");
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    document
      .querySelectorAll<HTMLElement>("[data-count]")
      .forEach((el) => {
        onVisible(el, () => {
          const target = parseInt(el.dataset.count ?? "0", 10);
          if (target && !el.dataset.counted) {
            el.dataset.counted = "1";
            countUp(el, target);
          }
        });
      });

    /* ============ CHART ============ */
    const bars = document.querySelector<HTMLElement>(`.${chartBarsClass}`);
    if (bars) {
      bars.innerHTML = "";
      QUARTER_DATA.forEach((q) => {
        const col = document.createElement("div");
        col.style.display = "flex";
        col.style.flexDirection = "row";
        col.style.gap = "4px";
        col.style.alignItems = "flex-end";
        col.style.height = "100%";
        col.innerHTML = `
          <div style="flex:1;position:relative;height:100%;display:flex;align-items:flex-end;">
            <div class="${barClass} ${barTargetClass}" data-h="${
              (q.target / CHART_MAX) * 100
            }" style="height:0%;width:100%;position:relative;">
              <div class="${barNumClass}" style="color:var(--teal);">${q.target}</div>
            </div>
          </div>
          <div style="flex:1;position:relative;height:100%;display:flex;align-items:flex-end;">
            <div class="${barClass} ${barActualClass}" data-h="${
              (q.actual / CHART_MAX) * 100
            }" style="height:0%;width:100%;position:relative;">
              <div class="${barNumClass}" style="color:var(--saffron-600);">${q.actual}</div>
            </div>
          </div>
        `;
        bars.appendChild(col);
      });

      onVisible(bars, () => {
        bars
          .querySelectorAll<HTMLElement>(`.${barClass}`)
          .forEach((bar, idx) => {
            const h = bar.dataset.h;
            const t = window.setTimeout(() => {
              if (h) bar.style.height = h + "%";
            }, idx * 60);
            timeouts.push(t);
          });
      });
    }

    return () => {
      timeouts.forEach((t) => window.clearTimeout(t));
      intervals.forEach((i) => window.clearInterval(i));
      cleanupFns.forEach((fn) => fn());
    };
  }, [
    mapStageClass,
    mapOverlayClass,
    mapCalloutClass,
    chartBarsClass,
    barClass,
    barTargetClass,
    barActualClass,
    barNumClass,
  ]);

  return null;
}
