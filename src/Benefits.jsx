import React from 'react';

const benefitsData = [
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

const Benefits = () => {
  return (
    <section className="py-16 text-center max-w-4xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6">Mengapa berbelanja dengan HappyFresh?</h2>
      <div className="grid md:grid-cols-3 gap-6 text-left">
        {benefitsData.map((b, i) => (
          <div key={i} className="bg-white shadow-md rounded-lg p-6">
            <img src={b.icon} alt={b.title} className="w-16 h-16 mb-3 mx-auto" />
            <h3 className="text-lg font-bold mb-2">{b.title}</h3>
            <p>{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
