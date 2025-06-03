import React from 'react';

const DiscoverTabs = ({ categories, activeCategory, onTabClick }) => {
  return (
    <div
      className="discover-tabs"
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        marginBottom: '2rem',
        borderBottom: '1px solid #eee',
        flexWrap: 'wrap',
      }}
    >
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onTabClick(category)}
          style={{
            border: 'none',
            background: 'none',
            fontSize: '1.1rem',
            fontWeight: activeCategory === category ? 'bold' : 'normal',
            color: activeCategory === category ? 'black' : '#888',
            paddingBottom: '0.5rem',
            borderBottom: activeCategory === category ? '2px solid black' : '2px solid transparent',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default DiscoverTabs;
