import React from 'react';
import { Grid, Card, CardContent, Typography, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';

const AboutUs = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedSection, setSelectedSection] = React.useState('');

  const handleClickOpen = (section) => {
    setSelectedSection(section);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const CardWithPopup = ({ title, description }) => (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Button variant="outlined" onClick={() => handleClickOpen(title)}>
          Learn More
        </Button>
      </CardContent>
    </Card>
  );


  const Footer = () => (
    <footer style={{ marginTop: '2rem', textAlign: 'center' }}>
      <Typography variant="body2" color="text.secondary">
        &copy; 2023 Your Scholarship Program. All rights reserved.
      </Typography>
    </footer>
  );

  
  return (
    <div className="container">
      <h2 className="text-center">About Us</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <CardWithPopup
            title="Introduction"
            description="[Brief overview of the scholarship web application and its purpose, goals, and benefits to students.]"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardWithPopup
            title="Mission and Vision"
            description="[Highlight the long-term objectives, core values, and commitment of the scholarship program.]"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardWithPopup
            title="Team Members"
            description="[Showcase the key individuals involved in the scholarship program and their roles.]"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardWithPopup
            title="Achievements"
            description="[Highlight notable accomplishments, success stories of recipients, partnerships, and recognition.]"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardWithPopup
            title="Selection Process"
            description="[Explain the criteria, process, and timeline for selecting scholarship recipients.]"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardWithPopup
            title="Testimonials"
            description="[Include quotes or testimonials from previous scholarship recipients or stakeholders.]"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardWithPopup
            title="Contact Information"
            description="[Provide contact details for inquiries or further information about the scholarship program.]"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardWithPopup
            title="Call to Action"
            description="[Encourage visitors to take action, such as applying for the scholarship or exploring more details.]"
          />
        </Grid>
      </Grid>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{selectedSection}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Insert detailed information about the {selectedSection} section here.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
      <Footer />
    </div>
  );
};

export default AboutUs;
