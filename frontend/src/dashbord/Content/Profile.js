import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';

const ProfileContainer = styled(Box)({
  padding: '1rem',
  background: '#fff',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const Profile = () => {
  return (
    <ProfileContainer>
      <Typography variant="h6">Profile</Typography>
      <TextField label="Full Name" variant="outlined" />
      <TextField label="Email" variant="outlined" />
      {/* Add more profile fields */}
      <Button variant="contained" color="primary">Save Changes</Button>
    </ProfileContainer>
  );
};

export default Profile;
