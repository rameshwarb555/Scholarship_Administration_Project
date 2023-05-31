import React from 'react';

const ScholarshipCategories = () => {
  return (
    <div style={{ background: '#f2f2f2', padding: '20px', borderRadius: '5px' }}>
      <h3 style={{ color: '#333', marginBottom: '10px' }}>Scholarship Categories</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ marginBottom: '10px' }}>
          <i className="fa fa-graduation-cap" style={{ marginRight: '10px', color: '#ff9800' }}></i>
          Merit-Based Scholarships
        </li>
        <li style={{ marginBottom: '10px' }}>
          <i className="fa fa-dollar" style={{ marginRight: '10px', color: '#4caf50' }}></i>
          Need-Based Scholarships
        </li>
        <li style={{ marginBottom: '10px' }}>
          <i className="fa fa-globe" style={{ marginRight: '10px', color: '#03a9f4' }}></i>
          International Scholarships
        </li>
        {/* Add more scholarship categories */}
      </ul>
    </div>
  );
};

export default ScholarshipCategories;
