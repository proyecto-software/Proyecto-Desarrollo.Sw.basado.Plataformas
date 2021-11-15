import React , {Fragment} from 'react';
import { FormularioAlumno } from '../pages/Formulario/FormularioAlumno';

const PostFormulario = (dataPost) => {
    
    

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'Formulario-solicitud' })
    };
    fetch('https://reqres.in/api/posts', requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ postId: data.id }));
    return(
        <Fragment>
        {dataPost}
        </Fragment>
    );
}
export default PostFormulario