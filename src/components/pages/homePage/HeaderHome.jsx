import React,{Fragment, useState} from 'react'
import {Box,Grid,Paper,ImageList,ImageListItem  } from '@mui/material'
import logo1 from '../../../img/eicblanco.png'
import logo2 from '../../../img/ucn400x112.png'

const HeaderHome = () => {
    //Styles logos
    const stylelogo1 = {
        width: '30rem',
     
    };
    const stylelogo2 = {
        width: '100%',
        margin:17
     
    };
  //COMPONENTE HEADER DEL HOMEPAGE
  return (
    <Fragment>
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1} >
            <Grid 
                item xs={12} md={6}
            >
            <div className="logo1">
            <a href='https://www.ucn.cl/'>
            <img 
                src={logo2}
                alt="logo 2"
                style={stylelogo1}
               
            />
            </a>
            </div>
            
            </Grid>
            <Grid
            item xs={12} md={6}
            >
            <div className="logo2">
            <a href='https://eic.ucn.cl/'>
            <img 
                src={logo1}
                alt="logo 1"
                style={stylelogo2}
            />
            </a>
            </div>
            </Grid>
        </Grid>
    </Box>
   
    </Fragment>
  )
}

export default HeaderHome