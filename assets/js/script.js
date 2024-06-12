'use strict';

// modal variables
// Variabel dalam konteks modal JavaScript biasanya digunakan untuk menyimpan referensi ke elemen-elemen modal, serta untuk menyimpan informasi atau status terkait dengan modal tersebut.
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
// Dalam JavaScript, Anda dapat menggunakan fungsi untuk mengatur perilaku dari elemen modal. Fungsi ini memungkinkan Anda untuk menampilkan atau menyembunyikan modal, serta melakukan tindakan lain yang terkait dengan modal, seperti memperbarui konten di dalamnya atau menambahkan efek transisi.

const modalCloseFunc = function () { modal.classList.add('closed') }

// modal eventListener
// Dalam JavaScript, modal adalah jendela kecil yang muncul di atas halaman web untuk menampilkan informasi atau meminta aksi dari pengguna. Event listener digunakan untuk mendengarkan peristiwa tertentu, seperti mengklik tombol, dan kemudian menampilkan modal ketika peristiwa itu terjadi.

modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);





// variabel roti panggang notifikasi

// Pemberitahuan bersulang (toast notifications) adalah pesan singkat yang muncul di sudut layar untuk memberi tahu pengguna tentang peristiwa atau informasi penting. Dalam JavaScript, Anda dapat menggunakan event listener untuk menanggapi peristiwa tertentu, misalnya, mengklik tombol, dan kemudian menampilkan pemberitahuan bersulang.

const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// pemberitahuan bersulang eventListener

// Variabel menu seluler dalam konteks JavaScript biasanya digunakan untuk menyimpan referensi ke elemen menu navigasi yang akan ditampilkan atau disembunyikan saat digunakan di perangkat seluler. Variabel ini memungkinkan kita untuk mengakses dan mengatur properti-properti dari elemen menu tersebut secara dinamis.

toastCloseBtn.addEventListener('click', function () {
  notificationToast.classList.add('closed');
});





// variabel menu seluler
// Fungsi menu seluler dalam konteks pengembangan web biasanya mengacu pada perilaku menu navigasi yang berubah menjadi tata letak yang lebih kecil atau tersusun secara vertikal ketika tampil di perangkat seluler, seperti smartphone atau tablet. Dalam JavaScript, fungsi menu seluler dapat diimplementasikan untuk mengatur perilaku menu navigasi, termasuk responsif terhadap interaksi pengguna.

const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // fungsi menu seluler
  // Fungsi menu seluler dalam konteks pengembangan web biasanya mengacu pada perilaku menu navigasi yang berubah menjadi tata letak yang lebih kecil atau tersusun secara vertikal ketika tampil di perangkat seluler, seperti smartphone atau tablet. Dalam JavaScript, fungsi menu seluler dapat diimplementasikan untuk mengatur perilaku menu navigasi, termasuk responsif terhadap interaksi pengguna.

  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  }

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc);

}





// variabel akordeon
// Variabel akordeon adalah istilah yang merujuk pada variabel yang digunakan untuk mengontrol perilaku atau tampilan dari sebuah akordeon dalam pengembangan web. Akordeon adalah elemen UI yang terdiri dari beberapa bagian atau panel yang bisa diperluas dan ditutup. Ketika salah satu panel diperluas, panel-panel lainnya biasanya akan tertutup.

const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');

      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}