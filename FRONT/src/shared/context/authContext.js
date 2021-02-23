/**
 * Este provider me recupera los datos al estar logueado con el userData
 * Tenemos que utilizar un useState para guardar los datos en caso de actualización 
 */

import React from 'react'
import decodeTokenData from '../utils/decodeTokenData';
import { useState } from 'react';
import { login } from '../../http/api';
import { useHistory } from 'react-router-dom';
export const AuthContext = React.createContext();
const AuthContextProvider = AuthContext.Provider;

const token = localStorage.getItem('token');//viene texto y lo convertimos a texto. Si lo tenemos almacenado lo recuperamos
const tokenObject = decodeTokenData(token);


export function AuthProvider({ children }){
    const [userData, setUserData] = useState(tokenObject);
    const [isUserLogged, setIsUserLogged] = useState(!!tokenObject);
    const history = useHistory();
  
    // Método para hacer log in desde los componentes
    //me llega user y pwd,
    const sigIn = async (mail, pwd)=>{
      const loginData = await login(mail,pwd);
      localStorage.setItem('token',loginData);
      const tokenObject = decodeTokenData(loginData);
      setUserData(tokenObject);
      setIsUserLogged(true);
      /*if(userData.rol === 'normal'){
        history.push('/useradmin');
      }else{
        
      }*/
      history.push('/');
    } 

    const logOut = () => {
      localStorage.removeItem('token');      
      history.push('/');
      setUserData(null);
      setIsUserLogged(false);
    };

    //const sendFiles = async 

    return <AuthContextProvider value = {{ userData, sigIn, logOut, isUserLogged}}>{children}</AuthContextProvider>
}