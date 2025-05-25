// src/components/moments/MomentCard.jsx
import React, { useEffect, useState } from 'react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initialize on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

const MomentCard = ({
  title,
  description,
  image,
  buttonText,
  isReversed = false,
  buttonClass = '',
  buttonProps = {},
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
      className="moment-card"
      style={{
        display: 'flex',
        flexDirection,
        flexWrap: 'wrap',
        overflow: 'hidden',
        borderRadius: '20px',
        marginBottom: '20px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
      }}
    >
      {/* Image */}
      <div
        className="moment-image"
        style={{
          width: isMobile ? '100%' : '45%',
          height: isMobile ? '220px' : '280px',
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            borderRadius: imageBorderRadius,
            transition: 'transform 0.3s ease-in-out',
          }}
        />
      </div>

      {/* Text */}
      <div
        className="moment-text"
        style={{
          flex: 1,
          width: isMobile ? '100%' : '55%',
          maxWidth: '700px',
          margin: '0 auto',
          boxSizing: 'border-box',
          paddingTop: '1.25rem',
          paddingBottom: '1.25rem',
          paddingLeft: isMobile ? '1.25rem' : 'clamp(1.5rem, 2vw, 2.5rem)',
          paddingRight: isMobile ? '1.25rem' : 'clamp(1.5rem, 2vw, 2.5rem)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          overflowWrap: 'break-word',
          wordWrap: 'break-word',
          wordBreak: 'break-word',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(1.25rem, 4vw, 1.6rem)',
            fontWeight: 'bold',
            marginBottom: '12px',
            lineHeight: '1.35',
            textAlign: 'left',
          }}
        >
          {title}
        </h2>
        <p
          style={{
            fontSize: 'clamp(0.95rem, 2.5vw, 1rem)',
            color: '#555',
            lineHeight: '1.55',
            marginBottom: '20px',
            textAlign: 'left',
          }}
        >
          {description}
        </p>
        <button className={buttonClass} {...buttonProps}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default MomentCard;
