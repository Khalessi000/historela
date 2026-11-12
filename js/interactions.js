/**
 * HISTORELA — BOOKS AND TOYS
 * Native Interactions & Interactive Behaviors
 */

import { PRODUCTS, CATEGORIES, BRAND_VALUES } from './products.js';

// Application State
export const state = {
  cart: [
    {
      productId: 'arch-solitude',
      quantity: 1
    }
  ],
  selectedCategory: 'all',
  quizSelections: {
    mood: 'contemplative',
    genre: 'fiction',
    pace: 'reflective',
    format: 'hardcover'
  },
  modalProduct: null,
  isCartOpen: false,
  isSearchOpen: false
};

// DOM Elements cache (populated on init)
let elements = {};

/**
 * Initialize interactions
 */
export function initInteractions() {
  cacheElements();
  setupScrollListener();
  setupIntersectionObserver();
  setupTrendingCarousel();
  setupCategoriesFilter();
  setupQuiz();
  setupModals();
  setupCartDrawer();
  setupSearch();
  setupForms();
  initAboutInteractiveBook();
  renderTrendingBooks();
  renderCategoryCards();
  renderCatalogBooks();
  updateCartUI();
  calculateQuizRecommendation();
}

/**
 * Cache recurring DOM elements
 */
function cacheElements() {
  elements = {
    header: document.querySelector('.site-header'),
    mobileToggle: document.querySelector('.mobile-toggle'),
    navLinks: document.querySelector('.nav-links'),
    trendingContainer: document.getElementById('trending-container'),
    trendingPrevBtn: document.getElementById('trending-prev'),
    trendingNextBtn: document.getElementById('trending-next'),
    categoryTabsContainer: document.getElementById('category-tabs'),
    categoryCardsContainer: document.getElementById('category-cards'),
    catalogGrid: document.getElementById('catalog-grid'),
    cartBtn: document.getElementById('cart-toggle-btn'),
    cartBadge: document.getElementById('cart-badge'),
    cartDrawerBackdrop: document.getElementById('cart-drawer-backdrop'),
    cartCloseBtn: document.getElementById('cart-close-btn'),
    cartItemsList: document.getElementById('cart-items-list'),
    cartSubtotal: document.getElementById('cart-subtotal'),
    cartShippingMeter: document.getElementById('shipping-meter-fill'),
    cartShippingText: document.getElementById('shipping-meter-text'),
    cartCheckoutBtn: document.getElementById('cart-checkout-btn'),
    searchBtn: document.getElementById('search-toggle-btn'),
    searchBackdrop: document.getElementById('search-backdrop'),
    searchInput: document.getElementById('search-input'),
    searchResults: document.getElementById('search-results'),
    searchCloseBtn: document.getElementById('search-close-btn'),
    productModalBackdrop: document.getElementById('product-modal-backdrop'),
    productModalDialog: document.getElementById('product-modal-dialog'),
    productModalCloseBtn: document.getElementById('modal-close-btn'),
    toast: document.getElementById('toast-notification')
  };
}

/**
 * Header scroll state
 */
function setupScrollListener() {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      elements.header?.classList.add('scrolled');
    } else {
      elements.header?.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile menu toggle
  elements.mobileToggle?.addEventListener('click', () => {
    const isOpen = elements.navLinks?.classList.toggle('open');
    elements.mobileToggle?.classList.toggle('active', isOpen);
  });

  // Close mobile menu when clicking link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      elements.navLinks?.classList.remove('open');
      elements.mobileToggle?.classList.remove('active');
    });
  });
}

/**
 * Intersection Observer for subtle editorial fade entrances
 */
