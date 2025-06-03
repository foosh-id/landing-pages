import React, { useState } from 'react';
import DiscoverTabs from './DiscoverTabs';
import DiscoverList from './DiscoverList';

const categories = ['Top Cities', 'Top Cuisines', 'Top Chains'];

const DiscoverSection = () => {
  const [activeCategory, setActiveCategory] = useState('Top Cities');

  return (
    <section
      className="discover-section"
      style={{
        padding: '60px 16px',
        backgroundColor: '#fff',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <h2
        className="text-center font-bold"
        style={{
          fontSize: 'clamp(1.7rem, 4vw, 2.2rem)',
          marginBottom: '2rem',
        }}
      >
        Get more from your neighborhood
      </h2>

      <DiscoverTabs
        categories={categories}
        activeCategory={activeCategory}
        onTabClick={setActiveCategory}
      />

      <DiscoverList category={activeCategory} />
    </section>
  );
};

export default DiscoverSection;
