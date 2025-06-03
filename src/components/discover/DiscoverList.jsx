import React from 'react';

const DATA = {
  'Top Cities': [
    'New York', 'Houston', 'San Francisco', 'Vancouver, BC', 'Bend',
    'Salt Lake City', 'Birmingham', 'Victoria', 'Christchurch', 'Huntsville',
    'Los Angeles', 'Brooklyn', 'Seattle', 'Miami', 'Kamloops',
    'Jacksonville', 'New Orleans', 'Columbia', 'Milwaukee', 'Des Moines',
  ],
  'Top Cuisines': [
    'Toronto', 'San Diego', 'Atlanta', 'San Antonio', 'Tulsa',
    'Colorado Springs', 'Lexington', 'Scottsdale', 'Pittsburgh', 'Quebec City',
  ],
  'Top Chains': [
    'Chicago', 'Las Vegas', 'Queens', 'Tallahassee', 'Austin',
    'Wilmington', 'Orlando', 'Augusta', 'Ft. Worth', 'All Cities',
  ],
};

const DiscoverList = ({ category }) => {
  const items = DATA[category] || [];

  const splitInColumns = (arr, columns = 2) => {
    const result = Array.from({ length: columns }, () => []);
    arr.forEach((item, i) => result[i % columns].push(item));
    return result;
  };

  const columns = splitInColumns(items, 2);

  return (
    <div
      className="discover-list"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1.5rem',
        maxWidth: '800px',
        margin: '0 auto',
      }}
    >
      {columns.map((col, colIndex) => (
        <ul key={colIndex} style={{ listStyle: 'none', padding: 0 }}>
          {col.map((item, i) => (
            <li key={i} style={{ marginBottom: '0.75rem' }}>
              {item}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default DiscoverList;
