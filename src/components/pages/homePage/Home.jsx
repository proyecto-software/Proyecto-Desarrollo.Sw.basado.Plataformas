import React,{Fragment} from 'react'
import {Button,Typography,Grid} from "@mui/material";
import  "../../../index.css"
import HeaderHome from './HeaderHome'

const Home = () => {

     
      const section = {
        backgroundColor: "transparent"
      };
      const centrar = {
          align:"center"
      }
    return (
        <Fragment>

        <Grid container spacing ={1} style={section}>
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
            <br/> 
            <br/>    
            </Grid>
            {/* Letras */}
            <Grid item xs={6} md={6}>
            <div style={section}>
            <Typography color ="#D1D1D1" gutterBottom variant ="h5" align="center" align="center">   2022/03/05     -     2020/03/15  </Typography>
            </div>
            </Grid>

        
        {/* Init */}
        <Grid xs={1} sm={3.25 } item>
        </Grid>
        <br/>
        <Grid xs={10} sm={5.5 } sx={{ bgcolor: 'rgba(60, 60, 60, 0.6)', color: 'text.primary', p: 2 }}>
            <br/>
            <Typography color ="white" gutterBottom variant ="h3"  align="center">SISTEMA ELECTIVOS PROFESIONALES</Typography>
            <br/>
            <br/>
            <Grid xs={12} item>
            <div align="center">
            <Button  style={{ 
                    backgroundColor: 'rgba(160, 160, 160, 0.6)',
                    width:'30rem',
                    height:'6rem',
                    fontSize:15
                    }}   type="submit" variant="contained"   href="/Login"  >ADMINISTRADOR</Button>
            </div>
            <br/>  
            <br/> 
            <br/>    
            </Grid>
            <Grid xs={12} item>
            <div align="center">
            <Button  style={{ 
                    backgroundColor: 'rgba(160, 160, 160, 0.6)',
                    width:'30rem',
                    height:'6rem',
                    fontSize:15
                    }}   type="submit" variant="contained" href="/Formulario" >ALUMNO</Button>
            </div>
                            
            </Grid>
            <br/>
            <br/>
            <br/>
            
        </Grid>
        <Grid xs={1} sm={3.25 }  >
        
        </Grid>

        </Grid>
     

            
            
      
        </Fragment>
 
    )
}
export default Home
