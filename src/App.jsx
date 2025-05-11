import React from 'react';

function App() {
  return (
    <div className="bg-white text-gray-700 font-sans">
      
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-orange-500 to-green-500 py-16 px-4 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Selamatkan Makanan Favoritmu dalam Satu Klik!
          </h1>
          <p className="mb-8">
            Pesan makanan lezat dengan harga spesial sekaligus bantu kurangi food waste.
          </p>
          <button className="bg-green-700 hover:bg-green-600 px-6 py-3 rounded-lg font-bold">
            Download Aplikasi
          </button>
        </div>
      </header>

      {/* How it Works */}
      <section className="py-16 text-center max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">Cara Kerja Foosh</h2>
        <div className="grid md:grid-cols-4 gap-6 px-4">
          <Step icon="📱" title="Download Foosh App" />
          <Step icon="📍" title="Pilih Box Makanan" />
          <Step icon="🛵" title="Pickup Langsung" />
          <Step icon="🍽️" title="Nikmati dengan Hemat" />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center px-4">
          <img className="rounded-lg shadow-lg" src="https://source.unsplash.com/featured/?food,restaurant" alt="Foosh Benefits" />
          <div>
            <h3 className="text-3xl font-bold mb-4">Kenapa harus Foosh?</h3>
            <ul className="space-y-4 text-lg">
              <li>✅ <b>Hemat maksimal</b>: Harga jauh lebih murah dari harga normal.</li>
              <li>✅ <b>Makanan berkualitas</b>: Dipilih khusus dari resto terbaik.</li>
              <li>✅ <b>Mudah dan Cepat</b>: Order, ambil, nikmati!</li>
              <li>✅ <b>Ikut Menjaga Lingkungan</b>: Bantu kurangi limbah makanan.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Download App */}
      <section className="py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Siap Bergabung dengan Foosh?</h2>
        <button className="bg-green-700 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-bold">
          Download Aplikasi
        </button>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white text-center">
        <div className="max-w-5xl mx-auto px-4">
          <p className="mb-2">©2025 Foosh Indonesia</p>
          <div className="space-x-4">
            <a href="#" className="hover:text-orange-400">Tentang Kami</a>
            <a href="#" className="hover:text-orange-400">FAQ</a>
            <a href="#" className="hover:text-orange-400">Kontak</a>
            <a href="#" className="hover:text-orange-400">Kebijakan Privasi</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

const Step = ({icon, title}) => (
  <div className="flex flex-col items-center">
    <div className="text-4xl bg-green-100 rounded-full p-4 mb-2">{icon}</div>
    <h4 className="font-semibold">{title}</h4>
  </div>
);

export default App;
