/* ================================================================
   buy-ipad-pro.js — JavaScript for buy-ipad-pro.html
   (Trang Mua iPad Pro với ưu đãi Giáo Dục)
   ================================================================ */

/* ---- Section 2: Sticky Bar — show/hide on scroll ---- */
// TODO
/* ---- Section 4 > Gallery — dot nav & paddle nav ---- */
// Chuyển ảnh khi click dot hoặc Prev/Next
// TODO
/* ---- Section 4 > Selection Steps — step unlock logic ---- */
// Khi chọn xong Step N thì unlock Step N+1
// Không cần hiệu ứng thay đổi giá hay ảnh khi chọn cấu hình
// TODO

/* ---- Section 4 > Step 7/8 Accessories — expand/collapse tile ---- */
// Khi chọn một accessory, hiện nút "Xác nhận" bên trong tile
// TODO

/* ---- Section 4 > Summary — update price total ---- */
// Cộng dồn giá các option đã chọn vào summary box
// TODO

/* ---- Section 4 > Summary — "Tiếp tục" button ---- */
// Chỉ enable khi đã chọn đủ các step bắt buộc (1–5)
// TODO

/* ---- Section 4 > Summary — Yêu thích (heart icon) ---- */
// Toggle trạng thái filled/outline
// TODO

/* ---- Section 5: Customer Form — validation & submit ---- */
// - Validate Họ tên: không rỗng
// - Validate Số điện thoại: 10 chữ số, bắt đầu bằng 0
// - Hiển thị error message inline nếu sai
// - Khi hợp lệ: hiện thông báo thành công (chưa cần gọi API)
// TODO

/* ---- Section 7: FAQ — accordion expand/collapse ---- */
document.addEventListener("DOMContentLoaded", () => {


  const faqList = document.getElementById('faqList');
  const toggleAllBtn = document.getElementById('faqToggleAll');
  const faqItems = document.querySelectorAll('.faq-item');


  // Chức năng mũi tên to
  if (toggleAllBtn && faqList) {
    toggleAllBtn.addEventListener('click', () => {
     
      const isCollapsed = faqList.classList.contains('collapsed');
      if (isCollapsed) {
        faqList.classList.remove('collapsed');
        toggleAllBtn.classList.add('open');
      } else {
        faqList.classList.add('collapsed');
        toggleAllBtn.classList.remove('open');
      }
    });
  } else {
  }


  // Chức năng mũi tên nhỏ
  if (faqItems.length > 0) {
    faqItems.forEach((item) => {
      const btn = item.querySelector('.faq-question');
      if (btn) {
        btn.addEventListener('click', () => {
          item.classList.toggle('open');
        });
      }
    });
  }
});





/* ---- Section 8: Sticky Chat — show after scroll down ---- */
// Hiện nút chat sau khi cuộn qua một ngưỡng nhất định
// TODO
