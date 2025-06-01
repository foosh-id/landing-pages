// src/components/services/ServiceCard.jsx
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Hook to detect mobile vs. desktop.
 * (Same pattern you used in MomentCard.jsx)
 */
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

// Button styling constant, modeled after your Moments code’s BUTTON_FIND
const BUTTON_RED = `
  inline-flex items-center justify-center
  font-bold text-white text-[1.1rem]
  px-6 py-2.5
  bg-red-600 hover:bg-red-700
  transition duration-150
  outline-none focus:outline-none
  w-fit
  rounded-full
`;

const ServiceCard = ({ image, alt, title, description, buttonText, isReversed = false }) => {
  const isMobile = useIsMobile();

  // Determine flex direction (stack on mobile, else alternate left/right)
  const flexDirection = isMobile
    ? 'column'
    : isReversed
    ? 'row-reverse'
    : 'row';

  // Mirror your Moments code’s border‐radius logic
  // On mobile: top corners rounded; on desktop: left or right side rounded
  const imageBorderRadius = isMobile
    ? 'rounded-t-[20px]'
    : isReversed
    ? 'rounded-l-[20px]'
    : 'rounded-r-[20px]';

  return (
    <div
      className={`flex overflow-hidden mb-12 bg-white shadow-md`}
      style={{ flexDirection, borderRadius: '20px' }}
    >
      {/* Image section */}
      <div className={`w-full md:w-1/2 h-[220px] md:h-[280px] overflow-hidden ${imageBorderRadius}`}>
        <img
          src={image}
          alt={alt || title}
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </div>

      {/* Text & button section */}
      <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
        <h3 className="text-2xl font-extrabold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-700 mb-6">{description}</p>
        <button className={BUTTON_RED.trim()}>{buttonText}</button>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  isReversed: PropTypes.bool,
};

export default ServiceCard;
