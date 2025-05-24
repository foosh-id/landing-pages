// src/components/moments/MomentsSection.jsx
import React from "react";
import MomentCard from "./MomentCard";

import picnicImg from "../../assets/moments/picnic-2.avif";
import dashPassImg from "../../assets/moments/picnic-3.avif";
import groceryImg from "../../assets/moments/picnic.png";

const BUTTON_FIND = `
  font-bold
  text-white
  text-[1.12rem]
  px-9 py-2.5
  bg-[#FEBE00] hover:bg-[#f0b200]
  transition duration-150
  outline-none focus:outline-none
  min-w-[130px]
  shadow-none border-none
  text-center no-underline
  rounded-[1.5rem]
`;

const BUTTON_DASHPASS = `
  font-bold
  text-white
  text-[1.15rem]
  px-11 py-3
  bg-[#FEBE00] hover:bg-[#f0b200]
  transition duration-150
  outline-none focus:outline-none
  min-w-[150px]
  shadow-none border-none
  text-center no-underline
  rounded-[1.5rem]
`;

const BUTTON_GROCERIES = `
  font-bold
  text-white
  text-[1.15rem]
  px-11 py-3
  bg-[#FEBE00] hover:bg-[#f0b200]
  transition duration-150
  outline-none focus:outline-none
  min-w-[150px]
  shadow-none border-none
  text-center no-underline
  rounded-[1.5rem]
`;

const BUTTON_PROPS = {
  style: {
    letterSpacing: 0,
    boxShadow: "none",
    color: "white",
    display: "inline-block",
    marginBottom: 24,
    marginTop: 0,
    lineHeight: 1.2,
  },
  type: "button",
};

const MomentsSection = () => {
  return (
    <section className="w-full min-h-[1px] bg-[#F8F6F3] flex flex-col items-center px-4 sm:px-6 md:px-8 py-10 space-y-10">
      <MomentCard
        image={picnicImg}
        alt="Enjoying Foosh"
        title="Everything you crave, delivered."
        subtitle="Your favorite local restaurants"
        description="Get a slice of pizza or the whole pie delivered, or pick up house lo mein from the Chinese takeout spot you've been meaning to try."
        buttonText="Find restaurants"
        buttonClass={BUTTON_FIND}
        buttonProps={BUTTON_PROPS}
      />

      <MomentCard
        image={dashPassImg}
        alt="DashPass Banner"
        title="DashPass is delivery for less"
        description="Members get a $0 delivery fee on DashPass orders, 5% back on pickup orders, and so much more. Plus, it's free for 30 days."
        buttonText="Get DashPass"
        buttonClass={BUTTON_DASHPASS}
        buttonProps={BUTTON_PROPS}
      />

      <MomentCard
        image={groceryImg}
        alt="Groceries"
        title="Get grocery and convenience store essentials"
        subtitle="Grocery delivery, exactly how you want it."
        description="Shop from home and fill your cart with fresh produce, frozen entrees, deli delights and more."
        buttonText="Shop Groceries"
        buttonClass={BUTTON_GROCERIES}
        buttonProps={{
          ...BUTTON_PROPS,
          style: { ...BUTTON_PROPS.style, marginBottom: 0, marginTop: 4 },
        }}
        overlay
      />
    </section>
  );
};

export default MomentsSection;
