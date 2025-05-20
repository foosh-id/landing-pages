import React from 'react';
import '../../styles/tailwind.css';

const MomentsSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto flex md:flex-row flex-col items-center">
        {/* TEXT LEFT */}
        <div className="md:w-1/2 text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Everything you crave, delivered.
          </h2>
          <h3 className="text-xl font-semibold text-gray-800">
            Your favorite local restaurants
          </h3>
          <p className="text-lg text-gray-600 max-w-md">
            Get a slice of pizza or the whole pie delivered, or pick up house lo mein from the Chinese takeout spot you’ve been meaning to try.
          </p>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
            Find restaurants
          </button>
        </div>

        {/* IMAGE RIGHT */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/assets/moments/picnic.png"
            alt="Everything you crave, delivered."
            className="w-full max-w-md rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default MomentsSection;
