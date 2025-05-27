import React from 'react';
import ServiceCard from './ServiceCard';

import imgReturn from '../../assets/services/return-packages.png';
import imgFlowers from '../../assets/services/flowers.png';
import imgMinibar from '../../assets/services/minibar.png';
import imgPet from '../../assets/services/pet-supplies.png';

const serviceItems = [
  {
    image: imgReturn,
    title: 'Return packages from home',
    description: 'Request a package pickup with just a few taps and get your returns dropped off at carriers like UPS, FedEx, and USPS.',
    buttonText: 'Try Package Pickup',
    onClick: () => {}, // your logic
  },
  {
    image: imgFlowers,
    title: 'Flowers for any occasion',
    description: 'Shop hand-picked and thoughtfully-arranged blooms from florists near you.',
    buttonText: 'Send Flowers',
    onClick: () => {},
  },
  {
    image: imgMinibar,
    title: 'Restock the minibar',
    description: 'Get liquor, beer, mixers, champagne and wine delivered fast.*',
    buttonText: 'Shop Alcohol',
    onClick: () => {},
    note: '*Must be 21+. Enjoy responsibly.',
  },
  {
    image: imgPet,
    title: 'What your pets need, and want',
    description: 'Shop pet food, chew toys, and even costumes from local pet suppliers.',
    buttonText: 'Get Pet Supplies',
    onClick: () => {},
  },
];

const ServiceGrid = () => {
  return (
    <section className="w-full bg-[#fef3f2] py-12 px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-12">
        Helping you with to-dos and gifting
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {serviceItems.map((item, idx) => (
          <ServiceCard key={idx} {...item} />
        ))}
      </div>
    </section>
  );
};

export default ServiceGrid;
