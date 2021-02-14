/**
 * Este provider me recupera los datos al estar logueado con el userData
 * Tenemos que utilizar un useState para guardar los datos en caso de actualización 
 */

import React from 'react'
import decodeTokenData from '../utils/decodeTokenData';
import { useState } from 'react';
export const AuthContext = React.createContext();
const AuthContextProvider = AuthContext.Provider;


const token = localStorage.getItem('token');//viene texto y lo convertimos a texto. Si lo tenemos almacenado lo recuperamos
const tokenObject = decodeTokenData(token);


export function AuthProvider({ children }){
    const [userData, setUserData] = useState(tokenObject);


    return <AuthContextProvider value = {{ userData}}>{children}</AuthContextProvider>
}