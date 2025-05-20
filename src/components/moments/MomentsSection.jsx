import React from 'react';
import picnicImg from '../../assets/moments/picnic.png';

const MomentsSection = () => {
  return (
    <section className="bg-white">
      <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-2 items-start py-24 px-6 md:px-16 gap-12">
        
        {/* TEXT LEFT */}
        <div className="flex justify-start">
          <div className="space-y-6 max-w-[480px] px-2 md:px-0 self-start">
            <h2 className="text-[2.8rem] md:text-5xl font-extrabold text-gray-900 leading-tight">
              Everything you crave, delivered.
            </h2>
            <h3 className="text-xl font-semibold text-gray-800">
              Your favorite local restaurants
            </h3>
            <p className="text-lg text-gray-600">
              Get a slice of pizza or the whole pie delivered, or pick up house lo mein from the Chinese takeout spot you’ve been meaning to try.
            </p>
            <a href="#restaurants">
              <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-full text-base shadow transition w-fit">
                Find restaurants
              </button>
            </a>
          </div>
        </div>

        {/* IMAGE RIGHT */}
        <div className="flex justify-end items-start">
          <img
            src={picnicImg}
            alt="Everything you crave, delivered."
            className="w-full max-w-[520px] object-cover rounded-xl shadow-lg self-start"
          />
        </div>
      </div>
    </section>
  );
};

export default MomentsSection;
