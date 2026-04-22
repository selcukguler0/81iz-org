"use client";

import { FormEvent, useState } from "react";

type Props = {
  formClass: string;
  labelClass: string;
  inputClass: string;
  textareaClass: string;
  footClass: string;
  submitClass: string;
  hintClass: string;
  successClass: string;
  successShowClass: string;
};

export default function LetterForm({
  formClass,
  labelClass,
  inputClass,
  textareaClass,
  footClass,
  submitClass,
  hintClass,
  successClass,
  successShowClass,
}: Props) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setSent(true);
    form.reset();
    window.setTimeout(() => setSent(false), 6000);
  }

  return (
    <form className={formClass} onSubmit={handleSubmit}>
      <label className={labelClass}>
        <span>Adın</span>
        <input
          type="text"
          name="name"
          required
          maxLength={40}
          placeholder="Aleyna"
          className={inputClass}
        />
      </label>
      <label className={labelClass}>
        <span>Mektubun</span>
        <textarea
          name="letter"
          required
          maxLength={600}
          rows={7}
          placeholder="Sevgili arkadaşım,&#10;"
          className={textareaClass}
        />
      </label>
      <div className={footClass}>
        <button type="submit" className={submitClass}>
          Mektubu Gönder <span aria-hidden>✒</span>
        </button>
        <span className={hintClass}>En fazla 600 karakter</span>
      </div>
      <div
        className={`${successClass} ${sent ? successShowClass : ""}`}
        role="status"
      >
        Mektubun saha ekibimize ulaştı. Teşekkürler. 🌱
      </div>
    </form>
  );
}
