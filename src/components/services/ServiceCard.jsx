import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

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

const ServiceCard = ({
  title,
  description,
  image,
  buttonText,
  isReversed = false,
}) => {
  const isMobile = useIsMobile();
  const flexDirection = isMobile ? 'column' : isReversed ? 'row-reverse' : 'row';
  const imageBorderRadius = isMobile
    ? '20px 20px 0 0'
    : isReversed
    ? '20px 0 0 20px'
    : '0 20px 20px 0';

  return (
    <div
      className="flex flex-wrap overflow-hidden mb-12 bg-white shadow-md"
      style={{
        borderRadius: '20px',
        flexDirection,
      }}
    >
      <div
        className="w-full md:w-[45%] h-[220px] md:h-[280px]"
        style={{ borderRadius: imageBorderRadius, overflow: 'hidden' }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="w-full md:w-[55%] p-6 md:p-10 flex flex-col justify-center">
        <h3 className="text-xl font-extrabold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <button className="inline-flex items-center justify-center font-bold text-white text-[1.1rem] px-6 py-2.5 bg-red-600 hover:bg-red-700 transition duration-150 rounded-full w-fit">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  isReversed: PropTypes.bool,
};

export default ServiceCard;
