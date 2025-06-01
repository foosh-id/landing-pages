// src/components/services/ServiceGrid.jsx
import React from 'react';
import ServiceCard from './ServiceCard';

import imgReturn from '../../assets/services/return-packages.png';
import imgFlowers from '../../assets/services/flowers.png';
import imgMinibar from '../../assets/services/minibar.png';
import imgPet from '../../assets/services/pet-supplies.png';

const services = [
  {
    image: imgReturn,
    alt: 'Return packages',
    title: 'Return packages from home',
    description: 'Request a package pickup with just a few taps and get your returns dropped off at carriers like UPS, FedEx, and USPS.',
    buttonText: 'Try Package Pickup',
  },
  {
    image: imgFlowers,
    alt: 'Flowers for any occasion',
    title: 'Flowers for any occasion',
    description: 'Shop hand-picked and thoughtfully-arranged blooms from florists near you.',
    buttonText: 'Send Flowers',
  },
  {
    image: imgMinibar,
    alt: 'Restock the minibar',
    title: 'Restock the minibar',
    description: 'Get liquor, beer, mixers, champagne and wine delivered fast from local stores.',
    buttonText: 'Shop Alcohol',
  },
  {
    image: imgPet,
    alt: 'Pet supplies',
    title: 'What your pets need, and want',
    description: 'Shop pet food, chew toys, and even costumes from local pet suppliers.',
    buttonText: 'Get Pet Supplies',
  },
];

const ServiceGrid = () => {
  return (
    <section className="bg-[#fef3f2] py-16">
      {/* White “wrapper” container */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-14">
          Helping you with to-dos and gifting
        </h2>

        {/* True 2×2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
