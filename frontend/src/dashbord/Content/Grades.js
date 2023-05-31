import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { styled } from '@mui/system';

const GradesContainer = styled(Box)({
  padding: '1rem',
  background: '#fff',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const Grades = () => {
  return (
    <GradesContainer>
      <Typography variant="h6">Grades</Typography>
      <TableContainer>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Course 1</TableCell>
              <TableCell>Grade A</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Course 2</TableCell>
              <TableCell>Grade B+</TableCell>
            </TableRow>
            {/* Add more rows for grades */}
          </TableBody>
        </Table>
      </TableContainer>
    </GradesContainer>
  );
};

export default Grades;