function setupIntersectionObserver() {
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

/**
 * Render Trending Books in horizontal scroll carousel
 */
export function renderTrendingBooks() {
  if (!elements.trendingContainer) return;

  const trendingItems = PRODUCTS.filter(p => p.isTrending);

  elements.trendingContainer.innerHTML = trendingItems.map(product => `
    <article class="book-card" data-product-id="${product.id}">
      <div class="book-card-image-wrap">
        <span class="book-card-badge ${product.badge.includes('Trending') ? 'terracotta' : 'gold'}">${product.badge}</span>
        <div class="book-cover-mockup" style="background-color: ${product.accentColor};" onclick="window.historela.openProductModal('${product.id}')">
          <img src="${product.image}" alt="${product.title}" loading="lazy" referrerpolicy="no-referrer" />
        </div>
      </div>
      <div class="book-card-body">
        <span class="book-card-category">${product.categoryName}</span>
        <h4 class="book-card-title" onclick="window.historela.openProductModal('${product.id}')">${product.title}</h4>
        <div class="book-card-author">By ${product.author}</div>
        <div class="book-card-publisher">${product.publisher}</div>
        <div class="book-card-footer">
          <div class="book-card-price-group">
            <span class="book-card-price">$${product.price.toFixed(2)}</span>
            ${product.originalPrice ? `<span class="book-card-original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
          </div>
          <button class="btn-card-add" title="Add to Bag" onclick="window.historela.addToCart('${product.id}')">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

/**
 * Trending Carousel Controls
 */
function setupTrendingCarousel() {
  elements.trendingPrevBtn?.addEventListener('click', () => {
    if (elements.trendingContainer) {
      elements.trendingContainer.scrollBy({ left: -360, behavior: 'smooth' });
    }
  });

  elements.trendingNextBtn?.addEventListener('click', () => {
    if (elements.trendingContainer) {
      elements.trendingContainer.scrollBy({ left: 360, behavior: 'smooth' });
    }
  });
}

/**
 * Render Literary Categories & Bento cards
 */
export function renderCategoryCards() {
  if (!elements.categoryCardsContainer) return;

  const displayCats = CATEGORIES.filter(c => c.id !== 'all').slice(0, 6);

  elements.categoryCardsContainer.innerHTML = displayCats.map(cat => `
    <div class="category-editorial-card" onclick="window.historela.selectCategory('${cat.id}')">
      <div>
        <div class="category-card-count">${cat.count} Curated Editions</div>
        <h3 class="category-card-name">${cat.name}</h3>
        <p class="category-card-desc">${cat.description}</p>
      </div>
      <div class="category-card-arrow">
        Explore Collection
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </div>
    </div>
  `).join('');
}

/**
 * Setup category filter tabs
 */
function setupCategoriesFilter() {
  if (!elements.categoryTabsContainer) return;

  elements.categoryTabsContainer.innerHTML = CATEGORIES.map(cat => `
    <button class="category-tab-btn ${cat.id === state.selectedCategory ? 'active' : ''}" data-cat-id="${cat.id}">
      ${cat.name} (${cat.count})
    </button>
  `).join('');

  elements.categoryTabsContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.category-tab-btn');
    if (btn) {
      const catId = btn.getAttribute('data-cat-id');
      selectCategory(catId);
    }
  });
}

export function selectCategory(catId) {
  state.selectedCategory = catId;
  document.querySelectorAll('.category-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-cat-id') === catId);
  });
  renderCatalogBooks();

  // Scroll smoothly to catalog section if triggered from category card
  const catalogSection = document.getElementById('catalog');
  if (catalogSection) {
    catalogSection.scrollIntoView({ behavior: 'smooth' });
  }
}

/**
 * Render Catalog Books based on selected category
 */
