import React from 'react';
import { Typography, TextField, Button, Grid, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1.5rem',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  height: '100%',
});

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div>
      <Typography variant="h2">Contact Us</Typography>
      <Typography variant="body1">
        [Provide the necessary contact details for inquiries or further information about the scholarship program.]
      </Typography>
      <Grid container spacing={2} align="center">
        <Grid item xs={12} sm={6}>
          <Typography variant="h4">Submit Your Message</Typography>
          <form onSubmit={handleSubmit}>
            <TextField label="Name" required fullWidth sx={{ marginBottom: '1rem' }} />
            <TextField label="Email" required fullWidth sx={{ marginBottom: '1rem' }} />
            <TextField label="Subject" required fullWidth sx={{ marginBottom: '1rem' }} />
            <TextField label="Message" required multiline rows={4} fullWidth sx={{ marginBottom: '1rem' }} />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledCard>
            <CardContent>
              <Typography variant="h4">Institute Information</Typography>
              <Typography variant="body1">Institute Name/Organization</Typography>
              <Typography variant="body1">Helpline Number: XXX-XXX-XXXX</Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  '&:hover': {
                    backgroundColor: '#2f80ed',
                  },
                }}
              >
                Contact Us
              </Button>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
      <footer style={{ marginTop: '2rem', textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          &copy; 2023 Your Scholarship Program. All rights reserved.
        </Typography>
      </footer>
    </div>
  );
};

export default ContactUs;
