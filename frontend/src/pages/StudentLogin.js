import React, { useState } from 'react';
import { Button, Container, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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

const StyledBox = styled(motion.div)(loginContainerStyles);
const StyledFormBox = styled(motion.div)(formStyles);

const StudentLogin = () => {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');

  const handleStudentIdChange = (event) => {
    setStudentId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Perform login logic for student
    // For now, let's assume a successful login if the student ID and password are not empty
    if (studentId !== '' && password !== '') {
      alert('Login successful!');
    } else {
      alert('Invalid login. Please try again.');
    }
  };

  const handleForgotPassword = () => {
    // Implement forgot password functionality for student
    console.log('Forgot Password for Student');
  };

  return (
    <StyledBox
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Container align="center">
        <StyledFormBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            Student Login
          </Typography>
          <TextField
            label="Student ID"
            variant="outlined"
            value={studentId}
            onChange={handleStudentIdChange}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleLogin}
            sx={{ mt: 2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </Button>
          <Button
            color="primary"
            onClick={handleForgotPassword}
            sx={{ mt: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Forgot Password
          </Button>
          <Button
            variant="outlined"
            color="primary"
            component={Link}
            to="/register"
            sx={{ mt: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            New Student Register
          </Button>
        </StyledFormBox>
      </Container>
    </StyledBox>
  );
};

export default StudentLogin;
