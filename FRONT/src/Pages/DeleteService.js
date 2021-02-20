import {useState, useEffect} from 'react';

import ListaServicios from '../components/ListaServicios';
import {enviarDatos} from '../http/api';
import useAuth from '../shared/hooks/useAuth';

function DeleteService(){
    
    const [servicios, setServices] = useState([]);
    const [limite, setLimite] = useState(15);
    const [inicioLista, setInicioLista] = useState(1);
    const [alante, setAlante] = useState(1)
    const {userData} = useAuth();

    useEffect(() => {
        const listarServicios = async () => {
            //const numServicios = await deleteService('/servicios','GET',0,null); 
            const numServicios = await enviarDatos(limite,inicioLista,alante);
            console.log(numServicios)
            //setServices(numServicios.data);
            console.log(numServicios.idMaxTemporal[0].idMaxServiciosTemporal)
        }
        listarServicios();
    },[limite,inicioLista]);

    
    return (<>
             <h1>Borrar Servicio</h1>
          <p>ID: {userData && userData.id}</p>
        <p>EXP: {userData && userData.exp}</p>  
        <button onClick={()=>{}}>Adelante</button>
        </>);
}

export default DeleteService;