import React,{useState,Fragment} from 'react'
import {Input,Button,Card,CardContent,Typography,TextField,Grid,Autocomplete,Box} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

const Home = () => {
   
    const color_gris_60 = "rgba(60, 60, 60, 0.1)"
    const color_green_border = "#00FF87"
    const color_white = "white"
    
    const CssTextField = styled(TextField)({
        "& label.Mui-focused": {
          color: "white",
          fontSize: 12
        },
        "& .MuiInputBase-input": {
            backgroundColor: color_gris_60,
            color: "white",
            fontSize: 12
        },
        "& .MuiInput-underline:after": {
          //borderBottomColor: "white"
        },
        "& .MuiOutlinedInput-root": {
            color: "white",
            backgroundColor: color_gris_60,
            "& fieldset": {
                //borderColor: "white",
                color: "white",
            },
            "&:hover fieldset": {
                borderColor: color_white,
                color: "white"
            },
            "&.Mui-focused fieldset": {
                borderColor: color_green_border,
            },
            "& input:invalid": {
                borderColor: "red",
                borderWidth: 2
            }
        
        }
      });
  
    return (
        <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
        
        >
        <Grid xs={12} sm={6} item 
        alignItems='center'
        justify='center'
        style={{
            boxShadow:`${alpha("#00FF87  ", 1)} 0 0 0 2px`,
            borderColor: "#00FF87" }}
            >
           
            <form>
                <Card sx={{ bgcolor: 'rgba(60, 60, 60, 0.6)', color: 'text.primary', p: 2 }}>
                    <Typography color ="white" gutterBottom variant ="h3" align="center" align="center">SISTEMA ELECTIVOS PROFESIONALES</Typography>
                    <CardContent>
                        <Grid container spacing ={1}>
                            <Grid xs={12} sm={6 } color= "green" item>
                            <CssTextField style={{ backgroundColor: 'rgba(160, 160, 160, 0.6)'}}label="Rut" placeholder="Ingrese Rut" name="rut" variant="outlined" fullWidth required
                            ></CssTextField>
                            </Grid>
                            <Grid xs={12} sm={6}item>
                            <CssTextField style={{ backgroundColor: 'rgba(160, 160, 160, 0.6)'}} label="Nombre" placeholder="Ingrese Nombre" name="nombre" variant="outlined" fullWidth required></CssTextField>
                            </Grid>
                            <Grid xs={12}item>
                            <CssTextField style={{ backgroundColor: 'rgba(160, 160, 160, 0.6)'}} type="email" label="Correo" placeholder="Ingrese alumnos.ucn.cl" name="correo" variant="outlined" fullWidth required></CssTextField>
                            </Grid>
                           
                            </Grid>
                            <Grid xs={12} item>
                           
                            
                            </Grid>
                        



                    </CardContent>
                </Card>
            </form>
        </Grid>
        </Box>
    )
}
export default Home