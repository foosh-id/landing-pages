import React from 'react';

const ServiceCard = ({ image, title, description, buttonText, onClick, note }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <img
        src={image}
        alt={title}
        className="w-full max-h-[280px] object-cover rounded-lg mb-6"
      />
      <h3 className="text-xl font-extrabold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700 text-sm mb-4 max-w-md">{description}</p>
      <button
        onClick={onClick}
        className="bg-red-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-red-700 transition"
      >
        {buttonText}
      </button>
      {note && <p className="text-xs text-gray-500 mt-2">{note}</p>}
    </div>
  );
};

export default ServiceCard;
