import {useState, useEffect} from 'react';
import ListaServicios from '../components/ListaServicios';
import {deleteService} from '../http/api';
import useAuth from '../shared/hooks/useAuth';

function DeleteService(){
    const [servicios, setServices] = useState([]);
    const {userData} = useAuth();

    useEffect(() => {
        const listarServicios = async () => {
            const numServicios = await deleteService('/servicios','GET'); 
            setServices(numServicios.data);
            console.log(`Estos son los servicios del objeto ${servicios}:`);
            console.log(numServicios.data)
        }
        listarServicios();
    },[]);

    return (<>
             <h1>Borrar Servicio</h1>
          <p>ID: {userData && userData.id}</p>
        <p>EXP: {userData && userData.exp}</p>
       {servicios.map((item)=>{return <p>{item.titulo_ser}</p>})}
        </>);
}

export default DeleteService;