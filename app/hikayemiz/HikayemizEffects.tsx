"use client";

import { useEffect } from "react";

type Props = {
  starsClass: string;
  starClass: string;
  mountainsClass: string;
  heroClass: string;
  revealClass: string;
  visibleClass: string;
};

export default function HikayemizEffects({
  starsClass,
  starClass,
  mountainsClass,
  heroClass,
  revealClass,
  visibleClass,
}: Props) {
  useEffect(() => {
    const container = document.querySelector<HTMLDivElement>(`.${starsClass}`);
    if (container && container.childElementCount === 0) {
      for (let i = 0; i < 60; i++) {
        const star = document.createElement("div");
        star.className = starClass;
        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";
        star.style.animationDelay = Math.random() * 3 + "s";
        star.style.animationDuration = 2 + Math.random() * 3 + "s";
        const size = Math.random() > 0.85 ? 3 : Math.random() > 0.5 ? 2 : 1;
        star.style.width = size + "px";
        star.style.height = size + "px";
        container.appendChild(star);
      }
    }

    const reveals = document.querySelectorAll<HTMLElement>(`.${revealClass}`);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const parent = entry.target.parentElement;
            const siblings = parent
              ? parent.querySelectorAll<HTMLElement>(`.${revealClass}`)
              : [];
            let delay = 0;
            siblings.forEach((sib, i) => {
              if (sib === entry.target) delay = i * 0.12;
            });
            (entry.target as HTMLElement).style.transitionDelay = delay + "s";
            entry.target.classList.add(visibleClass);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    reveals.forEach((el) => observer.observe(el));

    const mountains = document.querySelector<SVGElement>(`.${mountainsClass}`);
    const hero = document.querySelector<HTMLElement>(`.${heroClass}`);
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          if (mountains && hero && scrolled < hero.offsetHeight) {
            mountains.style.transform = `translateY(${scrolled * 0.15}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [
    starsClass,
    starClass,
    mountainsClass,
    heroClass,
    revealClass,
    visibleClass,
  ]);

  return null;
}
