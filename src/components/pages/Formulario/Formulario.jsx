import React,{Fragment, useState} from 'react'
import HeaderHome from '../homePage/HeaderHome'
import FormularioAlumno from './FormularioAlumno'

const Formulario = (props) => {
  
  return (
      <Fragment>
        <HeaderHome/>
        <FormularioAlumno endpoint={props.endpoint} carreras={props.carreras} electivos={props.electivos}/>
      </Fragment>
  )
}

export default Formulario
