import {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import ListaServicios from '../components/ListaServicios';
import {deleteService} from '../http/api';
import useAuth from '../shared/hooks/useAuth';

function DeleteService(){
    const { register, handleSubmit} = useForm;
    const [servicios, setServices] = useState([]);
    const {userData} = useAuth();

    useEffect(() => {
        const listarServicios = async () => {
            const numServicios = await deleteService('/servicios','GET',0,null); 
            setServices(numServicios.data);
            console.log(`Estos son los servicios del objeto ${servicios}:`);
            console.log(numServicios.data)
        }
        listarServicios();
    },[]);

    let valor = [];
    return (<>
             <h1>Borrar Servicio</h1>
          <p>ID: {userData && userData.id}</p>
        <p>EXP: {userData && userData.exp}</p>  
        <ul>{servicios.map((item)=>{return <li key={item.id_ser}>{item.titulo_ser}</li>})}
            </ul>          
            
            <ListaServicios valores={servicios} ></ListaServicios>
        </>);
}

export default DeleteService;