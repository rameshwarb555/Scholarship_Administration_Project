import React, { useState, useContext } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  FormControlLabel,
  Switch,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from './ToggleColorMode';
import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';


const navbarStyles = {
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    position: 'sticky',
    top: 0,
    zIndex: 999,
  },
  loginContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: '0 5px',
  },
};

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const Navbar = () => {
  const { toggleColorMode, theme } = useContext(ColorModeContext);
  const [selectedLanguage, setSelectedLanguage] = useState('language');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const renderLanguageOptions = () => {
    return (
      <select
        id="lan"
        name="lan"
        value={selectedLanguage}
        onChange={handleLanguageChange}
      >
        <option value="language">Select Language</option>
        <option value="english">English | English</option>
        <option value="hindi">Hindi | हिन्दी</option>
      </select>
    );
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <div style={navbarStyles.root}>
      <AppBar position="static" style={navbarStyles.appBar}>
        <StyledToolbar>
          <Typography variant="h6" style={navbarStyles.title}>
            Student Scholarship Administration
          </Typography>

          <div>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/about">
              About
            </Button>
            <Button color="inherit" component={Link} to="/contact">
              Contact
            </Button>
            <span>
              <label>Language/भाषा:</label>
              {renderLanguageOptions()}
            </span>
          </div>

          <div style={navbarStyles.loginContainer}>
            <Box sx={{ textAlign: 'center' }}>
              <Button
                component={Link}
                to="/login/student"
                variant="contained"
                style={{ marginRight: '10px' }}
                color="info"
              >
                Student Login
              </Button>

              <Button
                component={Link}
                to="/login/teacher"
                variant="contained"
                color="info"
              >
                Teacher Login
              </Button>
            </Box>
            <Box sx={{ textAlign: 'center', marginLeft: '10px' }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={theme.palette.mode === 'dark'}
                    onChange={toggleColorMode}
                    name="colorModeToggle"
                    color="default"
                    icon={<Brightness4Icon />}
                    checkedIcon={<Brightness7Icon />}
                  />
                }
                label={theme.palette.mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
              />
            </Box>
          </div>
        </StyledToolbar>
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={handleDrawerClose}
          onClick={handleDrawerClose}
        >
          <List>
            <ListItem button component={Link} to="/">
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/about">
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button component={Link} to="/contact">
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </Drawer>
        <Button
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerOpen}
        >
          <MenuIcon />
        </Button>
      </AppBar>
    </div>
  );
};

export default Navbar;
