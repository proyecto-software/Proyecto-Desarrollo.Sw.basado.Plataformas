import React, {useState, Fragment} from 'react';
/* useStatic: usamos estados
Fragment: sirve como un div
*/
const Contador = () => {
    /* Lógica de JSX: mexcla de js y html */
    /* Ponemos nuestros estados */
    const [numero, setNumero] = useState(0);
    const aumentar=()=>{
        console.log('me diste un click');
        setNumero(numero + 1);
    }
  /* Fragmente aca va el HTML bcn */
    return (
        <Fragment>
            <h3>Mi primer componente {numero}</h3>
            <button onClick={aumentar} >Aumentar</button>
        </Fragment>
      );
}

export default Contador;