export function renderCatalogBooks() {
  if (!elements.catalogGrid) return;

  const filtered = state.selectedCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === state.selectedCategory);

  if (filtered.length === 0) {
    elements.catalogGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
        <h3 style="font-family: var(--font-h1); font-size: 1.8rem; margin-bottom: 0.5rem;">No editions found in this archive.</h3>
        <p style="color: #64748b;">Please select another category or view all available titles.</p>
        <button class="cta-btn cta-secondary" style="margin-top: 1.5rem;" onclick="window.historela.selectCategory('all')">
          View All Titles
        </button>
      </div>
    `;
    return;
  }

  elements.catalogGrid.innerHTML = filtered.map(product => `
    <article class="book-card" data-product-id="${product.id}">
      <div class="book-card-image-wrap">
        <span class="book-card-badge ${product.badge.includes('Trending') ? 'terracotta' : 'gold'}">${product.badge}</span>
        <div class="book-cover-mockup" style="background-color: ${product.accentColor};" onclick="window.historela.openProductModal('${product.id}')">
          <img src="${product.image}" alt="${product.title}" loading="lazy" referrerpolicy="no-referrer" />
        </div>
      </div>
      <div class="book-card-body">
        <span class="book-card-category">${product.categoryName}</span>
        <h4 class="book-card-title" onclick="window.historela.openProductModal('${product.id}')">${product.title}</h4>
        <div class="book-card-author">By ${product.author}</div>
        <div class="book-card-publisher">${product.publisher}</div>
        <div class="book-card-footer">
          <div class="book-card-price-group">
            <span class="book-card-price">$${product.price.toFixed(2)}</span>
            ${product.originalPrice ? `<span class="book-card-original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
          </div>
          <div style="display: flex; gap: 0.5rem;">
            <button class="cta-btn cta-secondary" style="padding: 0.5rem 0.85rem; font-size: 0.75rem;" onclick="window.historela.openProductModal('${product.id}')">
              Details
            </button>
            <button class="btn-card-add" title="Add to Bag" onclick="window.historela.addToCart('${product.id}')">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </article>
  `).join('');
}

/**
 * Personalized Recommendations Discovery Quiz
 */
function setupQuiz() {
  document.querySelectorAll('.quiz-option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.getAttribute('data-group');
      const val = btn.getAttribute('data-val');

      // Update state
      state.quizSelections[group] = val;

      // Update UI selection within group
      document.querySelectorAll(`.quiz-option-btn[data-group="${group}"]`).forEach(b => {
        b.classList.toggle('selected', b === btn);
      });

      calculateQuizRecommendation();
    });
  });
}

function calculateQuizRecommendation() {
  const resultBox = document.getElementById('quiz-result-box');
  if (!resultBox) return;

  const { mood, genre } = state.quizSelections;

  // Find best match or fallback to top match
  let match = PRODUCTS.find(p => p.category === genre || p.matchTags?.mood === mood);
  if (!match) match = PRODUCTS[0];

  resultBox.innerHTML = `
    <div class="recommendation-match-card">
      <div class="book-cover-mockup" style="background-color: ${match.accentColor}; width: 140px; height: 200px; margin: 0 auto;" onclick="window.historela.openProductModal('${match.id}')">
        <img src="${match.image}" alt="${match.title}" referrerpolicy="no-referrer" />
      </div>
      <div>
        <div style="font-family: var(--font-ui); font-size: 0.72rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--color-gold); margin-bottom: 0.35rem;">
          98% Literary Affinity Match
        </div>
        <h3 style="font-family: var(--font-h1); font-size: 1.85rem; color: var(--color-bone); line-height: 1.15; margin-bottom: 0.35rem;">
          ${match.title}
        </h3>
        <div style="font-size: 0.85rem; color: rgba(250, 245, 234, 0.75); margin-bottom: 0.85rem;">
          By ${match.author} · ${match.categoryName}
        </div>
        <p style="font-size: 0.9rem; color: rgba(250, 245, 234, 0.9); line-height: 1.6; margin-bottom: 1.25rem;">
          ${match.synopsis}
        </p>
        <div style="display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;">
          <button class="cta-btn cta-gold" onclick="window.historela.addToCart('${match.id}')">
            Add Edition to Bag · $${match.price.toFixed(2)}
          </button>
          <button class="cta-btn cta-secondary" style="border-color: rgba(250,245,234,0.4); color: var(--color-bone);" onclick="window.historela.openProductModal('${match.id}')">
            Read Full Synopsis
          </button>
        </div>
      </div>
    </div>
  `;
}

