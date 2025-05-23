import React from "react";
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

const MomentsSection = () => (
  // BAGIAN PALING PENTING px-4 untuk padding mobile, md:px-0 di desktop biar center rapih
  <section className="w-full min-h-[1px] bg-[#F8F6F3] flex flex-col items-center py-4 px-4 md:px-0 sm:py-6">
    {/* Boxed Cards */}
    <div className="flex flex-col w-full items-center gap-10">
      {/* MOMENTS CARD */}
      <div className="
        max-w-[540px] w-full
        mx-auto
        bg-[#FFF5F0]
        shadow-lg
        border border-[#fff6ed]
        rounded-2xl
        flex flex-col
        p-0
      ">
        <img
          src={picnicImg}
          alt="Enjoying Foosh"
          className="w-full h-[175px] object-cover object-center rounded-t-2xl"
          draggable={false}
        />
        <div className="px-5 pt-6 pb-4 flex flex-col">
          <h1 className="text-[1.35rem] sm:text-[1.7rem] font-extrabold text-[#222] mb-2 leading-tight">
            Everything you crave, delivered.
          </h1>
          <h2 className="text-[1.55rem] sm:text-[1.7rem] font-extrabold text-[#222] mb-2 leading-tight">
            Your favorite local restaurants
          </h2>
          <p className="text-[0.98rem] text-[#454545] mb-4 leading-normal">
            Get a slice of pizza or the whole pie delivered, or pick up house lo mein from the Chinese takeout spot you've been meaning to try.
          </p>
          <div className="w-full flex justify-start">
            <button className={BUTTON_FIND} {...BUTTON_PROPS}>
              Find restaurants
            </button>
          </div>
        </div>
      </div>

      {/* DASH PASS CARD */}
      <div className="
        max-w-[540px] w-full
        mx-auto
        bg-[#FFF5F0]
        shadow-lg
        border border-[#fff6ed]
        rounded-2xl
        flex flex-col
        p-0
      ">
        <img
          src={dashPassImg}
          alt="DashPass Banner"
          className="w-full h-[140px] object-cover object-center rounded-t-2xl"
          draggable={false}
        />
        <div className="px-5 pt-6 pb-4 flex flex-col">
          <h1 className="text-[1.28rem] sm:text-[1.45rem] font-extrabold text-[#222] mb-2 leading-tight">
            DashPass is delivery for less
          </h1>
          <p className="text-[1rem] text-[#252525] mb-4 leading-normal">
            Members get a $0 delivery fee on DashPass orders, 5% back on pickup orders, and so much more. Plus, it's free for 30 days.
          </p>
          <div className="w-full flex justify-start">
            <button className={BUTTON_DASHPASS} {...BUTTON_PROPS}>
              Get DashPass
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* SHOP GROCERIES CARD - Full Width */}
    <div className="relative w-full mt-10 flex justify-center">
      {/* Container ini width 100vw agar image full-bleed */}
      <div className="relative w-screen left-1/2 right-1/2 -translate-x-1/2 overflow-hidden min-h-[270px] md:min-h-[330px]">
        <img
          src={groceryImg}
          alt="Groceries"
          className="absolute w-full h-full object-cover object-center inset-0"
          draggable={false}
          style={{ display: "block", zIndex: 1 }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        {/* TEXT + BUTTON */}
        <div className="relative z-20 flex flex-col justify-center items-center px-4 py-7 text-center min-h-[270px] md:min-h-[330px]">
          <h1 className="text-[1.18rem] sm:text-[1.42rem] font-extrabold text-[#FFFFFF] mb-1 leading-snug drop-shadow-lg">
            Get grocery and convenience store essentials
          </h1>
          <h2 className="text-[1.02rem] sm:text-[1.14rem] font-semibold text-[#FFFFFF] mb-1 drop-shadow-lg">
            Grocery delivery, exactly how you want it.
          </h2>
          <p className="text-[0.93rem] text-[#FFFFFF] mb-4 leading-tight drop-shadow-md max-w-[410px]">
            Shop from home and fill your cart with fresh produce, frozen entrees, deli delights and more.
          </p>
          <button
            className={BUTTON_GROCERIES}
            {...BUTTON_PROPS}
            style={{
              ...BUTTON_PROPS.style,
              marginBottom: 0,
              marginTop: 4,
            }}
          >
            Shop Groceries
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default MomentsSection;
