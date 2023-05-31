import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { styled } from '@mui/system';

const SidebarContainer = styled(Box)({
  width: '250px',
  background: '#f1f1f1',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
});

const Sidebar = () => {
  return (
    <SidebarContainer>
      <List component="nav">
        <ListItem button>
          <ListItemIcon>
            {/* Icon for the first menu item */}
          </ListItemIcon>
          <ListItemText primary="Menu Item 1" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            {/* Icon for the second menu item */}
          </ListItemIcon>
          <ListItemText primary="Menu Item 2" />
        </ListItem>
        {/* Add more menu items as needed */}
      </List>
    </SidebarContainer>
  );
};

export default Sidebar;
