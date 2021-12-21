import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';

export default function PanelDashBoard() {
  return (
    <Paper sx={{ maxWidth: '100%', margin: 'auto', overflow: 'hidden' }}>
      
      <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
        DASHBOARD
      </Typography>
    </Paper>
  );
}