// src/components/moments/MomentsSection.jsx
import React from "react";
import picnicImage from "../../assets/moments/picnic.png";

const MomentsSection = () => {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left: Text */}
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Everything you crave,<br /> delivered.
          </h2>
          <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-2">
            Your favorite local restaurants
          </h3>
          <p className="text-base md:text-lg text-gray-600 mb-6 max-w-md">
            Get a slice of pizza or the whole pie delivered, or pick up house lo mein
            from the Chinese takeout spot you've been meaning to try.
          </p>
          <button className="bg-red-500 text-white px-5 py-2 rounded-full font-semibold text-sm hover:bg-red-600 transition">
            Find restaurants
          </button>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2">
          <img
            src={picnicImage}
            alt="Picnic Moment"
            className="w-full h-auto rounded-md shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default MomentsSection;
