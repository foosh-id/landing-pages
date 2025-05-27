import React, { useEffect, useState } from 'react';
import MomentCard from './MomentCard';

import picnicImage from '../../assets/moments/picnic-0.png';
import picnic2Image from '../../assets/moments/fooshx.png';
import picnic3Image from '../../assets/moments/shop-now.png';
import groceryBannerImg from '../../assets/moments/shop-glocery.png';

const BUTTON_FIND = `
  inline-flex items-center justify-center
  font-bold text-white text-[1.12rem]
  px-9 py-2.5
  bg-[#FEBE00] hover:bg-[#f0b200]
  transition duration-150
  outline-none focus:outline-none
  w-fit
  shadow-none border-none
  text-center no-underline
  rounded-[1.5rem]
`;

const BUTTON_DASHPASS = `
  inline-flex items-center justify-center
  font-bold text-white text-[1.15rem]
  px-11 py-3
  bg-[#FEBE00] hover:bg-[#f0b200]
  transition duration-150
  outline-none focus:outline-none
  w-fit
  shadow-none border-none
  text-center no-underline
  rounded-[1.5rem]
`;

const BUTTON_GROCERIES = `
  inline-flex items-center justify-center
  font-bold text-white text-[1.15rem]
  px-11 py-3
  bg-[#FEBE00] hover:bg-[#f0b200]
  transition duration-150
  outline-none focus:outline-none
  w-fit
  shadow-none border-none
  text-center no-underline
  rounded-[1.5rem]
`;

const BUTTON_GROCERIES_2 = `
  inline-flex items-center justify-center
  font-bold text-white text-[1.1rem]
  px-8 py-2.5
  bg-[#FEBE00] hover:bg-[#f0b200]
  transition duration-150
  outline-none focus:outline-none
  shadow-none border-none
  text-center no-underline
  rounded-[1.5rem]
  min-w-[130px]
`;

const BUTTON_PROPS = {
  style: {
    letterSpacing: 0,
    boxShadow: 'none',
    color: 'white',
    display: 'inline-block',
    marginBottom: 0,
    marginTop: 0,
    lineHeight: 1.2,
  },
  type: 'button',
};

const momentsData = [
  {
    title: 'Everything you crave, delivered',
    description:
      "Your favorite local restaurants. Get a slice of pizza or the whole pie delivered, or pick up house lo mein from the Chinese takeout spot you’ve been meaning to fry.",
    image: picnicImage,
    buttonText: 'Find restaurants',
    buttonClass: BUTTON_FIND,
  },
  {
    title: 'DashPass is delivery for less',
    description:
      'For tasty meals at a fair price. Partner with local restaurants to save on meal delivery.',
    image: picnic2Image,
    buttonText: 'Get DashPass',
    buttonClass: BUTTON_DASHPASS,
  },
  {
    title: 'Get grocery and convenience store essentials',
    description:
      'Shop from home and fill your cart with fresh produce.',
    image: picnic3Image,
    buttonText: 'Shop Groceries',
    buttonClass: BUTTON_GROCERIES,
  },
];

// Hook to detect mobile view
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

const MomentsSection = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <div
        className="moments-section"
        style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}
      >
        {/* Moments cards (without section heading) */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {momentsData.map((moment, index) => (
            <MomentCard
              key={index}
              isReversed={index % 2 !== 0}
              buttonProps={BUTTON_PROPS}
              {...moment}
            />
          ))}
        </div>
      </div>

      {/* Grocery Banner */}
      <div className="relative w-full overflow-hidden">
        <div
          className="relative w-full"
          style={{
            minHeight: 'clamp(360px, 50vh, 720px)',
          }}
        >
          <img
            src={groceryBannerImg}
            alt="Grocery Banner"
            className="absolute w-full h-full object-cover object-center inset-0"
            draggable={false}
            style={{ display: 'block', zIndex: 1 }}
          />
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div
            className="relative z-20 flex flex-col justify-center items-center text-center"
            style={{
              padding: 'clamp(2rem, 5vw, 6rem)',
              color: 'white',
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            <h1
              className="font-extrabold leading-tight mb-2 drop-shadow-md"
              style={{
                fontSize: 'clamp(1.7rem, 4vw, 2.7rem)',
              }}
            >
              Groceries delivered to your doorstep
            </h1>
            <h2
              className="font-semibold mb-2 drop-shadow"
              style={{
                fontSize: 'clamp(1rem, 3vw, 1.4rem)',
              }}
            >
              Just tap and we’ll pack it fresh for you.
            </h2>
            <p
              className="font-normal leading-snug drop-shadow-sm"
              style={{
                fontSize: 'clamp(0.9rem, 2vw, 1.15rem)',
                marginBottom: '1.25rem',
              }}
            >
              From produce to pantry staples, shop everything you need right from home — fast and easy.
            </p>
            <button
              className={BUTTON_GROCERIES_2}
              {...BUTTON_PROPS}
            >
              Shop Groceries
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MomentsSection;
