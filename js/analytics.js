/* ═══════════════════════════════════════════════════════════════
   analytics.js — Google Analytics 4 con consenso GDPR / Garante
   ISTRUZIONE: sostituire 'G-XXXXXXXXXX' con il proprio ID GA4
   (lo trovi su analytics.google.com dopo aver creato la proprietà)
═══════════════════════════════════════════════════════════════ */

(function () {
  var GA_ID  = 'G-XXXXXXXXXX'; // ← inserire qui il proprio Measurement ID
  var KEY    = 'la_bastia_consent';

  /* ── Carica GA4 solo dopo il consenso ─────────────────────── */
  function loadGA() {
    if (window._gaLoaded) return;
    window._gaLoaded = true;

    var s   = document.createElement('script');
    s.src   = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    s.async = true;
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_ID, {
      anonymize_ip: true,          // anonimizza IP (buona pratica GDPR)
      cookie_flags: 'SameSite=None;Secure'
    });
  }

  /* ── Mostra/nascondi banner ────────────────────────────────── */
  function showBanner() {
    var b = document.getElementById('cookie-banner');
    if (b) b.removeAttribute('hidden');
  }

  function hideBanner() {
    var b = document.getElementById('cookie-banner');
    if (b) b.setAttribute('hidden', '');
  }

  /* ── Gestione pulsanti ────────────────────────────────────── */
  function initButtons() {
    var btnOk  = document.getElementById('cookie-accept');
    var btnNo  = document.getElementById('cookie-reject');

    if (btnOk) {
      btnOk.addEventListener('click', function () {
        localStorage.setItem(KEY, 'accepted');
        hideBanner();
        loadGA();
      });
    }

    if (btnNo) {
      btnNo.addEventListener('click', function () {
        localStorage.setItem(KEY, 'rejected');
        hideBanner();
      });
    }
  }

  /* ── Avvio ─────────────────────────────────────────────────── */
  var consent = localStorage.getItem(KEY);

  if (consent === 'accepted') {
    // Consenso già dato → carica subito
    loadGA();
  } else if (consent === null) {
    // Prima visita → mostra banner quando il DOM è pronto
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () {
        showBanner();
        initButtons();
      });
    } else {
      showBanner();
      initButtons();
    }
  }
  // Se 'rejected' → non caricare nulla e non mostrare di nuovo il banner
})();
