import React,{Fragment, useState} from 'react'
import HeaderHome from '../homePage/HeaderHome'
import FormularioAlumno from './FormularioAlumno'
import {Box,Grid,Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { positions,sizing } from '@mui/system';
const Formulario = () => {
  //Agregar Formulario
  return ( 
      
      <Fragment>
        <HeaderHome/>
        <FormularioAlumno/>
      </Fragment>
  )
}

export default Formulario
