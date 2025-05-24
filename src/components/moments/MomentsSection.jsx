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

const cardBase = `
  bg-[#FFF5F0]
  rounded-2xl shadow-lg border border-[#fff6ed] overflow-hidden
  flex flex-col md:flex-row-reverse
  w-full
  px-0
`;

const cardOuter = `
  w-full flex justify-center
`;

const cardMobileMax = `
  w-full
  max-w-[430px] mx-4
  xs:max-w-[470px]
  sm:max-w-[550px] sm:mx-auto
  md:max-w-3xl
`;

const textPadding = `
  flex flex-col justify-center
  px-6 py-7 md:px-8 md:py-10
`;

const MomentsSection = () => (
  <section className="w-full min-h-[1px] bg-[#F8F6F3] flex flex-col items-center px-4 sm:px-6 md:px-8 py-10">
    {/* CONTENT CARDS */}
    <div className="flex flex-col items-center gap-y-10 w-full">
      {/* Moments Card */}
      <div className={cardOuter}>
        <div className={`${cardBase} ${cardMobileMax}`}>
          <div className="w-full md:w-1/2 h-[180px] xs:h-[210px] sm:h-[240px] md:h-[290px] flex-shrink-0">
            <img
              src={picnicImg}
              alt="Enjoying Foosh"
              className="w-full h-full object-cover object-center block"
              draggable={false}
            />
          </div>
          <div className={`w-full md:w-1/2 ${textPadding}`}>
            <div className="max-w-[520px] w-full">
              <h1 className="text-[1.3rem] xs:text-[1.55rem] sm:text-[1.7rem] md:text-[2rem] font-extrabold text-[#222] antialiased mb-2 leading-tight">
                Everything you crave, delivered.
              </h1>
              <h2 className="text-[1.1rem] xs:text-[1.18rem] sm:text-[1.22rem] md:text-[1.3rem] font-bold text-[#222] mb-2 leading-tight">
                Your favorite local restaurants
              </h2>
              <p className="text-[0.97rem] xs:text-[1.04rem] sm:text-[1.09rem] text-[#454545] mb-4 leading-normal">
                Get a slice of pizza or the whole pie delivered, or pick up house lo mein from the Chinese takeout spot you've been meaning to try.
              </p>
              <div className="w-full flex justify-start mt-2">
                <button className={BUTTON_FIND} {...BUTTON_PROPS}>
                  Find restaurants
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DashPass Card */}
      <div className={cardOuter}>
        <div className={`${cardBase} ${cardMobileMax}`}>
          <div className="w-full md:w-1/2 h-[130px] xs:h-[160px] sm:h-[210px] md:h-[240px] flex-shrink-0">
            <img
              src={dashPassImg}
              alt="DashPass Banner"
              className="w-full h-full object-cover object-center block"
              draggable={false}
            />
          </div>
          <div className={`w-full md:w-1/2 ${textPadding}`}>
            <div className="max-w-[520px] w-full">
              <h1 className="text-[1.1rem] xs:text-[1.19rem] sm:text-[1.28rem] md:text-[1.45rem] font-extrabold text-[#222] antialiased mb-2 leading-tight">
                DashPass is delivery for less
              </h1>
              <p className="text-[0.99rem] xs:text-[1.05rem] sm:text-[1.1rem] text-[#252525] mb-4 leading-normal">
                Members get a $0 delivery fee on DashPass orders, 5% back on pickup orders, and so much more. Plus, it's free for 30 days.
              </p>
              <div className="w-full flex justify-start mt-2">
                <button className={BUTTON_DASHPASS} {...BUTTON_PROPS}>
                  Get DashPass
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* SHOP GROCERIES CARD */}
    <div className="relative w-full mt-12 flex justify-center px-4 sm:px-6 md:px-8">
      <div className="relative w-full max-w-screen-xl overflow-hidden min-h-[270px] md:min-h-[330px] rounded-2xl">
        <img
          src={groceryImg}
          alt="Groceries"
          className="absolute w-full h-full object-cover object-center inset-0 block"
          draggable={false}
        />
        <div className="absolute inset-0 bg-black/40 z-10 rounded-2xl" />
        <div className="relative z-20 flex flex-col justify-center items-center px-4 py-7 text-center min-h-[270px] md:min-h-[330px]">
          <h1 className="text-[1.18rem] sm:text-[1.42rem] font-extrabold text-[#FFFFFF] mb-1 leading-snug drop-shadow-lg antialiased">
            Get grocery and convenience store essentials
          </h1>
          <h2 className="text-[1.02rem] sm:text-[1.14rem] font-semibold text-[#FFFFFF] mb-1 drop-shadow-lg antialiased">
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