/**
 * Product Detail Modal
 */
function setupModals() {
  elements.productModalCloseBtn?.addEventListener('click', closeProductModal);
  elements.productModalBackdrop?.addEventListener('click', (e) => {
    if (e.target === elements.productModalBackdrop) {
      closeProductModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProductModal();
      closeCartDrawer();
      closeSearch();
    }
  });
}

export function openProductModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product || !elements.productModalDialog) return;

  state.modalProduct = product;

  elements.productModalDialog.innerHTML = `
    <button class="modal-close-btn" id="modal-close-btn" onclick="window.historela.closeProductModal()" aria-label="Close modal">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
    <div class="modal-content-grid">
      <div class="modal-gallery">
        <div class="modal-cover-frame" style="background-color: ${product.accentColor};">
          <img src="${product.image}" alt="${product.title}" referrerpolicy="no-referrer" />
        </div>
        <div style="font-family: var(--font-ui); font-size: 0.75rem; color: var(--color-turquoise); text-align: center; margin-top: 1rem; letter-spacing: 0.05em;">
          ${product.badge} · In Stock
        </div>
      </div>
      <div class="modal-info-panel">
        <span class="metadata-tag gold">${product.categoryName}</span>
        <h2 class="modal-title">${product.title}</h2>
        <div class="modal-author">Written by ${product.author} · Published by ${product.publisher}</div>
        
        <div class="modal-price-row">
          <span class="modal-price">$${product.price.toFixed(2)}</span>
          ${product.originalPrice ? `<span class="book-card-original-price" style="font-size: 1.1rem;">$${product.originalPrice.toFixed(2)}</span>` : ''}
          <span style="font-size: 0.8rem; color: var(--color-turquoise); font-weight: 500; margin-left: auto;">
            Complimentary Bookplate with Order
          </span>
        </div>

        <p style="font-size: 0.95rem; line-height: 1.7; color: #1e3557; margin-bottom: 1.25rem;">
          ${product.synopsis}
        </p>

        <div style="font-family: var(--font-h2); font-style: italic; font-size: 1.1rem; color: var(--color-turquoise); padding-left: 1rem; border-left: 2px solid var(--color-gold); margin-bottom: 1.5rem;">
          ${product.quote}
        </div>

        <div class="modal-specs-table">
          <div class="meta-field">
            <span class="meta-field-label">ISBN-13</span>
            <span class="meta-field-val">${product.specs.isbn}</span>
          </div>
          <div class="meta-field">
            <span class="meta-field-label">Format</span>
            <span class="meta-field-val">${product.specs.format}</span>
          </div>
          <div class="meta-field">
            <span class="meta-field-label">Language</span>
            <span class="meta-field-val">${product.specs.language}</span>
          </div>
          <div class="meta-field">
            <span class="meta-field-label">Publication</span>
            <span class="meta-field-val">${product.specs.publishedDate}</span>
          </div>
        </div>

        <div class="modal-quantity-row">
          <div class="quantity-stepper">
            <button onclick="window.historela.adjustModalQuantity(-1)">−</button>
            <span id="modal-qty">1</span>
            <button onclick="window.historela.adjustModalQuantity(1)">+</button>
          </div>
          <button class="cta-btn cta-primary" style="flex-grow: 1;" onclick="window.historela.addModalProductToCart()">
            Add to Bag · $${product.price.toFixed(2)}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>

        <div style="font-size: 0.78rem; color: #5a708a; display: flex; align-items: center; gap: 1rem;">
          <span>✓ Archival acid-free paper</span>
          <span>✓ Ribbon bookmark included</span>
          <span>✓ Fast tracked shipping</span>
        </div>
      </div>
    </div>
  `;

  elements.productModalBackdrop?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

