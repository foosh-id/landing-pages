import React from "react";
import '../../styles/tailwind.css';
import picnic from '../../assets/moments/picnic.png';

function MomentsSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* IMAGE RIGHT */}
        <div className="w-full flex justify-center md:justify-end">
          <div className="w-full max-w-[500px] aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
            <img
              src={picnic}
              alt="Everything you crave, delivered."
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* TEXT LEFT */}
        <div className="text-left space-y-6 md:pr-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Everything you crave, delivered.
          </h2>
          <h3 className="text-xl font-semibold text-gray-800">
            Your favorite local restaurants
          </h3>
          <p className="text-lg text-gray-600 max-w-md">
            Your favorite local restaurants. Get a slice of pizza or the whole pie delivered, or pick up house lo mein from the Chinese takeout spot you’ve been meaning to try.
          </p>
          <button className="bg-fooshRed hover:bg-red-600 text-white px-6 py-3 rounded-full text-sm font-semibold transition">
            Find restaurants
          </button>
        </div>
      </div>
    </section>
  );
}

export default MomentsSection;
