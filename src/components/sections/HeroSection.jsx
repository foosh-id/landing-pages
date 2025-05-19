import '../../index.css';
import heroImage from '../../assets/hero-image.png';
import googlePlay from '../../assets/google-play-badge.png';
import appStore from '../../assets/app-store-badge.svg';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Makanan Enak. Harga Kejutan. Tanpa Pemborosan.</h2>
        <p>
          Foosh adalah platform food rescue delivery yang bantu kamu nikmati
          makanan lezat dari restoran favorit, dengan harga hemat dan
          pengantaran atau pengambilan instan.
        </p>
        <button className="cta-button">Coba Sekarang</button>
        <div className="app-badges">
          <img src={googlePlay} alt="Google Play" className="badge" />
          <img src={appStore} alt="App Store" className="badge" />
        </div>
      </div>
      <img src={heroImage} alt="Foosh groceries" className="hero-img" />
    </section>
  );
}

export default HeroSection;
