/**
 * Este provider me recupera los datos al estar logueado con el userData
 * Tenemos que utilizar un useState para guardar los datos en caso de actualización 
 */

import React from 'react'
import decodeTokenData from '../utils/decodeTokenData';
import { useState, useHistory } from 'react';
import { login } from '../../http/api';
export const AuthContext = React.createContext();
const AuthContextProvider = AuthContext.Provider;


const token = localStorage.getItem('token');//viene texto y lo convertimos a texto. Si lo tenemos almacenado lo recuperamos
const tokenObject = decodeTokenData(token);


export function AuthProvider({ children }){
    const [userData, setUserData] = useState(tokenObject);
    //const [isUserLogged, setIsUserLogged] = useState(!!tokenObject);
    const history = useHistory();
  
    // Método para hacer log in desde los componentes
    const signIn = async (email, password) => {
      const loginData = await login(email, password);
      localStorage.setItem('token', loginData);
      const tokenObject = decodeTokenData(loginData);
      setUserData(tokenObject);
      //setIsUserLogged(true);
      history.push('/');
    };

    return <AuthContextProvider value = {{ userData,signIn}}>{children}</AuthContextProvider>
}