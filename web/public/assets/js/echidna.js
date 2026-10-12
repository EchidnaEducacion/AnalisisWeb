// Echidna Educación – interacción mínima de las plantillas.
// Todo es mejora progresiva: sin JS la web se lee y navega igual.

(function () {
  const root = document.documentElement;

  // Tema claro/oscuro: preferencia guardada por visitante (opcional)
  // (hay dos botones: el de la cabecera y el del menú móvil)
  document.querySelectorAll('.theme-toggle').forEach((themeBtn) => {
    themeBtn.addEventListener('click', () => {
      const isDark = root.dataset.theme
        ? root.dataset.theme === 'dark'
        : matchMedia('(prefers-color-scheme: dark)').matches;
      const next = isDark ? 'light' : 'dark';
      root.dataset.theme = next;
      try { localStorage.setItem('echidna-theme', next); } catch (e) {}
    });
  });

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

  // Buscador: índice de Pagefind, que se genera al hacer el build (pagefind --site dist)
  const dialog = document.getElementById('search-dialog');
  if (dialog) {
    const input = dialog.querySelector('input');
    const results = dialog.querySelector('.results');
    // Rótulos de las secciones, en el orden del menú
    const secciones = {
      ecosistema: 'Ecosistema', alumnado: 'Materiales alumnado', docentes: 'Recursos docentes',
      blog: 'Blog', nosotros: 'Quiénes somos',
    };
    const escapar = (t) => String(t).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
    let pagefind;
    const cargar = () => {
      pagefind ??= import(dialog.dataset.pagefind + 'pagefind.js').then(async (pf) => {
        await pf.options({ excerptLength: 20 });
        pf.init();
        return pf;
      });
      return pagefind;
    };
    const estado = (texto) => { results.innerHTML = `<p class="search-status">${escapar(texto)}</p>`; };
    const buscar = async () => {
      const q = input.value.trim();
      if (!q) { results.innerHTML = ''; return; }
      let pf;
      try { pf = await cargar(); } catch { estado('El buscador no está disponible ahora mismo.'); return; }
      const busqueda = await pf.debouncedSearch(q, {}, 200);
      if (busqueda === null) return; // la ha sustituido otra búsqueda más reciente
      const datos = await Promise.all(busqueda.results.slice(0, 10).map((r) => r.data()));
      if (q !== input.value.trim()) return;
      if (!datos.length) { estado(`No hay resultados para «${q}».`); return; }
      const grupos = new Map(Object.keys(secciones).map((k) => [k, []]));
      datos.forEach((d) => {
        const k = d.meta.seccion in secciones ? d.meta.seccion : 'otras';
        if (!grupos.has(k)) grupos.set(k, []);
        grupos.get(k).push(d);
      });
      results.innerHTML = [...grupos].filter(([, lista]) => lista.length).map(([k, lista]) => `
        <h3>${escapar(secciones[k] || 'Otras páginas')}</h3>
        <ul>${lista.map((d) => {
          const contexto = [d.meta.contexto, d.meta.fecha].filter(Boolean).join(' · ');
          // El extracto lo devuelve Pagefind ya escapado y con <mark> en los términos buscados
          return `<li><a href="${escapar(d.url)}">${escapar(d.meta.title)}`
            + (contexto ? ` <small>${escapar(contexto)}</small>` : '')
            + `<span class="excerpt">${d.excerpt}</span></a></li>`;
        }).join('')}</ul>`).join('');
    };
    input.addEventListener('input', buscar);
    const open = () => {
      if (mobileNav && !mobileNav.hidden) menuBtn.click();
      dialog.showModal();
      input.focus();
      cargar().catch(() => {});
      buscar();
    };
    document.querySelectorAll('[data-open-search]').forEach((b) => b.addEventListener('click', open));
    document.addEventListener('keydown', (e) => {
      const typing = /input|textarea|select/i.test(document.activeElement?.tagName || '');
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || (e.key === '/' && !typing)) { e.preventDefault(); open(); }
    });
    dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });
    // Formularios de búsqueda de la página (p. ej. el de la 404): abren el buscador con el texto escrito
    document.querySelectorAll('[data-search-form]').forEach((form) => form.addEventListener('submit', (e) => {
      e.preventDefault();
      input.value = form.querySelector('input')?.value.trim() || input.value;
      open();
    }));
  }

  // Formulario de contacto: se envía a Web3Forms sin salir de la página (sin JS, Web3Forms muestra su propia página de confirmación)
  document.querySelectorAll('[data-contact-form]').forEach((form) => {
    const boton = form.querySelector('button[type="submit"]');
    const estado = form.querySelector('.form-status');
    const avisar = (texto, tipo) => {
      estado.textContent = texto;
      estado.className = `form-status form-status--${tipo}`;
      estado.hidden = false;
    };
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      // hCaptcha: el script de Web3Forms rellena h-captcha-response al marcar la casilla
      if (form.querySelector('.h-captcha') && !form.elements['h-captcha-response']?.value) {
        avisar('Marca la casilla «Soy humano» antes de enviar el mensaje.', 'error');
        return;
      }
      boton.disabled = true;
      avisar('Enviando el mensaje…', 'info');
      try {
        const respuesta = await fetch(form.action, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          // El asunto elegido va también en el asunto del correo
          body: JSON.stringify({ ...Object.fromEntries(new FormData(form)), subject: `Contacto web: ${form.elements.asunto?.value ?? ''}` }),
        });
        const datos = await respuesta.json().catch(() => ({}));
        if (!respuesta.ok || !datos.success) throw new Error(datos.message || respuesta.statusText);
        form.reset();
        avisar('¡Gracias! Hemos recibido tu mensaje y te responderemos lo antes posible.', 'ok');
      } catch (error) {
        console.error('Formulario de contacto:', error);
        avisar('No se ha podido enviar el mensaje. Inténtalo de nuevo dentro de un rato.', 'error');
      } finally {
        boton.disabled = false;
        window.hcaptcha?.reset(); // cada respuesta del captcha solo vale para un envío
      }
    });
  });

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
