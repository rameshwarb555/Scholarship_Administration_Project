import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography,MenuItem } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';

const registrationContainerStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  background: 'rgba(0, 0, 255, 0.1)', // Faint blue background color
};

const formStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  maxWidth: '400px', // Adjust the maxWidth as needed
  padding: '2rem',
  background: '#fff',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Add a slight shadow effect
};

const StyledBox = styled(motion(Box))(registrationContainerStyles);
const StyledFormBox = styled(motion(Box))(formStyles);

const RegistrationPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
  const [educationalBackground, setEducationalBackground] = useState('');
  const [fieldOfStudy, setFieldOfStudy] = useState('');
  const [financialInformation, setFinancialInformation] = useState('');

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleDateOfBirthChange = (event) => {
    setDateOfBirth(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleContactNumberChange = (event) => {
    setContactNumber(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleEducationalBackgroundChange = (event) => {
    setEducationalBackground(event.target.value);
  };

  const handleFieldOfStudyChange = (event) => {
    setFieldOfStudy(event.target.value);
  };

  const handleFinancialInformationChange = (event) => {
    setFinancialInformation(event.target.value);
  };

  const handleSubmit = () => {
    // Perform registration logic
    console.log('Registration form submitted');
    // You can process the form data here or send it to a server for further processing
  };

  // Animation variants
  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <StyledBox initial="hidden" animate="visible" variants={fadeVariants}>
      <Container align="center">
        <StyledFormBox>
          <Typography variant="h4" align="center" gutterBottom>
            Registration
          </Typography>
          <TextField
            label="Full Name"
            variant="outlined"
            value={fullName}
            onChange={handleFullNameChange}
            required
            // Example transition effect on input field
            sx={{
              transition: 'border-color 0.3s',
              ':focus': { borderColor: 'primary.main' },
            }}
          />
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <TextField
            label="Date of Birth"
            variant="outlined"
            type="date"
            value={dateOfBirth}
            onChange={handleDateOfBirthChange}
            required
          />
         <TextField
  label="Gender"
  variant="outlined"
  select
  value={gender}
  onChange={handleGenderChange}
  required
>
  <MenuItem value="select">Select</MenuItem>
  <MenuItem value="female">Female</MenuItem>
  <MenuItem value="male">Male</MenuItem>
  <MenuItem value="other">Other</MenuItem>
</TextField>

<TextField
  label="Contact Number"
  variant="outlined"
  value={contactNumber}
  onChange={handleContactNumberChange}
  required
  error={contactNumber.length !== 10}
  helperText={contactNumber.length !== 10 ? "Please enter a 10-digit contact number" : ""}
/>

          <TextField
            label="Address"
            variant="outlined"
            value={address}
            onChange={handleAddressChange}
            required
          />
          <TextField
            label="Educational Background"
            variant="outlined"
            value={educationalBackground}
            onChange={handleEducationalBackgroundChange}
            required
            select
          >
            <MenuItem value="Agricultural">Agricultural</MenuItem>
            <MenuItem value="Science">Science</MenuItem>
            <MenuItem value="MBBS">MBBS</MenuItem>
            <MenuItem value="PostDOc">PostDOc</MenuItem>
            <MenuItem value="Pharmacy">Pharmacy</MenuItem>
            <MenuItem value="Dental">Dental</MenuItem>
            <MenuItem value="BHMS">BHMS</MenuItem>
          </TextField>
          <TextField
            label="Field of Study"
            variant="outlined"
            value={fieldOfStudy}
            onChange={handleFieldOfStudyChange}
            required
          />
          <TextField
            label="Financial Information"
            variant="outlined"
            value={financialInformation}
            onChange={handleFinancialInformationChange}
            required
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            // Example hover effect on button
            sx={{
              '&:hover': { backgroundColor: 'primary.dark' },
              transition: 'background-color 0.3s',
            }}
          >
            Submit
          </Button>
        </StyledFormBox>
      </Container>
    </StyledBox>
  );
};

export default RegistrationPage;
