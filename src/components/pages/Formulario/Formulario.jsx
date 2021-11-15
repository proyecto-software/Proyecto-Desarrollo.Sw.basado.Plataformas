import React,{useState} from 'react'
import FormularioAlumno from './FormularioAlumno'


const Formulario = () => {

  //Agregar Formulario
  return (
      <div className="container">
        <h1>Formulario peticion electivo</h1>
        <div className="flex-row">
          <div className="flex-large">
              <div>
                <h2>Agregar formulario</h2>
               <FormularioAlumno/>
               </div>
          </div>
        </div>
      </div>
  )
}

export default Formulario