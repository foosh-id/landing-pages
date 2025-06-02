import React from 'react';

const ServiceCard = ({
  title,
  description,
  image,
  buttonText,
  buttonClass = '',
  buttonProps = {},
}) => {
  const isMobile =
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false;

  return (
    <div
      className="service-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        borderRadius: '20px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        height: '100%',
        marginBottom: '12px',
        padding: isMobile ? '4px' : '0', // 🆕 extra breathing space for mobile
      }}
    >
      {/* Image */}
      <div
        className="service-image"
        style={{
          width: '100%',
          height: isMobile ? '200px' : '260px', // 🆕 smaller on mobile
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
            borderRadius: '20px 20px 0 0',
          }}
        />
      </div>

      {/* Text */}
      <div
        className="service-text"
        style={{
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          flex: 1,
        }}
      >
        <div>
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
        </div>
        <button className={buttonClass} {...buttonProps}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
