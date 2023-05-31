import React from 'react';

const FeaturedScholarships = () => {
  return (
    <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '5px' }}>
      <h3 style={{ color: '#333', marginBottom: '10px' }}>Featured Scholarships</h3>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <h4 style={{ color: '#ff9800', marginBottom: '5px' }}>Scholarship 1</h4>
          <p>Description of Scholarship 1</p>
        </div>
        <div>
          <h4 style={{ color: '#4caf50', marginBottom: '5px' }}>Scholarship 2</h4>
          <p>Description of Scholarship 2</p>
        </div>
        {/* Add more featured scholarships */}
      </div>
    </div>
  );
};

export default FeaturedScholarships;
