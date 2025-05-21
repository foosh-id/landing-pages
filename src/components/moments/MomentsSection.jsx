import React from "react";
import picnicImg from "../../assets/moments/picnic-2.avif";

const MomentsSection = () => (
  <section className="w-full min-h-[1px] bg-[#F8F6F3] flex flex-col items-center pt-8 pb-12">
    {/* Card */}
    <div className="
      w-full max-w-[500px] bg-[#FFF5F0]
      rounded-[2rem] shadow-[0_4px_32px_0_rgba(30,41,59,0.10)]
      border border-[#fff6ed] overflow-hidden mb-0
      flex flex-col
    ">
      {/* Image (top only rounded) */}
      <div className="w-full h-[170px] overflow-hidden">
        <img
          src={picnicImg}
          alt="Enjoying Foosh"
          className="w-full h-full object-cover object-center"
          draggable={false}
          style={{ borderTopLeftRadius: "2rem", borderTopRightRadius: "2rem" }}
        />
      </div>
      {/* Card Text */}
      <div className="px-6 pt-7 pb-7">
        <h1 className="text-[2rem] font-extrabold text-[#222] mb-2 leading-[2.4rem]">
          Everything you crave, delivered.
        </h1>
        <h2 className="text-lg font-semibold text-[#252525] mb-3">
          Your favorite local restaurants
        </h2>
        <p className="text-base text-[#454545] mb-0 leading-normal">
          Get a slice of pizza or the whole pie delivered, or pick up house lo mein from the Chinese takeout spot you’ve been meaning to try.
        </p>
      </div>
    </div>

    {/* Button OUTSIDE the card */}
    <a
      href="#restaurants"
      className="
        block w-full max-w-[500px] mx-auto
        px-0
      "
      style={{ marginTop: "-1.7rem" }}  // Negative margin to pull button closer to card
    >
      <button
        className="
          w-[92%] mx-auto block
          bg-[#EB1700] hover:bg-[#c51600]
          text-white font-bold
          px-7 py-3
          rounded-full
          text-base
          shadow
          transition
          duration-150
          "
        style={{
          boxShadow: "0 2px 8px 0 rgba(235, 23, 0, 0.09)",
          fontWeight: 700,
          fontSize: "1.07rem",
          letterSpacing: 0.01,
        }}
      >
        Find restaurants
      </button>
    </a>
  </section>
);

export default MomentsSection;
