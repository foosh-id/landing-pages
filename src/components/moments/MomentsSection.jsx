import React from "react";
import picnicImage from "../../assets/moments/picnic.png";

const MomentsSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        
        {/* KIRI: TEXT */}
        <div className="md:col-span-5 space-y-5 text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
            Everything you crave,<br /> delivered.
          </h2>
          <h3 className="text-lg md:text-xl font-semibold text-gray-800">
            Your favorite local restaurants
          </h3>
          <p className="text-base md:text-lg text-gray-600">
            Get a slice of pizza or the whole pie delivered, or pick up house lo mein from the Chinese takeout spot you've been meaning to try.
          </p>
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full text-sm font-semibold transition">
            Find restaurants
          </button>
        </div>

        {/* KANAN: GAMBAR */}
        <div className="md:col-span-7">
          <div className="w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
            <img
              src={picnicImage}
              alt="Foosh picnic moment"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MomentsSection;
