// Ambil elemen form berdasarkan class di HTML kamu
const contactForm = document.querySelector(".Contact-form");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Biar halaman nggak reload

  // Bikin elemen notifikasi
  const notification = document.createElement("div");
  notification.classList.add("notification");
  notification.textContent = "Pesan berhasil dikirim!";

  // Tambahkan ke body
  document.body.appendChild(notification);

  // Tambah class show biar animasi muncul
  setTimeout(() => {
    notification.classList.add("show");
  }, 100);

  // Hilangkan notif setelah 3 detik
  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => {
      notification.remove();
    }, 500);
  }, 3000);

  // Kosongkan form setelah dikirim
  contactForm.reset();
});
