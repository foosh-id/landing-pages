// src/components/partners/PartnerSection.jsx
import React from 'react';
import PartnerCard from './PartnerCard';
import partnerCtaImg from '../../assets/partners/partner-cta.png';

const BUTTON_PARTNER = `
  inline-flex items-center justify-center
  font-bold text-white text-[1.12rem]
  px-9 py-2.5
  bg-[#FEBE00] hover:bg-[#f0b200]
  transition duration-150
  outline-none focus:outline-none
  w-fit shadow-none border-none text-center no-underline
  rounded-[1.5rem]
`;

const PartnerSection = () => {
  return (
    <div
      className="partner-section"
      style={{
        padding: '40px 20px 80px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <h2 className="text-center text-3xl font-bold mb-10">
        Unlocking opportunity for partners & businesses
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '32px',
        }}
      >
        <PartnerCard
          title="Grow your business with Foosh"
          description="Reach more customers, increase your revenue, and gain insights through our partner platform."
          image={partnerCtaImg}
          buttonText="Become a Partner"
          buttonClass={BUTTON_PARTNER}
          buttonProps={{
            type: 'button',
            style: {
              letterSpacing: 0,
              boxShadow: 'none',
              color: 'white',
              display: 'inline-block',
              lineHeight: 1.2,
              margin: 0,
            },
          }}
        />
      </div>
    </div>
  );
};

export default PartnerSection;
