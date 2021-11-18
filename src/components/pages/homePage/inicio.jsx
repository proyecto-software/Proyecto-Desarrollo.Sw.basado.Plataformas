import React,{useState} from 'react'
import {Box,Grid,Paper } from '@mui/material';
import HeaderHome from './HeaderHome'
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
                {/* Login Inicio */}
                <Grid item xs={12} md={6}>
                <div style={section}>

                    asjdkajsdfkaskdjfhjashdfhasjkldhajhkldso
                </div>
                </Grid>
           
        
              </Grid>
            </Box>
      
  )
}

export default Inicio