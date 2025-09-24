// Basic state
const slides = Array.from(document.querySelectorAll('.slide'));
const slidesTrack = document.querySelector('.slides');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
let index = 0;

function updateCarousel() {
  slides.forEach((s, i) => s.classList.toggle('is-active', i === index));
  slidesTrack.style.transform = `translateX(-${index * 100}%)`;
}
function next() { index = (index + 1) % slides.length; updateCarousel(); }
function prev() { index = (index - 1 + slides.length) % slides.length; updateCarousel(); }

prevBtn?.addEventListener('click', prev);
nextBtn?.addEventListener('click', next);
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') next();
  if (e.key === 'ArrowLeft') prev();
});
updateCarousel();

// WhatsApp link helper (official click-to-chat format, supports prefilled text)
function buildWaLink({ phone, text }) {
  // phone in international format without +, spaces, or punctuation
  const base = 'https://wa.me/';
  const msg = text ? `?text=${encodeURIComponent(text)}` : '';
  return `${base}${phone}${msg}`;
}

// Attach shop buttons
const waPhone = '91XXXXXXXXXX'; // replace with real number in international format
const waText = 'Hi, I am interested in your herbal product.';
['hero-shop','grid-shop','product-shop','cta-shop'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.href = buildWaLink({ phone: waPhone, text: waText });
});

// Herb pins tooltip
const tooltip = document.getElementById('pin-tooltip');
document.querySelectorAll('.pin').forEach(pin => {
  pin.addEventListener('mouseenter', () => {
    if (!tooltip) return;
    tooltip.textContent = pin.dataset.name || '';
    tooltip.classList.add('is-visible');
  });
  pin.addEventListener('mouseleave', () => tooltip?.classList.remove('is-visible'));
});

// Email subscribe (demo-only)
const form = document.querySelector('.subscribe-form');
const note = document.querySelector('.subscribe-form .form-note');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = new FormData(form).get('email');
  note.textContent = `Thanks! Updates will be sent to ${email}.`;
});

// Tally or Typeform embed initialization (choose one vendor)

// Tally: if using their script, it will auto-populate iframe src from data-tally-src
// Paste the official Tally embed script in index.html near the iframe if needed.

// Typeform: Embed SDK example (uncomment when SDK script is added)
/*
import { createPopup, createWidget } from '@typeform/embed';

const tfMount = document.getElementById('typeform-embed');
if (tfMount) {
  tfMount.hidden = false;
  createWidget('FORM_ID', { // replace FORM_ID
    container: tfMount,
    width: '100%',
    height: 480
  });
}
*/
