// Configuration
const WHATSAPP_CONFIG = {
  phone: '91XXXXXXXXXX',
  message: 'Hi! I\'m interested in the Diabic Care Juice. Can you provide more details? Quantity: 1 bottle'
};

const TALLY_CONFIG = {
  formId: 'YOUR_TALLY_FORM_ID',
  options: {
    layout: 'modal',
    width: 600,
    alignLeft: false,
    hideTitle: false,
    overlay: true,
    emoji: { text: '🌿', animation: 'wave' },
    autoClose: 0
  }
};

// Image Slider Class
class ProductImageSlider {
  constructor(containerSelector) {
    this.container = document.querySelector(containerSelector);
    this.track = document.querySelector('#slider-track');
    this.slides = document.querySelectorAll('.slide');
    this.dots = document.querySelectorAll('.dot');
    this.prevBtn = document.querySelector('.slider-btn.prev');
    this.nextBtn = document.querySelector('.slider-btn.next');
    
    this.currentSlide = 0;
    this.totalSlides = this.slides.length;
    this.isAnimating = false;
    
    this.init();
  }
  
  init() {
    if (!this.track || !this.slides.length) return;
    
    // Event listeners
    this.prevBtn?.addEventListener('click', () => this.prevSlide());
    this.nextBtn?.addEventListener('click', () => this.nextSlide());
    
    // Dot navigation
    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => this.goToSlide(index));
    });
    
    // Touch/swipe support
    this.addTouchSupport();
    
    // Keyboard support
    this.addKeyboardSupport();
    
    // Auto-advance (optional)
    this.startAutoAdvance();
  }
  
  goToSlide(index) {
    if (this.isAnimating || index === this.currentSlide) return;
    
    this.isAnimating = true;
    this.currentSlide = index;
    
    // Update track position
    const translateX = -index * 100;
    this.track.style.transform = `translateX(${translateX}%)`;
    
    // Update active states
    this.updateActiveStates();
    
    // Reset animation flag
    setTimeout(() => {
      this.isAnimating = false;
    }, 400);
  }
  
  nextSlide() {
    const nextIndex = (this.currentSlide + 1) % this.totalSlides;
    this.goToSlide(nextIndex);
  }
  
  prevSlide() {
    const prevIndex = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
    this.goToSlide(prevIndex);
  }
  
  updateActiveStates() {
    // Update slide active class
    this.slides.forEach((slide, index) => {
      slide.classList.toggle('active', index === this.currentSlide);
    });
    
    // Update dot active class
    this.dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === this.currentSlide);
    });
  }
  
  addTouchSupport() {
    let startX = 0;
    let endX = 0;
    const minSwipeDistance = 50;
    
    this.container.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    }, { passive: true });
    
    this.container.addEventListener('touchend', (e) => {
      endX = e.changedTouches[0].clientX;
      const diffX = startX - endX;
      
      if (Math.abs(diffX) > minSwipeDistance) {
        if (diffX > 0) {
          this.nextSlide();
        } else {
          this.prevSlide();
        }
      }
    }, { passive: true });
  }
  
  addKeyboardSupport() {
    document.addEventListener('keydown', (e) => {
      if (!this.container.matches(':focus-within')) return;
      
      switch(e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          this.prevSlide();
          break;
        case 'ArrowRight':
          e.preventDefault();
          this.nextSlide();
          break;
      }
    });
  }
  
  startAutoAdvance() {
    // Optional: Auto-advance every 5 seconds when not interacting
    let autoTimer;
    
    const startAuto = () => {
      autoTimer = setInterval(() => {
        if (!document.hidden && !this.container.matches(':hover')) {
          this.nextSlide();
        }
      }, 5000);
    };
    
    const stopAuto = () => {
      clearInterval(autoTimer);
    };
    
    // Start auto-advance
    startAuto();
    
    // Pause on interaction
    this.container.addEventListener('mouseenter', stopAuto);
    this.container.addEventListener('mouseleave', startAuto);
    this.container.addEventListener('touchstart', stopAuto);
    
    // Pause when tab is not visible
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        stopAuto();
      } else {
        startAuto();
      }
    });
  }
}

// Quantity management
let currentQuantity = 1;

function buildWhatsAppLink({ phone, message, quantity = 1 }) {
  const baseUrl = 'https://wa.me/';
  const updatedMessage = message.replace('Quantity: 1 bottle', `Quantity: ${quantity} bottle${quantity > 1 ? 's' : ''}`);
  return `${baseUrl}${phone}?text=${encodeURIComponent(updatedMessage)}`;
}

function updateQuantity(newQuantity) {
  if (newQuantity < 1 || newQuantity > 10) return;
  
  currentQuantity = newQuantity;
  const quantityInput = document.getElementById('quantity');
  if (quantityInput) {
    quantityInput.value = currentQuantity;
  }
  updateBuyButton();
}

function updateBuyButton() {
  const buyBtn = document.getElementById('buy-now-btn');
  if (buyBtn) {
    buyBtn.href = buildWhatsAppLink({
      ...WHATSAPP_CONFIG,
      quantity: currentQuantity
    });
  }
}

// Initialize everything
function initLandingPage() {
  // Initialize image slider
  const slider = new ProductImageSlider('.image-slider');
  
  // Quantity controls
  const decreaseBtn = document.getElementById('decrease');
  const increaseBtn = document.getElementById('increase');
  const quantityInput = document.getElementById('quantity');
  
  decreaseBtn?.addEventListener('click', () => updateQuantity(currentQuantity - 1));
  increaseBtn?.addEventListener('click', () => updateQuantity(currentQuantity + 1));
  quantityInput?.addEventListener('change', (e) => {
    updateQuantity(parseInt(e.target.value) || 1);
  });
  
  // Initialize buy button
  updateBuyButton();
  
  // Tally form integration
  const knowMoreBtn = document.getElementById('know-more-btn');
  if (knowMoreBtn) {
    knowMoreBtn.addEventListener('click', () => {
      if (typeof Tally !== 'undefined') {
        Tally.openPopup(TALLY_CONFIG.formId, TALLY_CONFIG.options);
      } else {
        window.open(`https://tally.so/r/${TALLY_CONFIG.formId}`, '_blank');
      }
    });
  }
  
  // Add loading animation
  const productCard = document.querySelector('.product-card');
  if (productCard) {
    productCard.style.opacity = '0';
    productCard.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      productCard.style.transition = 'all 0.6s ease';
      productCard.style.opacity = '1';
      productCard.style.transform = 'translateY(0)';
    }, 200);
  }
}

// Tally form events
function setupTallyEvents() {
  if (typeof Tally !== 'undefined') {
    document.addEventListener('Tally.FormSubmitted', () => {
      setTimeout(() => {
        alert('Thank you! We will contact you soon with detailed information.');
      }, 1000);
    });
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initLandingPage();
  setupTallyEvents();
});

// Error handling
window.addEventListener('error', (e) => {
  console.error('Landing page error:', e);
});
