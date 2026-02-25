/* ═══════════════════════════════════════════════════════════════
   menu.js — Gestione tab del menu (menu.html)
═══════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  const tabs   = document.querySelectorAll('.menu-tab');
  const panels = document.querySelectorAll('.menu-panel');

  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // rimuovi active da tutti
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      panels.forEach(p => p.classList.remove('active'));

      // attiva quello cliccato
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const target = document.getElementById('panel-' + tab.dataset.panel);
      if (target) target.classList.add('active');
    });
  });

  /* ── Apertura tab da URL hash (#pizza, #pesce …) ─────────── */
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    const matchingTab = document.querySelector(`.menu-tab[data-panel="${hash}"]`);
    if (matchingTab) matchingTab.click();
  }

});
