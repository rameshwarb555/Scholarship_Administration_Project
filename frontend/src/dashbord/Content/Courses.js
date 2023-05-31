import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/system';

const CoursesContainer = styled(Box)({
  padding: '1rem',
  background: '#fff',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const Courses = () => {
  return (
    <CoursesContainer>
      <Typography variant="h6">Enrolled Courses</Typography>
      <List>
        <ListItem button>
          <ListItemText primary="Course 1" secondary="Instructor: John Smith" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Course 2" secondary="Instructor: Jane Doe" />
        </ListItem>
        {/* Add more courses as needed */}
      </List>
    </CoursesContainer>
  );
};

export default Courses;
