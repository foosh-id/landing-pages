import React, { useEffect, useState } from 'react';
import MomentCard from './ServiceCard';

import returnPackagesImg from '../../assets/services/return-packages.png';
import flowersImg from '../../assets/services/flowers.png';
import minibarImg from '../../assets/services/minibar.png';
import petSuppliesImg from '../../assets/services/pet-supplies.png';

// 🔶 Button Styles
const BUTTON_RETURN_PACKAGE = `
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

const BUTTON_FLOWERS = `
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

const BUTTON_MINIBAR = `
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

const BUTTON_PET_SUPPLIES = `
  inline-flex items-center justify-center
  font-bold text-white text-[1.1rem]
  px-6 py-2.5
  bg-[#FEBE00] hover:bg-[#f0b200]
  transition duration-150
  outline-none focus:outline-none
  shadow-none border-none
  text-center no-underline
  rounded-[1.5rem]
  w-fit
`;

// 🔘 Common props
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

// 🧩 Service data
const servicesData = [
  {
    title: 'Return packages from home',
    description:
      'Request a package pickup with just a few taps and get your returns dropped off at carriers like UPS, FedEx, and USPS.',
    image: returnPackagesImg,
    buttonText: 'Try Package Pickup',
    buttonClass: BUTTON_RETURN_PACKAGE,
  },
  {
    title: 'Flowers for any occasion',
    description:
      'Shop hand-picked and thoughtfully-arranged blooms from florists near you.',
    image: flowersImg,
    buttonText: 'Send Flowers',
    buttonClass: BUTTON_FLOWERS,
  },
  {
    title: 'Restock the minibar',
    description:
      'Get liquor, beer, mixers, champagne and wine delivered straight to you.',
    image: minibarImg,
    buttonText: 'Restock Minibar',
    buttonClass: BUTTON_MINIBAR,
  },
  {
    title: 'What your pets need, and want',
    description:
      'Shop best pet food, chew toys, and even costumes for your furry friends.',
    image: petSuppliesImg,
    buttonText: 'Pet Supplies',
    buttonClass: BUTTON_PET_SUPPLIES,
  },
];

// 📱 Mobile hook
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

// 📦 Grid Component
const ServiceGrid = () => {
  const isMobile = useIsMobile();

  return (
    <div
      className="services-section"
      style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}
    >
      <h2 className="text-center text-3xl font-bold mb-8">
        Helping you with to-dos and gifting
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {servicesData.map((service, index) => (
          <MomentCard
            key={index}
            isReversed={index % 2 !== 0}
            buttonProps={BUTTON_PROPS}
            {...service}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceGrid;
