import React from 'react';
import ServiceCard from './ServiceCard';

import imgReturn from '../../assets/services/return-packages.png';
import imgFlowers from '../../assets/services/flowers.png';
import imgMinibar from '../../assets/services/minibar.png';
import imgPet from '../../assets/services/pet-supplies.png';

const services = [
  {
    image: imgReturn,
    title: 'Return packages from home',
    description:
      'Request a package pickup with just a few taps and get your returns dropped off at carriers like UPS, FedEx, and USPS.',
    buttonText: 'Try Package Pickup',
  },
  {
    image: imgFlowers,
    title: 'Flowers for any occasion',
    description:
      'Shop hand-picked and thoughtfully-arranged blooms from florists near you.',
    buttonText: 'Send Flowers',
    isReversed: true,
  },
  {
    image: imgMinibar,
    title: 'Restock the minibar',
    description:
      'Get liquor, beer, mixers, champagne and wine delivered fast.*',
    buttonText: 'Shop Alcohol',
  },
  {
    image: imgPet,
    title: 'What your pets need, and want',
    description:
      'Shop pet food, chew toys, and even costumes from local pet suppliers.',
    buttonText: 'Get Pet Supplies',
    isReversed: true,
  },
];

const ServiceGrid = () => {
  return (
    <section className="bg-[#fef3f2] py-16 px-4">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-16">
        Helping you with to-dos and gifting
      </h2>
      <div className="max-w-6xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ServiceGrid;
