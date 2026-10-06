// Echidna Educación – interacción mínima de las plantillas.
// Todo es mejora progresiva: sin JS la web se lee y navega igual.

(function () {
  const root = document.documentElement;

  // Tema claro/oscuro: preferencia guardada por visitante (opcional)
  const themeBtn = document.querySelector('.theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const isDark = root.dataset.theme
        ? root.dataset.theme === 'dark'
        : matchMedia('(prefers-color-scheme: dark)').matches;
      const next = isDark ? 'light' : 'dark';
      root.dataset.theme = next;
      try { localStorage.setItem('echidna-theme', next); } catch (e) {}
    });
  }

  // Menú móvil
  const menuBtn = document.querySelector('.menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  if (menuBtn && mobileNav) {
    const setOpen = (open) => {
      menuBtn.setAttribute('aria-expanded', String(open));
      mobileNav.hidden = !open;
      document.body.classList.toggle('menu-open', open);
    };
    menuBtn.addEventListener('click', () => setOpen(mobileNav.hidden));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !mobileNav.hidden) { setOpen(false); menuBtn.focus(); } });
    matchMedia('(min-width: 1100px)').addEventListener('change', (e) => { if (e.matches) setOpen(false); });
  }

  // Submenús de escritorio accesibles con teclado/clic
  document.querySelectorAll('.nav__item--has-sub > button').forEach((btn) => {
    const item = btn.parentElement;
    btn.addEventListener('click', () => {
      const open = !item.classList.contains('is-open');
      item.classList.toggle('is-open', open);
      btn.setAttribute('aria-expanded', String(open));
    });
    item.addEventListener('focusout', (e) => {
      if (!item.contains(e.relatedTarget)) { item.classList.remove('is-open'); btn.setAttribute('aria-expanded', 'false'); }
    });
  });

  // Buscador (en Astro se conectará con Pagefind)
  const dialog = document.getElementById('search-dialog');
  if (dialog) {
    const open = () => {
      if (mobileNav && !mobileNav.hidden) menuBtn.click();
      dialog.showModal();
      dialog.querySelector('input')?.focus();
    };
    document.querySelectorAll('[data-open-search]').forEach((b) => b.addEventListener('click', open));
    document.addEventListener('keydown', (e) => {
      const typing = /input|textarea|select/i.test(document.activeElement?.tagName || '');
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || (e.key === '/' && !typing)) { e.preventDefault(); open(); }
    });
    dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });
  }

  // Vídeos/presentaciones: el iframe solo se carga al pulsar (privacidad y rendimiento)
  document.querySelectorAll('.embed__poster[data-src]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const iframe = document.createElement('iframe');
      iframe.src = btn.dataset.src;
      iframe.title = btn.dataset.title || 'Contenido incrustado';
      iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen';
      iframe.allowFullscreen = true;
      btn.replaceWith(iframe);
    });
  });

  // Índice "En esta página": resalta la sección visible
  const tocLinks = [...document.querySelectorAll('.toc a[href^="#"]')];
  if (tocLinks.length && 'IntersectionObserver' in window) {
    const byId = new Map(tocLinks.map((a) => [a.getAttribute('href').slice(1), a]));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          tocLinks.forEach((a) => a.classList.remove('is-active'));
          byId.get(en.target.id)?.classList.add('is-active');
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px' });
    byId.forEach((_, id) => { const el = document.getElementById(id); if (el) io.observe(el); });
  }

  // Filtros de un índice de sección (en Astro los datos vendrán del front matter)
  document.querySelectorAll('[data-filter-group]').forEach((group) => {
    const target = document.querySelector(group.dataset.filterTarget);
    const count = document.querySelector('[data-result-count]');
    if (!target) return;
    group.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-filter]');
      if (!btn) return;
      group.querySelectorAll('button[data-filter]').forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
      const value = btn.dataset.filter;
      let visible = 0;
      target.querySelectorAll('[data-tags]').forEach((card) => {
        const show = value === 'todos' || card.dataset.tags.split(' ').includes(value);
        card.hidden = !show;
        if (show) visible++;
      });
      if (count) count.textContent = `${visible} ${visible === 1 ? 'resultado' : 'resultados'}`;
    });
  });

  // Imprimir
  document.querySelectorAll('[data-print]').forEach((b) => b.addEventListener('click', () => window.print()));

  // Volver arriba
  const toTop = document.querySelector('.to-top');
  if (toTop) {
    const onScroll = () => toTop.classList.toggle('is-visible', scrollY > 900);
    addEventListener('scroll', onScroll, { passive: true });
    toTop.addEventListener('click', () => scrollTo({ top: 0 }));
  }
})();
