import React, {createContext, useState, useEffect} from 'react';
import {auth} from '../firebase'
/* Vamos a importar un provider */
const AuthContext = createContext();

export const AuthProvider = (props)=> {
    const [currentUser, setCurrentUser] = useState({});
    useEffect( () => {
        auth.onAuthStateChanged( (user)=> {
            setCurrentUser(user);
        })
    }, [])
    /* Crear nuevo usuario */
    const signup = (email, password)=>{
        return auth.createUserWithEmailAndPassword(email,password);
    }
     /* Login usuario */
    const login =(email, password)=>{
        return auth.signInWithEmailAndPassword(email,password);
    }
     /* Salir usuario */
    const logout = ()=>auth.logout();
    const value = {signup,login,logout,currentUser};
    return(
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}