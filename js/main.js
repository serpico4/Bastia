/* ═══════════════════════════════════════════════════════════════
   main.js — Script condiviso La Bastia
   (navbar scroll, mobile menu, scroll-top, active nav link)
═══════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Navbar scroll effect ──────────────────────────────────── */
  const navbar = document.getElementById('navbar');

  if (navbar) {
    // Le pagine interne hanno la navbar sempre scura
    if (navbar.classList.contains('always-dark')) {
      navbar.classList.add('scrolled');
    }

    window.addEventListener('scroll', () => {
      if (!navbar.classList.contains('always-dark')) {
        navbar.classList.toggle('scrolled', window.scrollY > 60);
      }
    }, { passive: true });
  }

  /* ── Scroll-top button ─────────────────────────────────────── */
  const scrollTopBtn = document.getElementById('scroll-top');

  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ── Mobile menu ───────────────────────────────────────────── */
  const navToggle  = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('active');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Chiudi al click su un link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Chiudi con tasto ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  /* ── Active nav link (basato sull'URL corrente) ────────────── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;

    const linkPage = href.split('/').pop().split('#')[0];

    if (
      (currentPage === 'index.html' || currentPage === '') && linkPage === 'index.html'  ||
      currentPage === 'menu.html'     && linkPage === 'menu.html'     ||
      currentPage === 'contatti.html' && linkPage === 'contatti.html'
    ) {
      link.classList.add('active');
    }
  });

});
