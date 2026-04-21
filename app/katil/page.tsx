import type { Metadata } from "next";
import { Suspense } from "react";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import KatilForm from "./KatilForm";

export const metadata: Metadata = {
  title: "81iz — Ekosisteme Katıl",
  description:
    "Bağışçı, sosyal melek yatırımcı, mentör ya da basın — 81iz ekosisteminde kendine uygun katılım yolunu seç.",
};

export default function KatilPage() {
  return (
    <>
      <SiteNav active="katil" />
      <Suspense fallback={null}>
        <KatilForm />
      </Suspense>
      <SiteFooter />
    </>
  );
}
