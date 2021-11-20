import React,{Fragment, useState} from 'react'
import HeaderHome from '../homePage/HeaderHome'
import FormularioAlumno from './FormularioAlumno'

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
