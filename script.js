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
      .catch(() => { countEl.textContent = '—'; });
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
});
