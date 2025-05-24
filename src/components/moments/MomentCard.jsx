// src/components/moments/MomentCard.jsx
import React from "react";

const MomentCard = ({
  image,
  alt,
  title,
  subtitle,
  description,
  buttonText,
  buttonClass,
  buttonProps = {},
  overlay = false,
}) => {
  return (
    <div className="w-full flex justify-center">
      <div className="bg-[#FFF5F0] rounded-2xl shadow-lg border border-[#fff6ed] overflow-hidden flex flex-col md:flex-row w-full max-w-[1000px] px-0 relative">
        {overlay ? (
          <>
            <img
              src={image}
              alt={alt}
              className="absolute w-full h-full object-cover object-center inset-0"
              draggable={false}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/60 z-10 rounded-2xl" />
            <div className="relative z-20 flex flex-col justify-center items-center px-4 py-7 text-center min-h-[270px] md:min-h-[330px]">
              <h1
                className="text-[1.18rem] sm:text-[1.42rem] font-extrabold mb-1 leading-snug drop-shadow-lg antialiased"
                style={{ color: "white" }}
              >
                {title}
              </h1>
              {subtitle && (
                <h2
                  className="text-[1.02rem] sm:text-[1.14rem] font-semibold mb-1 drop-shadow-lg antialiased"
                  style={{ color: "white" }}
                >
                  {subtitle}
                </h2>
              )}
              <p
                className="text-[0.93rem] mb-4 leading-tight drop-shadow-md max-w-[410px]"
                style={{ color: "white" }}
              >
                {description}
              </p>
              <button className={buttonClass} {...buttonProps}>
                {buttonText}
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="w-full md:w-1/2 h-[180px] xs:h-[210px] sm:h-[240px] md:h-[290px] flex-shrink-0">
              <img
                src={image}
                alt={alt}
                className="w-full h-full object-cover object-center block"
                draggable={false}
                loading="lazy"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center px-6 py-7 md:px-8 md:py-10">
              <div className="max-w-[520px] w-full">
                <h1 className="text-[1.3rem] xs:text-[1.55rem] sm:text-[1.7rem] md:text-[2rem] font-extrabold text-[#222] mb-2 leading-tight">
                  {title}
                </h1>
                {subtitle && (
                  <h2 className="text-[1.1rem] xs:text-[1.18rem] sm:text-[1.22rem] md:text-[1.3rem] font-bold text-[#222] mb-2">
                    {subtitle}
                  </h2>
                )}
                <p className="text-[0.97rem] xs:text-[1.04rem] sm:text-[1.09rem] text-[#454545] mb-4">
                  {description}
                </p>
                <div className="w-full flex justify-start mt-2">
                  <button className={buttonClass} {...buttonProps}>
                    {buttonText}
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MomentCard;