export function adjustModalQuantity(delta) {
  const qtyEl = document.getElementById('modal-qty');
  if (!qtyEl) return;
  let current = parseInt(qtyEl.textContent, 10) || 1;
  current = Math.max(1, Math.min(10, current + delta));
  qtyEl.textContent = current;
}

export function addModalProductToCart() {
  if (!state.modalProduct) return;
  const qtyEl = document.getElementById('modal-qty');
  const qty = parseInt(qtyEl?.textContent, 10) || 1;
  addToCart(state.modalProduct.id, qty);
  closeProductModal();
  openCartDrawer();
}

export function closeProductModal() {
  elements.productModalBackdrop?.classList.remove('open');
  document.body.style.overflow = '';
}

/**
 * Shopping Cart Management
 */
function setupCartDrawer() {
  elements.cartBtn?.addEventListener('click', openCartDrawer);
  elements.cartCloseBtn?.addEventListener('click', closeCartDrawer);
  elements.cartDrawerBackdrop?.addEventListener('click', (e) => {
    if (e.target === elements.cartDrawerBackdrop) {
      closeCartDrawer();
    }
  });

  elements.cartCheckoutBtn?.addEventListener('click', () => {
    if (state.cart.length === 0) return;
    showToast('Your order #HIST-1048 is confirmed! Preparing gift package.');
    state.cart = [];
    updateCartUI();
    closeCartDrawer();
  });
}

export function openCartDrawer() {
  state.isCartOpen = true;
  elements.cartDrawerBackdrop?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

export function closeCartDrawer() {
  state.isCartOpen = false;
  elements.cartDrawerBackdrop?.classList.remove('open');
  document.body.style.overflow = '';
}

export function addToCart(productId, quantity = 1) {
  const existing = state.cart.find(item => item.productId === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    state.cart.push({ productId, quantity });
  }

  const product = PRODUCTS.find(p => p.id === productId);
  showToast(`Added "${product?.title}" to your reading bag`);
  updateCartUI();
}

export function updateCartQuantity(productId, delta) {
  const itemIndex = state.cart.findIndex(i => i.productId === productId);
  if (itemIndex === -1) return;

  state.cart[itemIndex].quantity += delta;
  if (state.cart[itemIndex].quantity <= 0) {
    state.cart.splice(itemIndex, 1);
  }

  updateCartUI();
}

export function removeFromCart(productId) {
  state.cart = state.cart.filter(item => item.productId !== productId);
  updateCartUI();
}

export function updateCartUI() {
  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);

  if (elements.cartBadge) {
    elements.cartBadge.textContent = totalCount;
    elements.cartBadge.style.display = totalCount > 0 ? 'flex' : 'none';
  }

  let subtotal = 0;

  if (elements.cartItemsList) {
    if (state.cart.length === 0) {
      elements.cartItemsList.innerHTML = `
        <div style="text-align: center; padding: 4rem 1rem; color: #64748b;">
          <svg style="margin: 0 auto 1rem auto; opacity: 0.4;" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          <p style="font-family: var(--font-h1); font-size: 1.3rem; margin-bottom: 0.4rem; color: var(--color-navy);">Your bag is empty.</p>
          <p style="font-size: 0.85rem;">Discover new releases and timeless classics.</p>
        </div>
      `;
    } else {
      elements.cartItemsList.innerHTML = state.cart.map(item => {
        const product = PRODUCTS.find(p => p.id === item.productId);
        if (!product) return '';
        const itemTotal = product.price * item.quantity;
        subtotal += itemTotal;

        return `
          <div class="cart-item">
            <img class="cart-item-img" src="${product.image}" alt="${product.title}" referrerpolicy="no-referrer" />
            <div>
              <h5 class="cart-item-title">${product.title}</h5>
              <div class="cart-item-author">${product.author}</div>
              <div class="cart-item-price">$${itemTotal.toFixed(2)}</div>
              <div style="display: flex; align-items: center; gap: 0.5rem; margin-top: 0.5rem;">
                <div class="quantity-stepper" style="transform: scale(0.85); transform-origin: left center;">
                  <button onclick="window.historela.updateCartQuantity('${product.id}', -1)">−</button>
                  <span>${item.quantity}</span>
                  <button onclick="window.historela.updateCartQuantity('${product.id}', 1)">+</button>
                </div>
              </div>
            </div>
            <button onclick="window.historela.removeFromCart('${product.id}')" style="color: #94a3b8; padding: 0.5rem;" title="Remove">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        `;
      }).join('');
    }
  }

  if (elements.cartSubtotal) {
    elements.cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
  }

  // Free shipping meter (Threshold: $60)
  const threshold = 60;
  const progress = Math.min(100, (subtotal / threshold) * 100);

  if (elements.cartShippingMeter) {
    elements.cartShippingMeter.style.width = `${progress}%`;
  }

  if (elements.cartShippingText) {
    if (subtotal >= threshold) {
      elements.cartShippingText.innerHTML = `<strong>Free Express Shipping</strong> unlocked!`;
    } else {
      const remaining = threshold - subtotal;
      elements.cartShippingText.innerHTML = `Add <strong>$${remaining.toFixed(2)}</strong> more for complimentary shipping.`;
    }
  }
}

