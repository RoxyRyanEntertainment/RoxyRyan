// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links){
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
    });
  }

  // Mark active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')){
      a.classList.add('active');
    }
  });

  // Newsletter forms (front-end only placeholder)
  document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input');
      const btn = form.querySelector('button');
      const original = btn.textContent;
      btn.textContent = 'Bedankt!';
      if (input) input.value = '';
      setTimeout(() => { btn.textContent = original; }, 2500);
    });
  });

  // Booking form (front-end only placeholder)
  const bookingForm = document.querySelector('.booking-form');
  if (bookingForm){
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const confirmBox = document.querySelector('.booking-confirm');
      bookingForm.reset();
      if (confirmBox) confirmBox.hidden = false;
    });
  }

  // Gallery filter tabs (visual toggle)
  const tabs = document.querySelectorAll('.gallery-tabs button');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  // Simple lightbox for gallery + agenda flyers
  const galleryItems = document.querySelectorAll('.gallery-item, .event-flyer');
  const lightbox = document.querySelector('.lightbox');
  if (galleryItems.length && lightbox){
    const lightboxImg = lightbox.querySelector('img');
    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const src = item.querySelector('img').getAttribute('src');
        lightboxImg.setAttribute('src', src);
        lightbox.classList.add('open');
      });
    });
    lightbox.addEventListener('click', () => lightbox.classList.remove('open'));
  }

  // Visitor counter (footer, every page)
  const countEl = document.getElementById('visitor-count');
  if (countEl){
    const ns = (location.hostname || 'roxyryan-site').replace(/[^a-z0-9]/gi, '-');
    fetch('https://abacus.jasoncameron.dev/hit/' + ns + '/site-visits-v2')
      .then(r => r.json())
      .then(d => { countEl.textContent = d.value.toLocaleString('nl-BE'); })
      .catch(() => { countEl.textContent = '…'; });
  }

  // Agenda: verlopen shows automatisch verbergen op basis van data-end-date
  const eventCards = Array.from(document.querySelectorAll('.event-card[data-end-date]'));
  if (eventCards.length){
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    eventCards.forEach(card => {
      const endDate = new Date(card.dataset.endDate + 'T23:59:59');
      if (endDate < today){
        let divider = card.nextElementSibling;
        if (!(divider && divider.classList && divider.classList.contains('event-divider'))){
          divider = card.previousElementSibling;
        }
        if (divider && divider.classList && divider.classList.contains('event-divider')){
          divider.remove();
        }
        card.remove();
      }
    });
    const remaining = document.querySelectorAll('.event-card').length;
    const emptyMsg = document.querySelector('.event-empty');
    if (remaining === 0 && emptyMsg){
      emptyMsg.hidden = false;
    }
  }

  // Hartje onderaan: aanklikken kleurt het roze (wordt onthouden in deze browser)
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const heart = document.querySelector('.footer-bottom .heart');
  if (heart){
    let liked = false;
    try { liked = localStorage.getItem('roxy-heart') === '1'; } catch (e) {}
    const setHeart = (on) => {
      heart.classList.toggle('is-on', on);
      heart.setAttribute('aria-pressed', on ? 'true' : 'false');
    };
    setHeart(liked);
    heart.addEventListener('click', () => {
      liked = !liked;
      setHeart(liked);
      try { localStorage.setItem('roxy-heart', liked ? '1' : '0'); } catch (e) {}
      if (liked && !reduceMotion){
        const r = heart.getBoundingClientRect();
        for (let i = 0; i < 8; i++){
          const b = document.createElement('span');
          b.className = 'heart-burst';
          b.textContent = i % 2 ? '✦' : '♥';
          const a = (Math.PI * 2 * i) / 8;
          b.style.left = (r.left + r.width / 2) + 'px';
          b.style.top = (r.top + r.height / 2) + 'px';
          b.style.setProperty('--dx', Math.cos(a) * 34 + 'px');
          b.style.setProperty('--dy', Math.sin(a) * 34 + 'px');
          document.body.appendChild(b);
          setTimeout(() => b.remove(), 850);
        }
      }
    });
  }

  // Strass-glinstering: lichtstreep en twinkelende sterretjes over galerijfoto's
  if (window.matchMedia('(hover: hover)').matches && !reduceMotion){
    document.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('mouseenter', () => {
        for (let i = 0; i < 4; i++){
          setTimeout(() => {
            const t = document.createElement('span');
            t.className = 'strass-twinkle';
            t.textContent = '✦';
            t.style.left = (10 + Math.random() * 75) + '%';
            t.style.top = (10 + Math.random() * 75) + '%';
            t.style.fontSize = (10 + Math.random() * 10) + 'px';
            item.appendChild(t);
            setTimeout(() => t.remove(), 950);
          }, i * 140);
        }
      });
    });
  }

  // Icoontjes op de homepagina kleuren goud bij klikken
  document.querySelectorAll('.feature').forEach(f => {
    f.addEventListener('click', (e) => {
      if (f.tagName === 'A' && !e.metaKey && !e.ctrlKey && !e.shiftKey){
        e.preventDefault();
        f.classList.add('is-gold');
        setTimeout(() => { location.href = f.href; }, reduceMotion ? 0 : 280);
      } else {
        f.classList.toggle('is-gold');
      }
    });
  });
  window.addEventListener('pageshow', () => {
    document.querySelectorAll('.feature.is-gold').forEach(f => f.classList.remove('is-gold'));
  });

  // Geheim woord: typ "roxy" (of tik 5 keer op het logo onderaan) voor een pluimenregen
  const featherRain = () => {
    if (reduceMotion) return;
    const tints = [['#ff2f9e', '#ff8fcf'], ['#8e3fd1', '#c79bf2'], ['#c9a15c', '#f2dca6'], ['#6a2c91', '#b07ae0']];
    const count = window.innerWidth < 700 ? 22 : 40;
    for (let n = 0; n < count; n++){
      setTimeout(() => {
        const [c1, c2] = tints[Math.floor(Math.random() * tints.length)];
        const f = document.createElement('div');
        f.className = 'feather';
        const size = 40 + Math.random() * 45;
        const id = 'fg' + Math.random().toString(36).slice(2, 8);
        let barbs = '';
        for (let t = 0.06; t <= 0.97; t += 0.035){
          const sy = 4 + t * 72, sx = 20 + Math.sin(t * 3.1) * 2.5;
          const len = 15 * Math.pow(Math.sin(Math.PI * Math.min(t * 1.05, 1)), 0.6) + 2;
          const wob = () => (Math.random() * 3 - 1.5).toFixed(1);
          barbs += 'M' + sx.toFixed(1) + ' ' + sy.toFixed(1) + 'q' + (-len * 0.5) + ' ' + (len * 0.15 + +wob()) + ' ' + (-len) + ' ' + (len * 0.55 + +wob());
          barbs += 'M' + sx.toFixed(1) + ' ' + sy.toFixed(1) + 'q' + (len * 0.5) + ' ' + (len * 0.15 + +wob()) + ' ' + len + ' ' + (len * 0.55 + +wob());
        }
        f.innerHTML = '<svg width="' + size + '" height="' + (size * 2) + '" viewBox="0 0 40 90" aria-hidden="true" style="overflow:visible">' +
          '<defs><linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + c2 + '"/><stop offset="1" stop-color="' + c1 + '"/></linearGradient></defs>' +
          '<path d="' + barbs + '" fill="none" stroke="url(#' + id + ')" stroke-width="1.5" stroke-linecap="round" opacity=".9"/>' +
          '<path d="M20 2Q22.5 40 20.5 88" fill="none" stroke="#fff4d6" stroke-width="1.1" stroke-linecap="round" opacity=".9"/>' +
          '</svg>';
        f.style.left = (Math.random() * 95) + 'vw';
        const dur = 4 + Math.random() * 3;
        f.style.animationDuration = dur + 's';
        f.firstChild.style.animationDelay = (-Math.random() * 1.6) + 's';
        document.body.appendChild(f);
        setTimeout(() => f.remove(), dur * 1000 + 100);
      }, n * 90);
    }
  };
  let typed = '';
  document.addEventListener('keydown', (e) => {
    const tag = (e.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea' || e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.key.length !== 1) return;
    typed = (typed + e.key.toLowerCase()).slice(-4);
    if (typed === 'roxy'){ typed = ''; featherRain(); }
  });
  const footerLogo = document.querySelector('.footer-brand img');
  if (footerLogo){
    let taps = 0, tapTimer;
    footerLogo.addEventListener('click', () => {
      taps++;
      clearTimeout(tapTimer);
      tapTimer = setTimeout(() => { taps = 0; }, 1500);
      if (taps >= 5){ taps = 0; featherRain(); }
    });
  }
});
