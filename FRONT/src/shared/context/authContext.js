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
    
  
    // Método para hacer log in desde los componentes
    //me llega user y pwd,
    const sigIn = async (mail, pwd)=>{
      const loginData = await login(mail,pwd);
      localStorage.setItem('token',loginData);
      const tokenObject = decodeTokenData(loginData);
      setUserData(tokenObject);
      console.log(loginData);
    } 

    return <AuthContextProvider value = {{ userData, sigIn}}>{children}</AuthContextProvider>
}