/**
 * Live Search Modal
 */
function setupSearch() {
  elements.searchBtn?.addEventListener('click', openSearch);
  elements.searchCloseBtn?.addEventListener('click', closeSearch);
  elements.searchBackdrop?.addEventListener('click', (e) => {
    if (e.target === elements.searchBackdrop) {
      closeSearch();
    }
  });

  elements.searchInput?.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    handleSearch(query);
  });
}

export function openSearch() {
  state.isSearchOpen = true;
  elements.searchBackdrop?.classList.add('open');
  elements.searchInput?.focus();
  document.body.style.overflow = 'hidden';
  handleSearch('');
}

export function closeSearch() {
  state.isSearchOpen = false;
  elements.searchBackdrop?.classList.remove('open');
  document.body.style.overflow = '';
}

function handleSearch(query) {
  if (!elements.searchResults) return;

  const matches = query === ''
    ? PRODUCTS.slice(0, 5)
    : PRODUCTS.filter(p =>
        p.title.toLowerCase().includes(query) ||
        p.author.toLowerCase().includes(query) ||
        p.categoryName.toLowerCase().includes(query) ||
        p.publisher.toLowerCase().includes(query)
      );

  if (matches.length === 0) {
    elements.searchResults.innerHTML = `
      <div style="padding: 2rem; text-align: center; color: #64748b;">
        No titles match "${query}". Try searching for an author or literary genre.
      </div>
    `;
    return;
  }

  elements.searchResults.innerHTML = matches.map(p => `
    <div class="search-result-row" onclick="window.historela.openProductModal('${p.id}'); window.historela.closeSearch();">
      <img src="${p.image}" alt="${p.title}" style="width: 42px; height: 58px; object-fit: cover; border-radius: 2px;" referrerpolicy="no-referrer" />
      <div style="flex-grow: 1;">
        <h6 style="font-family: var(--font-h1); font-size: 1.1rem; color: var(--color-navy); margin-bottom: 2px;">${p.title}</h6>
        <div style="font-size: 0.78rem; color: var(--color-turquoise);">${p.author} · ${p.categoryName}</div>
      </div>
      <div style="font-family: var(--font-h1); font-size: 1.15rem; font-weight: 700; color: var(--color-navy);">
        $${p.price.toFixed(2)}
      </div>
    </div>
  `).join('');
}

/**
 * Toast Notification Helper
 */
