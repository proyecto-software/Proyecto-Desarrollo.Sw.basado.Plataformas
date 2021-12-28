import * as React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import {Grid} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const endpoint_infoCurricular = "";

export default function PanelInformeCurricular() {
  return (
    <Paper sx={{ maxWidth: '100%', margin: 'auto', overflow: 'hidden' }}>
      <Typography sx={{ my: 2, mx: 2,fontSize:30 }} color="text.secondary" align="center">
      Informe Curricular
    </Typography>

    <Grid container spacing={3} align="center" alignItems="center" justifyContent="center" marginTop={3}>

    <Stack direction="row" spacing={2}>
      
      <Avatar src="/broken-image.jpg" />
    </Stack>
    </Grid>
  </Paper>
  );
}