import React from 'react';

function App() {
  return (
    <div className="font-sans bg-[#F2F9FC] text-gray-800">
      
      {/* Hero Section */}
      <section className="text-center py-16 bg-[#1034A6] text-white">
        <h1 className="text-4xl font-bold mb-4">Selamatkan Makanan, Hemat & Lezat</h1>
        <p className="mb-8">Ambil makanan berkualitas dari resto favoritmu sebelum terbuang.</p>
        <button className="bg-[#FEBE00] text-black font-bold py-2 px-6 rounded-full">Gabung Sekarang</button>
      </section>

      {/* How It Works */}
      <section className="py-12">
        <h2 className="text-center text-2xl font-bold mb-8">Cara Pakainya Simpel</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-4">
          <Step icon="🔍" title="Temukan Box" desc="Cari box makanan yang tersedia dekat kamu." />
          <Step icon="📍" title="Ambil di Resto" desc="Ambil langsung ke lokasi resto." />
          <Step icon="🍱" title="Nikmati Hematnya" desc="Rasakan makanan berkualitas dengan harga hemat." />
        </div>
      </section>

      {/* CTA Partner Restoran */}
      <section className="py-16 bg-[#1034A6] text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Punya Restoran?</h2>
        <p className="mb-8">Ubah surplus jadi profit. Bergabung dengan Foosh sekarang.</p>
        <button className="bg-[#FEBE00] text-black font-bold py-2 px-6 rounded-full">Jadi Partner Kami</button>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center bg-gray-800 text-white">
        <p>©2025 Foosh. All Rights Reserved.</p>
        <div className="mt-2">
          <a href="#" className="px-2">Instagram</a>|
          <a href="#" className="px-2">Email</a>|
          <a href="#" className="px-2">Privacy Policy</a>
        </div>
      </footer>

    </div>
  );
}

const Step = ({icon, title, desc}) => (
  <div className="text-center max-w-xs">
    <div className="bg-[#FEBE00] rounded-full h-16 w-16 mx-auto flex items-center justify-center mb-2 text-2xl">
      {icon}
    </div>
    <h3 className="font-bold mb-1">{title}</h3>
    <p>{desc}</p>
  </div>
);

export default App;
