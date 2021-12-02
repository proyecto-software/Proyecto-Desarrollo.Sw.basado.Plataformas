import React,{useState,useEffect} from 'react'
import { useForm } from "react-hook-form";
import {Input,Button,Card,CardContent,Typography,TextField,Grid,Autocomplete,Box} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import Alert from '@mui/material/Alert';

import {Link} from 'react-router-dom';

const Login = () => {
    const [error, setError] = useState(null);
    const color_gris_60 = "rgba(60, 60, 60, 0.1)"
    const color_green_border = "#00FF87"
    const color_white = "white"
    const color_red = "#FF0000"
    
    const CssTextField = styled(Input)({
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
        minHeight="80vh">
        <Grid xs={12} sm={6} item 
            alignItems='center'
            justify='center'
            style={{
                boxShadow:`${alpha("#00FF87  ", 1)} 0 0 0 2px`,
                borderColor: "#00FF87" }}
                >
                <form>
                    <Card sx={{ bgcolor: 'rgba(60, 60, 60, 0.6)', color: 'text.primary', p: 2 }}>
                    <Typography color ="white" gutterBottom 
                    variant ="h3" align="center" align="center">Log In</Typography>
                        <CardContent>
                            <Grid container spacing ={1}>
                                <Grid xs={12} sm={12}>
                                <label>
                                    Email:
                                    <Input 
                                    type='email'
                                    placeholder='Ingrese su correo'
                                    className=''
                                />
                                </label>
                                </Grid>
                                <Grid>
                                <Input type='password' placeholder='Password' />
                                </Grid>
                                <Grid>
                                <input type='submit' value='Entrar' />
                                </Grid>
                            </Grid>
                        </CardContent>

                    </Card>
                </form>
            </Grid>
        </Box>
    )
}
export default Login