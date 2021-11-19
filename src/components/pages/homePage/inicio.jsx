import React from 'react'
import {Box,Grid,Typography } from '@mui/material';
import HeaderHome from './HeaderHome'
import Home from './Home'
const Inicio = () => {
  
  //Agregar Formulario
  const section = {
    height: '100%',
    backgroundColor: "transparent"
  };
  return ( 
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={1}  minHeight="40vh">
                {/* Login Inicio */}
                <Grid item xs={12} md={12}>
                <div style={section}>
                <Home/>
                </div>
                </Grid>
              </Grid>
            </Box>
  )
}

export default Inicio