import React from 'react';
import { Box, Typography, Calendar } from '@mui/material';
import { styled } from '@mui/system';

const CalendarContainer = styled(Box)({
  padding: '1rem',
  background: '#fff',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const CalendarComponent = () => {
  return (
    <CalendarContainer>
      <Typography variant="h6">Upcoming Dates</Typography>
      <Calendar />
    </CalendarContainer>
  );
};

export default CalendarComponent;
