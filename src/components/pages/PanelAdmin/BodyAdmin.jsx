import * as React from 'react';
import Paper from '@mui/material/Paper';

export default function BodyAdmin(props) {
  return (
    <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden'}}>
     <h1>hola {props.email} </h1>
    </Paper>
  );
}
