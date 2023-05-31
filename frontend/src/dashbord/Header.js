import React from 'react';
import { Box, Avatar, Typography } from '@mui/material';
import { styled } from '@mui/system';

const HeaderContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1rem',
  background: '#f1f1f1',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
});

const ProfileName = styled(Typography)({
  fontWeight: 'bold',
});

const Header = () => {
  return (
    <HeaderContainer>
      <Box display="flex" alignItems="center">
        <Avatar alt="Student Avatar" src="/path/to/avatar.png" />
        <ProfileName variant="h6">John Doe</ProfileName>
      </Box>
      {/* Additional navigation or user-related information */}
    </HeaderContainer>
  );
};

export default Header;
