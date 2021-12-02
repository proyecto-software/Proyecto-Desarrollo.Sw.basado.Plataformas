import React,{useState,useEffect} from 'react'
import { useForm } from "react-hook-form";
import {Button,Card,CardContent,Typography,TextField,Grid,Autocomplete,Box} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import Alert from '@mui/material/Alert';

import {Link} from 'react-router-dom';

const Login = () => {
    const [error, setError] = useState(null);
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
                                <Grid xs={12} sm={6}>
                                <label text="hola"/>
                                <input type='email' placeholder='Email' />
                                </Grid>
                                <Grid>
                                <input type='password' placeholder='Password' />
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