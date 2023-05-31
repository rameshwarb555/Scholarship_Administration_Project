import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/system';

const NotificationsContainer = styled(Box)({
  padding: '1rem',
  background: '#fff',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const Notifications = () => {
  return (
    <NotificationsContainer>
      <Typography variant="h6">Notifications</Typography>
      <List>
        <ListItem button>
          <ListItemText primary="Notification 1" secondary="Course update" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Notification 2" secondary="Assignment reminder" />
        </ListItem>
        {/* Add more notifications as needed */}
      </List>
    </NotificationsContainer>
  );
};

export default Notifications;
