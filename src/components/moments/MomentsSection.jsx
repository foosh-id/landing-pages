// src/components/moments/MomentsSection.jsx
import React from 'react';
import MomentCard from './MomentCard';

import picnicImage from '../../assets/moments/picnic.png';
import picnic2Image from '../../assets/moments/picnic-2.avif';
import picnic3Image from '../../assets/moments/picnic-3.avif';

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
    description: 'Shop from home and fill your cart with fresh produce.',
    image: picnic3Image,
    buttonText: 'Shop Groceries',
    buttonClass: BUTTON_GROCERIES,
  },
];

const MomentsSection = () => {
  return (
    <div
      className="moments-section"
      style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}
    >
      <h1
        style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '40px',
          textAlign: 'center',
        }}
      >
        Moments
      </h1>
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
  );
};

export default MomentsSection;
