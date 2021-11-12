import React from 'react'

const UserTable = (props) => {
    //console.log(props.users)
    return( 
    <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
         {  
             props.users.length > 0 ?
             //Si los usuario su tamanio es mayor a 0 haces lo de abajo
             props.users.map(user => (
                <tr key={user.id}>
                    <td>{user.id} - {user.name}</td>
                    <td>{user.username}</td>
                    <td>
                    <button className="button muted-button"
                            onClick={
                                () => {props.editRow(user)}
                            }                            
                    >Editar
                    </button>
                    <button className="button muted-button"
                            onClick = {() =>{
                                props.deleteUser(user.id)
                            }}
                    >
                    Delete
                    </button>
                    </td>
                </tr>
             )) : (//caso contrario, muestras esto..
                <tr>
                <td colSpan={3}>No usuarios registrados</td>
                </tr>
            )
         }

        </tbody>
    </table>
  );
}

export default UserTable