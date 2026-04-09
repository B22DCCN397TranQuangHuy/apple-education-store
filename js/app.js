/* ================================================================
   app.js — Main JavaScript for index.html
   (Trang Cửa Hàng Giáo Dục Apple)
   ================================================================ */

/* ---- Global Nav: Mobile hamburger toggle ---- */
// TODO

/* ---- Global Nav: Flyout submenu hover/click ---- */
// TODO

/* ---- Global Nav: Search toggle ---- */
const searchToggle = document.getElementById("search-toggle");
const searchPanel = document.getElementById("search-panel");
const searchBackdrop = document.getElementById("search-backdrop");
const searchCancel = document.getElementById("search-cancel");
const searchInput = document.getElementById("search-input");
// Lay cac phan tu html để thao tác
if (searchCancel) {
  searchCancel.hidden = true;
}

function openSearch() {
  // Hàm này có nhiệm vụ mở search panel.
  if (bagPanel?.classList.contains("is-open")) closeBag(); // Nếu bag panel đang mở, đóng nó trước
  searchPanel.classList.add("is-open"); // Thêm class is-open để hiện panel
  searchBackdrop.classList.add("is-open"); // Mở backdrop để che đi phần dưới
  searchPanel.setAttribute("aria-hidden", "false"); // Cho phép screen reader đọc panel
  searchToggle.setAttribute("aria-expanded", "true"); // Cho phép screen reader biết rằng search panel đang mở
  setTimeout(() => searchInput?.focus(), 350); // Đặt focus vào input search sau 350ms để tránh hiện lỗi
}

function syncCancelVisibility() {
  if (!searchCancel) return;
  const hasValue = searchInput?.value ?? "";
  searchCancel.hidden = !hasValue;
}

function closeSearch() {
  searchPanel.classList.remove("is-open");
  searchBackdrop.classList.remove("is-open");
  searchPanel.setAttribute("aria-hidden", "true");
  searchToggle.setAttribute("aria-expanded", "false");
  if (searchInput) searchInput.value = "";
}

searchToggle?.addEventListener("click", () => {
  searchPanel.classList.contains("is-open") ? closeSearch() : openSearch();
});

searchCancel?.addEventListener("click", closeSearch);
searchBackdrop?.addEventListener("click", () => {
  closeSearch();
  closeBag();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (searchPanel.classList.contains("is-open")) closeSearch();
    if (bagPanel?.classList.contains("is-open")) closeBag();
  }
});

/* ---- Section 3: Product Nav Shelf — horizontal drag/scroll ---- */
// TODO

/* ---- Sections 4–8: Card shelves — Paddle nav (prev/next arrows) ---- */
// TODO

/* ---- Sections 4–8: Card shelves — lazy load images ---- */
// TODO

/* ---- Smooth scroll & anchor links ---- */
// TODO
