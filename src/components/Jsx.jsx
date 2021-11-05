import React, { Fragment } from 'react';

const Jsx=()=>{
    const temperatura = 21;
    return ( 
        <Fragment>
        <h2>Frío o Calor?</h2>
            <h4>
                {
                    temperatura > 20 ? 'Hace Calorsh':'Hace frío'
                }
            </h4>
        </Fragment>
    );
}
export default Jsx;