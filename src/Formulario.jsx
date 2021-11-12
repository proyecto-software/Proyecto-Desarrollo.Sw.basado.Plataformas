import React,{useState} from 'react'
import UserTable from './components/UserTable'
import AddUserForm from './components/AddUserForm'
import { v4 as uuidv4 } from 'uuid';
import EditUserForm from './components/EditUserForm'

const Formulario = () => {
  const usersData = [
    { id: uuidv4(), name: 'Dionisio', username: 'xdionisio' },
    { id: uuidv4(), name: 'Nicolás', username: 'Ngarcia' },
    { id: uuidv4(), name: 'Jose', username: 'Joseeee' },
  ]
  //State
  const [users, setUsers] = useState(usersData);
  //Agregar usuarios
  const addUser = (user) =>{
    user.id=uuidv4()
    setUsers([
      ...users,
          user
    ])
  }
  //Eliminar Usuarios
  const deleteUser = (id) =>{
    //filtramos por id q le pasamos
    const arrayFiltrado = users.filter(user => user.id !== id);
    setUsers(arrayFiltrado);
  }
  //Editar Usuario
  const [editing, setEditing] = useState(false); 
  //Agregar a los usuario editados
  const [currentUser, setCurrentUser] = useState({
    id:null, name: '',username:''
  });
//Funcion para editar ROW
  const editRow = (user)=>{
    setEditing(true);
    setCurrentUser({
      id: user.id, name:user.name, username:user.username
    })
  }
//función q se dedique a actualizar los datos al editar
const updateUser = (id, updateUser) => {
  setEditing(false);
  setUsers( users.map(user =>(user.id === id ? updateUser : user)))
}
  return (
      <div className="container">
        <h1>Aplicación CRUD con HOOKS</h1>
        <div className="flex-row">
          <div className="flex-large">
          {
            editing ? (
            <div>
            <h2>Editar usuario</h2>
              <EditUserForm
                currentUser = {currentUser}
                updateUser = { updateUser}
             />
              </div>
            ) : (
              <div>
                <h2>Agregar usuario</h2>
               <AddUserForm addUser={addUser}/>
               </div>
            )

          }
          </div>
          <div className="flex-large">
            <h2>Ver usuarios</h2>
            <UserTable 
              users={users} 
              deleteUser={deleteUser} 
              editRow={editRow}
           />
          </div>
        </div>
      </div>
  )
}

export default Formulario