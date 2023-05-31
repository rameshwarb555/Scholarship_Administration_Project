import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const OverviewContainer = styled(Box)({
  padding: '1rem',
  background: '#fff',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const Overview = () => {
  return (
    <OverviewContainer>
      <Typography variant="h6">Progress Overview</Typography>
      {/* Display the student's progress, notifications, etc. */}
    </OverviewContainer>
  );
};

export default Overview;
