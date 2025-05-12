import React from 'react';
import Benefits from './Benefits';

const App = () => {
  return (
    <div className="font-sans text-gray-800 bg-white">

      {/* HERO SECTION */}
      <section className="bg-orange-500 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center md:flex md:flex-row-reverse md:items-center md:justify-between">
          <div className="md:w-1/2 text-center md:text-left">
            <img src="/FooshLogo_SecondaryLogo.png" alt="Foosh" className="w-36 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Selamatkan makanan berkualitas, hemat & lezat!
            </h1>
            <p className="mb-6">Ambil makanan surplus dari restoran favorit sebelum terbuang.</p>
            <div className="flex justify-center gap-4">
              <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-12" /></a>
              <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-12" /></a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src="/hero-image.jpg" alt="HappyFresh Groceries" />
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="py-16 bg-white text-center px-4">
        <h2 className="text-2xl font-bold mb-8">Bagaimana cara belanja di Foosh?</h2>
        <div className="flex justify-center mb-12">
          <iframe
            width="800"
            height="450"
            className="rounded-lg shadow-lg max-w-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // ganti link YouTube sesuai kebutuhan
            title="Foosh Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-12 bg-gray-50 text-center px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center">
              <img src={step.icon} alt={step.label} className="w-16 h-16 mb-3" />
              <p className="font-semibold text-sm">{step.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFIT SECTION */}
      <section className="py-16 text-center max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Mengapa belanja dengan Foosh?</h2>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          {benefits.map((b, i) => (
            <div key={i} className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Benefits />

      {/* PERSONAL SHOPPER SECTION */}
      <section className="py-16 max-w-6xl mx-auto px-4 flex items-center">
        <img src="/personal-shopper.jpg" alt="Personal Shopper" className="w-1/2" />
        <div className="w-1/2">
          <h2>Personal Shopper Profesional</h2>
          <p>Para personal shopper kami dilatih secara khusus untuk memilihkan belanjaan terbaik sesuai permintaanmu selagi kamu mengerjakan hal penting lainnya.</p>
        </div>
      </section>

      {/* RIDER SECTION */}
      <section className="py-16 max-w-6xl mx-auto px-4 flex items-center flex-row-reverse">
        <img src="/rider.jpg" alt="Rider" className="w-1/2" />
        <div className="w-1/2 text-right">
          <h2>Diantar oleh Rider</h2>
          <p>Para rider terlatih kami mengantarkan belanjaan dari supermarket ke kantormu dengan aman sesuai jadwal yang diinginkan.</p>
        </div>
      </section>

      {/* DOWNLOAD APP */}
      <section className="py-16 bg-[#1034A6] text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Unduh Aplikasi Foosh</h2>
        <p className="mb-6">Nikmati pengalaman belanja makanan surplus terbaik.</p>
        <div className="flex justify-center gap-4">
          <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" className="h-12" /></a>
          <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Download_on_the_App_Store_Badge.svg" className="h-12" /></a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-800 text-white py-8 px-4 text-center text-sm">
        <p className="mb-2">© 2025 Foosh. All rights reserved.</p>
        <div className="space-x-4">
          <a href="#" className="hover:underline">Tentang Kami</a>
          <a href="#" className="hover:underline">Kebijakan Privasi</a>
          <a href="#" className="hover:underline">Hubungi Kami</a>
        </div>
      </footer>
    </div>
  );
};

const steps = [
  { id: 1, label: 'Download HappyFresh', icon: '/download.png' },
  { id: 2, label: 'Pilih supermarket favorit terdekat', icon: '/supermarket.png' },
  { id: 3, label: 'Tambahkan belanjaanmu ke troli', icon: '/trolley.png' },
  { id: 4, label: 'Masukkan detail & pilih waktu pengantaran', icon: '/delivery.png' },
  { id: 5, label: 'Pilih opsi pembayaran', icon: '/payment.png' }
];

const benefits = [
  {
    title: 'Pilihan Resto Terbaik',
    desc: 'Makanan dari resto terpercaya di kota kamu, setiap hari tersedia box hemat.',
  },
  {
    title: 'Harga Lebih Hemat',
    desc: 'Surplus makanan yang masih fresh dengan diskon besar.',
  },
  {
    title: 'Kurangi Food Waste',
    desc: 'Ikut bantu selamatkan makanan dari pemborosan dan limbah lingkungan.',
  },
  {
    title: 'Pilihan toko yang beragam',
    desc: 'Beli kebutuhan rumah online dari berbagai supermarket ternama seperti AEON, Giant, Farmers Market, LotteMart, Big C, Tesco Lotus, Watsons dan masih banyak lagi!',
    icon: '/shop.png',
  },
  {
    title: 'Belanja kebutuhan online sesuai keinginanmu',
    desc: 'Masukkan catatan dan chat dengan personal shopper & rider untuk pengalaman belanja yang mudah.',
    icon: '/chat.png',
  },
  {
    title: 'Pembayaran non-tunai yang aman',
    desc: 'Bayar dengan kartu, e-wallet dan beragam metode pembayaran lainnya yang aman.',
    icon: '/payment.png',
  },
];

export default App;
