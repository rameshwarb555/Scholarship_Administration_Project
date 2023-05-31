import React from 'react';
import { Button } from '@mui/material';
import bannerImage from '../images/0ajez37f.png';


const HeroSection = () => {
  return (
    <div
    style={{
      background: `url(${bannerImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '43vh', // Adjust the height as needed
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      
    }}
    >
      <h1
        style={{
          color: '#fff',
          fontSize: '2rem',
          marginBottom: '1rem',
          textAlign: 'center',
        }}
      >
        Unlocking Opportunities Through Scholarships
      </h1>
      <Button variant="contained" color="primary" size="large">
        Explore Scholarships
      </Button>
    </div>
  );
};

export default HeroSection;
