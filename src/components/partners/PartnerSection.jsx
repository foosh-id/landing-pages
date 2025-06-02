// src/components/partners/PartnerSection.jsx
import React, { useEffect, useState } from 'react';
import PartnerCard from './PartnerCard';
import groceryBannerImg from '../../assets/partners/partner-cta.png';

const BUTTON_YELLOW = `
  inline-flex items-center justify-center
  font-bold text-white text-[1.12rem]
  px-9 py-2.5
  bg-[#FEBE00] hover:bg-[#f0b200]
  transition duration-150
  outline-none focus:outline-none
  w-fit shadow-none border-none
  text-center no-underline rounded-[1.5rem]
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

const partnersData = [
  {
    title: 'Everything you crave, delivered',
    description:
      'Your favorite local restaurants. Get a slice of pizza or the whole pie delivered, or pick up house lo mein from the Chinese takeout spot you’ve been meaning to fry.',
    image: groceryBannerImg,
    buttonText: 'Join as restaurant partner',
    buttonClass: BUTTON_YELLOW,
  },
  {
    title: 'DashPass is delivery for less',
    description:
      'For tasty meals at a fair price. Partner with local restaurants to save on meal delivery.',
    image: groceryBannerImg,
    buttonText: 'Become a delivery partner',
    buttonClass: BUTTON_YELLOW,
  },
];

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

const PartnerSection = () => {
  const isMobile = useIsMobile();

  return (
    <div
      className="partners-section"
      style={{
        paddingTop: isMobile ? '24px' : '40px',
        paddingBottom: isMobile ? '40px' : '60px',
        paddingLeft: '20px',
        paddingRight: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <h3
        className="text-center font-semibold mb-8"
        style={{
          fontSize: 'clamp(1.25rem, 2.8vw, 1.6rem)',
        }}
      >
        Unlocking opportunity for Dashers and businesses
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {partnersData.map((partner, index) => (
          <PartnerCard
            key={index}
            isReversed={index % 2 !== 0}
            buttonProps={BUTTON_PROPS}
            {...partner}
          />
        ))}
      </div>
    </div>
  );
};

export default PartnerSection;
