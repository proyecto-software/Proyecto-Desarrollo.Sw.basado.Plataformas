import React, { useState,Fragment } from 'react';

const Formulario = () => {

/* Por cada input vamos a ustilizar los hooks basandonos en lo que es useState */
/* Creamos un objeto */
    const [datos, setDatos] =useState({
        nombre:'',
        apellido:''
    })
    /* Funcion al input */
    const handleInputChange = (event) => {
        console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }
    /* Funcion para enviar datos */
    const enviarDatos = (event)=>{
        /* Método Get */
        event.preventDefault();
        console.log(datos.nombre + '' +datos.apellido)
    }
    /* Formik, me ayuda a validar los inputs del lado del frontend */
    return (
        <Fragment>
        <h1>Formulario</h1>
            <form className=""
                onSubmit={enviarDatos}>
                <div className="">
                    <label> Name:
                    <input placeholder="Ingrese Nombre"
                    type="text"
                    className=""
                    name="nombre"
                    onChange={handleInputChange}
                    ></input>
                    </label>
                </div>
                <div className="">
                <label> LastName:
                    <input placeholder="Ingrese Apellido"
                    className=""
                    type="text"
                    name="apellido"
                    onChange={handleInputChange}
                    ></input>
                </label>
                </div>
                <div className="">
                    <button className="primary-button">Enviar</button>
                </div>            
            </form>
            <h3>{datos.nombre} - {datos.apellido}</h3>
        </Fragment>
    )
}
export default Formulario;