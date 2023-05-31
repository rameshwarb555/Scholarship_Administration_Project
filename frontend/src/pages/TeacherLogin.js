import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';

const loginContainerStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  background: 'rgba(0, 0, 255, 0.1)', // Faint blue background color
};

const formStyles = {
  display: 'grid',
  gap: '1rem',
  maxWidth: '400px', // Increase the maxWidth for a larger form
  padding: '2rem',
  background: '#fff',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Add a slight shadow effect
};

const StyledBox = styled(Box)(loginContainerStyles);
const StyledFormBox = styled(Box)(formStyles);

const TeacherLogin = () => {
  const [teacherId, setTeacherId] = useState('');
  const [password, setPassword] = useState('');

  const handleTeacherIdChange = (event) => {
    setTeacherId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Perform login logic for teacher
    console.log('Teacher Login:', teacherId, password);
  };

  const handleForgotPassword = () => {
    // Implement forgot password functionality for teacher
    console.log('Forgot Password for Teacher');
  };

  return (
    <StyledBox
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Container align="center">
        <StyledFormBox
          component={motion.div}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            Teacher Login
          </Typography>
          <TextField
            label="Teacher ID"
            variant="outlined"
            value={teacherId}
            onChange={handleTeacherIdChange}
            sx={{ width: '100%' }} // Set the input box width to 100%
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            sx={{ width: '100%' }} // Set the input box width to 100%
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleLogin}
            sx={{
              '&:hover': {
                backgroundColor: '#2f80ed', // Change hover background color
              },
              width: '100%', // Set the button width to 100%
            }}
          >
            Login
          </Button>
          <Button
            color="primary"
            onClick={handleForgotPassword}
            sx={{
              '&:hover': {
                textDecoration: 'underline', // Add underline on hover
              },
              width: '100%', // Set the button width to 100%
            }}
          >
            Forgot Password
          </Button>
        </StyledFormBox>
      </Container>
    </StyledBox>
  );
};

export default TeacherLogin;
