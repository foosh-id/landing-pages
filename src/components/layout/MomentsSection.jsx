import '../../index.css';
import momentImage from '../../assets/moments/howitworks-download.png'; 

const FooshMomentsSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-24 flex flex-col md:flex-row items-center justify-between">
      {/* Text */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Makanan lezat. <br /> Harga kejutan. Instan.
        </h1>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Langsung dari toko favorit kamu
        </h2>
        <p className="text-gray-600 mb-6">
          Temukan makanan enak dari mitra Foosh di sekitarmu. Ambil sendiri atau minta antar — hemat dan menyenangkan.
        </p>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-full transition">
          Coba Sekarang
        </button>
      </div>

      {/* Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={momentImage}
          alt="Foosh lifestyle moment"
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>
    </section>
  );
};

export default FooshMomentsSection;
