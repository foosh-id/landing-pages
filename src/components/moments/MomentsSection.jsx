import React from "react";
import appStore from '../../assets/moments/picnic.png';
import '../../styles/tailwind.css';

function MomentsSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* TEXT LEFT */}
        <div className="text-left space-y-6 md:pr-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            DashPass is delivery for less
          </h2>
          <h3 className="text-xl font-semibold text-gray-800">
            Members get a $0 delivery fee on DashPass orders, 5% back on pickup orders, and so much more. Plus, it’s free for 30 days.
          </h3>
          <button className="bg-fooshRed hover:bg-red-600 text-white px-6 py-3 rounded-full text-sm font-semibold transition">
            Get DashPass
          </button>
        </div>

        {/* IMAGE RIGHT */}
        <div className="w-full flex justify-center md:justify-end">
          <div className="w-full max-w-[500px] aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
            <img
              src="/assets/moments/picnic.png"
              alt="DoorDash Picnic"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MomentsSection;
