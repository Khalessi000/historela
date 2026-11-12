/**
 * HISTORELA — BOOKS AND TOYS
 * Main Application Bootstrap
 */

import {
  initInteractions,
  renderTrendingBooks,
  renderCategoryCards,
  renderCatalogBooks,
  selectCategory,
  openProductModal,
  closeProductModal,
  adjustModalQuantity,
  addModalProductToCart,
  addToCart,
  updateCartQuantity,
  removeFromCart,
  openCartDrawer,
  closeCartDrawer,
  openSearch,
  closeSearch,
  showToast
} from './interactions.js';

// Expose safe interactive methods on window for HTML event handlers
window.historela = {
  selectCategory,
  openProductModal,
  closeProductModal,
  adjustModalQuantity,
  addModalProductToCart,
  addToCart,
  updateCartQuantity,
  removeFromCart,
  openCartDrawer,
  closeCartDrawer,
  openSearch,
  closeSearch,
  showToast
};

// Document ready lifecycle
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initInteractions);
} else {
  initInteractions();
}
