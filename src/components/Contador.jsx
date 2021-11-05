import React, {useState} from 'react';
/* useStatic: usamos estados */
const Contador = () => {
    /* Lógica de JS */
    /* Ponemos nuestros estados */
    const [numero, setNumero] = useState(0);



    return (
        <h3>Mi primer Componente</h3>
    );
}

export default Contador;