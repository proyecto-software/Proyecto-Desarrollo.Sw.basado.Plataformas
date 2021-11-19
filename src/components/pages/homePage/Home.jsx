import React,{useState,Fragment} from 'react'
import {Stack,Paper,Button,Card,CardContent,Typography,TextField,Grid,Autocomplete,Box} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { hydrate } from 'react-dom/cjs/react-dom.development';
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
        <Grid xs={1} sm={3.25 } item>

        </Grid>
        <Grid xs={10} sm={5.5 } sx={{ bgcolor: 'rgba(60, 60, 60, 0.6)', color: 'text.primary', p: 2 }}>
            <Typography color ="white" gutterBottom variant ="h3"  align="center">SISTEMA ELECTIVOS PROFESIONALES</Typography>
            <br/>
            <br/>
            <br/>
            <div >
            <Button style={{
                backgroundColor: 'rgba(160, 160, 160, 0.6)',
                width:'30rem',height:'6rem',fontSize:15 }} 
                href="/Inicio" 
                variant="contained"
                m 
            >
            ADMINISTRADOR
            </Button>
            </div>
            <br/>
            <br/>
            <br/>
            <div>
        
                <Button 
                    style={{ 
                    backgroundColor: 'rgba(160, 160, 160, 0.6)',
                    width:'30rem',
                    height:'6rem',
                    fontSize:15
                    }}
                    href="/Formulario"
                    variant="contained"
                    size="large"
                    >
                    ALUMNO
                </Button>
            
            </div>
            <br/>
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
