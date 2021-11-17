import React,{useState} from 'react'
import FormularioAlumno from './FormularioAlumno'


const Formulario = () => {

  //Agregar Formulario
  return (
      <div className="">
        <h1>Formulario peticion electivo</h1>
        <div className="">
          <div className="">
              <div>
              <br/>
               <FormularioAlumno/>
               </div>
          </div>
        </div>
      </div>
  )
}

export default Formulario