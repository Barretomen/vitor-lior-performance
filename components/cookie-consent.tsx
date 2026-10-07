"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "vitor-lior-cookie-preferences-v1";

type Consent = "all" | "necessary";

export function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(!window.localStorage.getItem(STORAGE_KEY));
    const reopen = () => setOpen(true);
    window.addEventListener("open-cookie-preferences", reopen);
    return () => window.removeEventListener("open-cookie-preferences", reopen);
  }, []);

  function saveConsent(value: Consent) {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ value, updatedAt: new Date().toISOString() }),
    );
    setOpen(false);
  }

  if (!open) return null;

  return (
    <aside className="cookie-banner" aria-label="Preferências de privacidade" role="dialog" aria-live="polite">
      <div>
        <p className="cookie-kicker">PRIVACIDADE E COOKIES</p>
        <p>
          Este site usa apenas armazenamento necessário para lembrar suas preferências. Cookies opcionais
          de métricas ou marketing só poderão ser ativados com sua escolha. Saiba mais na{" "}
          <a href="/privacidade">Política de Privacidade</a>.
        </p>
      </div>
      <div className="cookie-actions">
        <button type="button" className="cookie-button secondary" onClick={() => saveConsent("necessary")}>RECUSAR OPCIONAIS</button>
        <button type="button" className="cookie-button primary" onClick={() => saveConsent("all")}>ACEITAR OPCIONAIS</button>
      </div>
    </aside>
  );
}

export function CookiePreferencesButton() {
  return (
    <button
      type="button"
      className="footer-privacy-button"
      onClick={() => window.dispatchEvent(new Event("open-cookie-preferences"))}
    >
      PREFERÊNCIAS DE COOKIES
    </button>
  );
}
