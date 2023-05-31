import React from 'react';
import HeroSection from '../components/HeroSection';
import ScholarshipCategories from '../components/ScholarshipCategories.js';
import FeaturedScholarships from '../components/FeaturedScholarships.js';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <h2>About Scholarships</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac lorem at massa
            condimentum ultricies. Curabitur finibus ullamcorper felis at tincidunt. Duis
            fringilla velit velit, a dapibus justo fermentum at. In finibus, lorem non maximus
            tempus, tellus metus rhoncus ex, sit amet tristique velit lectus vel felis. Proin
            accumsan eleifend tortor non fermentum. Duis vel urna bibendum, convallis ipsum id,
            ultrices urna.
          </p>
          {/* Add more informative content about scholarships */}
        </div>
        <div style={{ flex: 1 }}>
          <h2>Scholarship Categories</h2>
          <ScholarshipCategories />
        </div>
      </div>
      <h2>Featured Scholarships</h2>
      <FeaturedScholarships />
      {/* Add more sections or components for testimonials, resources, etc. */}
    </div>
  );
};

export default Home;
