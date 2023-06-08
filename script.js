// Ambil elemen container carousel
const carouselContainer = document.getElementById('carousel-container');
const h5 = document.querySelectorAll('figure h5');
const p = document.querySelectorAll('figure p');

// Ambil semua elemen gambar dalam carousel
const carouselImages = Array.from(carouselContainer.querySelectorAll('img'));
const carouselImagestesti = Array.from(h5);
const carouselp = Array.from(p);

// Set indeks awal gambar yang ditampilkan
let currentIndex = 0;
let currenttesti = 0;
let currentp = 0;

// Fungsi untuk menampilkan gambar selanjutnya
function showNextImage() {
  // Sembunyikan gambar saat ini
  carouselImages[currentIndex].style.display = 'none';
  carouselImagestesti[currenttesti].style.display = 'none';
  carouselp[currentp].style.display = 'none';

  // Perbarui indeks gambar berikutnya
  currentIndex = (currentIndex + 1) % carouselImages.length;
  currenttesti = (currenttesti + 1) % carouselImagestesti.length;
  currentp = (currentp + 1) % carouselp.length;
  // Tampilkan gambar berikutnya
  carouselImages[currentIndex].style.display = 'block';
  carouselImagestesti[currenttesti].style.display = 'block';
  carouselp[currentp].style.display = 'block';
}

// Fungsi untuk memulai animasi carousel
function startCarousel() {
  // Tampilkan gambar pertama secara awal
  carouselImages[currentIndex].style.display = 'block';
  carouselImagestesti[currenttesti].style.display = 'block';
  carouselp[currentp].style.display = 'block';

  // Atur interval untuk menampilkan gambar selanjutnya setiap 2 detik
  setInterval(showNextImage, 2000);
}

// Panggil fungsi startCarousel untuk memulai animasi carousel
startCarousel();
