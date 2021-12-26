import * as React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';


export default function PanelDashBoard() {
  return (
    <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
      
      <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
        DASHBOARD
      </Typography>
    </Paper>
  );
}