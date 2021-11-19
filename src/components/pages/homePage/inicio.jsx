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
                {/* HEADER */}
                <Grid item xs={12} md={12}>
                    <div style={section}>
                    <HeaderHome/>
                    </div>
                </Grid>
                {/* Letras */}
                <Grid item xs={6} md={6}>
                <div style={section}>
                <Typography color ="#D1D1D1" gutterBottom variant ="h5" align="center" align="center">PERIODO ACTIVO DE INSCRIPCIÓN:</Typography>
                </div>
                </Grid>
                {/* Letras */}
                <Grid item xs={6} md={6}>
                <div style={section}>
                <Typography color ="#D1D1D1" gutterBottom variant ="h5" align="center" align="center">   2022/03/05     -     2020/03/15  </Typography>
                </div>
                </Grid>
                
                {/* Login Inicio */}
                <Grid item xs={12} md={12}>
                <div style={section}>
                <br/>
                <br/>
                <br/>
                <Home/>
                </div>
                </Grid>
           
        
              </Grid>
            </Box>
      
  )
}

export default Inicio