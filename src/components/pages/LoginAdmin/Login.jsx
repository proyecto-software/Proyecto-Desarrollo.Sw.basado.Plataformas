import React,{useState,useEffect} from 'react'
import { useForm } from "react-hook-form";
import {Input,Button,Card,CardContent,Typography,TextField,Grid,Autocomplete,Box} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import {useHistory} from 'react-router-dom';
import {useAuth} from '../../../context/AuthContext'
const Login = () => {
    const{login}=useAuth();
    const [error, setError] = useState(null);
    const[loading,setLoading] = useState(false);
    const[email, setEmail]=useState('');
    const[password, setPassword]=useState('');
    
    const handleEmail= (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    
    const history = useHistory();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setLoading(true);
        try{
            await login(email,password);
            setLoading(false);
            history.push('/HomeAdmin');
        } catch(error) {
            setError('Credenciales Incorrectas');
            setTimeout(()=>  setLoading(false),2500);
            setTimeout(()=> setError(''),2500);
            
        }
    }
  


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
                
                    <Card sx={{ bgcolor: 'rgba(60, 60, 60, 0.6)', color: 'text.primary', p: 2 }}>
                    <Typography color ="white" gutterBottom 
                    variant ="h3" align="center">Log In</Typography>
                    <br/>
                    <br/>
                    <Grid xs={12} item>
                    <div align="center">
                    <form onSubmit={handleSubmit}>
                        <CardContent>
                           
                                <Grid xs={12} sm={12}>
                                
            {error && <p className="error">{error}</p>}
                           
                                </Grid>
                                <Grid xs={20} sm={20}>
                                <TextField id="Email" label="Email" variant="outlined" 
                                    type='email'
                                    placeholder='Ingrese su correo'
                                    className=''
                                    style={{ 
                                            backgroundColor: 'rgba(160, 160, 160, 0.6)',
                                            width:'20rem',
                                            height:'4.5rem',
                                            fontSize:15
                                            }}
                                    onChange={handleEmail}


                                />
                                </Grid>
                                <br></br>
                               
                                <Grid xs={20} sm={20}>
                                <TextField id="Email" label="Password" variant="outlined" 
                                    type='Password'
                                    placeholder='Ingrese su clave'
                                    className=''
                                   
                                    style={{ 
                                            backgroundColor: 'rgba(160, 160, 160, 0.6)',
                                            width:'20rem',
                                            height:'4.5rem',
                                            fontSize:15
                                            }}


                                    onChange={handlePassword}

                                />
                                </Grid>
                                <br></br><br></br>
                                <Grid>
                                
                                <Button  style={{ 
                    backgroundColor: 'rgba(160, 160, 160, 0.6)',
                    width:'20rem',
                    height:'5rem',
                    fontSize:15
                    }}   type="password" variant="contained"  onChange={handlePassword}  >Entrar</Button>
                                </Grid>
                           
           
                        </CardContent>
                    </form>
                        {loading && <CircularProgress />}
                   
                    </div>
                    </Grid>
                    </Card>
                
            </Grid>
        </Box>
    )
}
export default Login