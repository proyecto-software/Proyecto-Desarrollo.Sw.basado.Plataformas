import React from 'react'
import {Box,Grid,Typography,Button } from '@mui/material';
import HeaderHome from '../homePage/HeaderHome'

const Login = () => {
  
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
                
                </div>
                </Grid>
                   {/* Init */}
        <Grid xs={1} sm={3.25 } item>
        </Grid>
        <br/>
        <Grid xs={10} sm={5.5 } sx={{ bgcolor: 'rgba(60, 60, 60, 0.6)', color: 'text.primary', p: 2 }}>
            <br/>
            <Typography color ="white" gutterBottom variant ="h3"  align="center">ADMINISTRADOR</Typography>
            <br/>
            <br/>
            <Grid xs={12} item>
            <div align="center">
            <Button  style={{ 
                    backgroundColor: 'rgba(160, 160, 160, 0.6)',
                    width:'20rem',
                    height:'6rem',
                    fontSize:15
                    }}   type="submit" variant="contained"   href="/HomeAdmin"  >Entrar</Button>
            </div>
            <br/>  
            <br/> 
            <br/>    
            </Grid>
            <Grid xs={12} item>
            <div align="center">
            <Button  style={{ 
                    backgroundColor: 'rgba(160, 160, 160, 0.6)',
                    width:'20rem',
                    height:'6rem',
                    fontSize:15
                    }}   type="submit" variant="contained" href="/" >Volver</Button>
            </div>
                            
            </Grid>
            <br/>
            <br/>
            <br/>
            
        </Grid>
        <Grid xs={1} sm={3.25 }  >
        
        </Grid>
        
              </Grid>
            </Box>
      
  )
}

export default Login