import React from 'react';
import { Button } from '@mui/material';

const Logout = () => {
  const handleLogout = () => {
    // Logic for logging out the student
  };

  return (
    <Button variant="contained" color="secondary" onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default Logout;
