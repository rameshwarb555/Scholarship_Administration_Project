import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { styled } from '@mui/system';

const ResourcesContainer = styled(Box)({
  padding: '1rem',
  background: '#fff',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const Resources = () => {
  return (
    <ResourcesContainer>
      <Typography variant="h6">Educational Resources</Typography>
      <Box display="flex" flexDirection="column">
        <Link href="/path/to/resource1">Resource 1</Link>
        <Link href="/path/to/resource2">Resource 2</Link>
        {/* Add more resource links */}
      </Box>
    </ResourcesContainer>
  );
};

export default Resources;