export function showToast(message) {
  if (!elements.toast) return;
  elements.toast.textContent = message;
  elements.toast.classList.add('show');

  setTimeout(() => {
    elements.toast?.classList.remove('show');
  }, 3200);
}

/**
 * Newsletter & Contact Forms
 */
function setupForms() {
  document.getElementById('newsletter-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = e.target.querySelector('input');
    if (input && input.value) {
      showToast(`Thank you! Literary dispatches will arrive for ${input.value}`);
      input.value = '';
    }
  });

  document.getElementById('contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Your message has been sent to our literary concierge.');
    e.target.reset();
  });
}

/* ==========================================================================
   HISTORELA - LIBRO INTERACTIVO SOBRE NOSOTROS
   ========================================================================== */
function initAboutInteractiveBook(){
  const book=document.getElementById('about-interactive-book');
  if(!book||book.dataset.bookInitialized==='true')return;
  book.dataset.bookInitialized='true';
  const chapters=[...book.querySelectorAll('.about-book__chapter-button')];
  const panels=[...book.querySelectorAll('.about-book__panel')];
  const prev=document.getElementById('about-book-previous');
  const next=document.getElementById('about-book-next');
  const indexBtn=document.getElementById('about-book-index-button');
  const current=document.getElementById('about-book-current');
  const folio=document.getElementById('about-book-folio');
  const sheet=document.getElementById('about-book-turning-sheet');
  const trigger=document.getElementById('about-book-drawer-trigger');
  const drawer=document.getElementById('about-book-drawer');
  const close=document.getElementById('about-book-drawer-close');
  const backdrop=document.getElementById('about-book-drawer-backdrop');
  const order=['history','mission','purpose','values','next'];
  let index=0,animating=false;
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
  const openDrawer=()=>{book.classList.add('drawer-open');drawer?.setAttribute('aria-hidden','false');trigger?.setAttribute('aria-expanded','true');setTimeout(()=>chapters.find(b=>b.classList.contains('is-active'))?.focus(),180)};
  const closeDrawer=()=>{book.classList.remove('drawer-open');drawer?.setAttribute('aria-hidden','true');trigger?.setAttribute('aria-expanded','false')};
  function activate(name){panels.forEach(p=>{const active=p.dataset.bookPanel===name;p.classList.toggle('is-active',active);p.hidden=!active;p.setAttribute('aria-hidden',String(!active));if(active)p.scrollTop=0});chapters.forEach(b=>b.classList.toggle('is-active',b.dataset.bookPage===name));index=order.indexOf(name);book.dataset.activePage=name;const n=String(index+1).padStart(2,'0');if(current)current.textContent=n;if(folio)folio.textContent=n;if(prev)prev.disabled=index===0;if(next)next.disabled=index===order.length-1}
  function change(name){const target=order.indexOf(name);if(target<0||target===index||animating){closeDrawer();return}closeDrawer();if(reduced.matches||window.innerWidth<=768){activate(name);return}animating=true;const cls=target>index?'is-turning-forward':'is-turning-backward';book.classList.remove('is-turning-forward','is-turning-backward');if(sheet)void sheet.offsetWidth;book.classList.add(cls);setTimeout(()=>activate(name),285);setTimeout(()=>{book.classList.remove(cls);animating=false},650)}
  trigger?.addEventListener('click',()=>book.classList.contains('drawer-open')?closeDrawer():openDrawer());close?.addEventListener('click',closeDrawer);backdrop?.addEventListener('click',closeDrawer);indexBtn?.addEventListener('click',openDrawer);chapters.forEach(b=>b.addEventListener('click',()=>change(b.dataset.bookPage)));prev?.addEventListener('click',()=>{if(index>0)change(order[index-1])});next?.addEventListener('click',()=>{if(index<order.length-1)change(order[index+1])});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&book.classList.contains('drawer-open')){closeDrawer();trigger?.focus()}});activate(order[0]);
}

