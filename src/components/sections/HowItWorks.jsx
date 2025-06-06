import '../../styles/tailwind.css';
import downloadIcon from '../../assets/howitworks/howitworks-download.png';
import bakeryPickupIcon from '../../assets/howitworks/howitworks-bakery.png';
import deliveryIcon from '../../assets/howitworks/howitworks-rider.png';
import eatingIcon from '../../assets/howitworks/howitworks-eating.png';

const steps = [
  {
    id: 1,
    title: 'Download App',
    desc: 'Unduh aplikasi Foosh dan temukan makanan surprise hemat.',
    icon: downloadIcon,
    linkText: 'Buka Aplikasinya →',
    linkUrl: 'https://play.google.com/store/apps/details?id=com.foosh.app',
  },
  {
    id: 2,
    title: 'Pilih Toko Kue',
    desc: 'Pilih mitra toko kue terdekat dan lakukan pemesanan.',
    icon: bakeryPickupIcon,
    linkText: 'Gabung Jadi Partner →',
    linkUrl: 'https://merchants.foosh.id',
  },
  {
    id: 3,
    title: 'Pesanan Diantar',
    desc: 'Rider Foosh langsung mengantar makanan ke lokasi kamu.',
    icon: deliveryIcon,
    linkText: 'Daftar Jadi Rider Foosh →',
    linkUrl: 'https://foosher.foosh.id',
  },
  {
    id: 4,
    title: 'Nikmati & Selamatkan',
    desc: 'Nikmati makanan lezat dan bantu kurangi food waste.',
    icon: eatingIcon,
    linkText: 'Lihat Dampaknya →',
    linkUrl: 'https://community.foosh.id',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works-wrapper">
      <div className="how-it-works-container">
        {steps.map((step) => (
          <div key={step.id} className="how-it-works-step">
            <img
              src={step.icon}
              alt={step.title}
              className="how-it-works-icon"
            />
            <h3 className="how-it-works-title">{step.title}</h3>
            <p className="how-it-works-desc">{step.desc}</p>
            <a
              href={step.linkUrl}
              className="how-it-works-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {step.linkText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
