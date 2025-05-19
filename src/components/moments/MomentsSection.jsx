import React from "react";
import picnicImage from "../../assets/moments/picnic.png";

const MomentsSection = () => {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        
        {/* LEFT TEXT */}
        <div className="space-y-6 text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
            Everything you crave,<br /> delivered.
          </h2>
          <h3 className="text-xl font-semibold text-gray-800">
            Your favorite local restaurants
          </h3>
          <p className="text-base md:text-lg text-gray-600 max-w-md">
            Get a slice of pizza or the whole pie delivered, or pick up house lo mein from the Chinese takeout spot you've been meaning to try.
          </p>
          <button className="bg-fooshRed hover:bg-red-600 text-white px-6 py-3 rounded-full text-sm font-semibold transition">
            Find restaurants
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full flex justify-center">
          <div className="aspect-[4/3] w-full max-w-[440px] overflow-hidden rounded-xl shadow-lg">
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
