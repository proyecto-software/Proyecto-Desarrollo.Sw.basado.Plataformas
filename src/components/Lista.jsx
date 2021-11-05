import React, { useState,Fragment } from 'react';
const Lista=()=>{
    const [arrayNumero, setArrayNumero] = useState([1,2,3,4,5]);
    const[numero, setNumero] = useState(6);
    
    /* Cuando queremos agregar cosa nuevas debemos usar los set!!! son los estados */
    const agregarElemento = () =>{
        /* Creamos un contador que parte desde 6 , lo seteamos apra hacer el add 1*/
        setNumero(numero + 1)
        /* Agregar elementos a la lista, elementos de propagación */
        setArrayNumero(
            [...arrayNumero,numero]
        )
    }
    return (
        <Fragment>
        <h2>Lista</h2>
        <button  onClick={agregarElemento}  >Agregar</button>
            {   /* Map() recorrido*/
                arrayNumero.map((item,index)=>
                    <p key={index} >{item} - {index}</p>
                )
            }
        </Fragment>
    );
}
export default Lista;