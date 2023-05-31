import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Header from './Header';
import Sidebar from '../Dashbord/Sidebar';
import Courses from './content/Courses';
import Overview from './content/Overview';
import CalendarComponent from './content/Calendar';
import Grades from './content/Grades';
import Notifications from './content/Notifications';
import Resources from './content/Resources';
import Profile from './content/Profile';

const DashboardContainer = styled(Box)({
  padding: '2rem',
});

const ContentContainer = styled(Box)({
  marginTop: '2rem',
});

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Header/>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} md={9}>
          <ContentContainer>
            <Typography variant="h4" gutterBottom>
              Overview
            </Typography>
            <Overview />
            <Typography variant="h4" gutterBottom>
              Courses
            </Typography>
            <Courses />
            <Typography variant="h4" gutterBottom>
              Calendar
            </Typography>
            <CalendarComponent />
            <Typography variant="h4" gutterBottom>
              Grades
            </Typography>
            <Grades />
            <Typography variant="h4" gutterBottom>
              Notifications
            </Typography>
            <Notifications />
            <Typography variant="h4" gutterBottom>
              Resources
            </Typography>
            <Resources />
            <Typography variant="h4" gutterBottom>
              Profile
            </Typography>
            <Profile />
          </ContentContainer>
        </Grid>
      </Grid>
    </DashboardContainer>
  );
};

export default Dashboard;
