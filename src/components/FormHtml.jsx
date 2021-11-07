import React, { Fragment, useState} from 'react';

const Formulario = () => {
    /* HOOKS */
    
    return (
        <Fragment className="container"> 
        <div className="c1">
            <img src="" alt="logo" className="logo1"/>
        </div>
        <div clclassNamess="c2">
            <img src="" alt="logo" className="logo2"/>
        </div>
        <div className="form-alumno-container">      
            <form action="/" className="form">
                        <h1 className="text-form-alumno">Formulario Alumno</h1>

                        <label for="text" className="label">Rut</label>
                        <input type="text" id="rut" placeholder="Ejemplo: 12345678-9" className="input input-rut"/>

                        <label for="email" className="label">Correo</label>
                        <input type="email" id="email" placeholder="juan.perez@alumnos.ucn.cl" className="input input-mail"/>

                        <label for="carrera" className="label">Carrera</label>
                        <select className="input input-carrera" name="carrera">
                            <option value="ICCI"><label for="icii" className="label">ICCI</label></option>
                            <option value="ITI"><label for="iti" className="label">ITI</label></option>
                            <option value="ICI"><label for="ici" className="label">ICI</label></option>
                        </select>

                        <label for="cantidad" className="label">Cantidad</label>
                        <select className="input input-cantidad" name="cantidad">
                            <option value="1"><label for="1" className="label">1</label></option>
                            <option value="2"><label for="2" className="label">2</label></option>
                            <option value="3"><label for="3" className="label">3</label></option>
                        </select>

                        <label for="electivo1" className="label">Primer Electivo</label>
                        <select className="input input-electivo1" name="electivo1">
                            <option value="e1"><label for="e1" className="label">Electivo 1</label></option>
                            <option value="e2"><label for="e2" className="label">Electivo 2</label></option>
                            <option value="e3"><label for="e3" className="label">Electivo 3</label></option>
                        </select>

                        <label for="electivo2" className="label">Segundo Electivo</label>
                        <select className="input input-electivo2" name="electivo2">
                            <option value="e11"><label for="e11" className="label">Electivo 1</label></option>
                            <option value="e22"><label for="e22" className="label">Electivo 2</label></option>
                            <option value="e33"><label for="e33" className="label">Electivo 3</label></option>
                        </select>

                        <label for="electivo3" className="label">Tercer Electivo</label>
                        <select className="input input-electivo3" name="electivo3">
                            <option value="e111"><label for="e111" className="label">Electivo 1</label></option>
                            <option value="e222"><label for="e222" className="label">Electivo 2</label></option>
                            <option value="e333"><label for="e333" className="label">Electivo 3</label></option>
                        </select>
                    
                
                        <input type="submit" value="Enviar" className="primary-button login-button"/>
                    
                    
            </form>
        </div>   
        </Fragment>
    );
}

export default Formulario
