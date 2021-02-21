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
    const text1 = 'idMinServiciosTemporal()';
    const text2 = 'idMaxServiciosTemporal()';
    const [idMin,setIdMin]=useState(0);
    const [idMax,setIdMax]=useState(limite);

    useEffect(() => {
        const listarServicios = async () => {
            //const numServicios = await deleteService('/servicios','GET',0,null); 
            const numServicios = await enviarDatos(limite,inicioLista,alante);
            console.log(numServicios);
            for(const i1 in numServicios){
                console.log(`Estoy en el primer nivel ${i1} = ${numServicios[i1]}`);
                for(const i2 in numServicios[i1]){
                    console.log(`Estoy en el segundo nivel ${i2} = ${numServicios[i1][i2]}`);
                    for(const i3 in numServicios[i1][i2]){
                        console.log(`Estoy en el tercer nivel ${i3}=${numServicios[i1][i2][i3]}`);
                        if(i3 === text1){
                            console.log('lo detectó')
                            setIdMin(numServicios[i1][i2][i3]);
                        }
                        if(i3 === text2){
                            setIdMax(numServicios[i1][i2][i3]);
                        }

                    }
                }
            }
            //setServices(numServicios.data);
           
        }
        listarServicios();
    },[limite,inicioLista,alante]);

    
    return (<>
             <h1>Borrar Servicio</h1>
          <p>ID: {userData && userData.id}</p>
        <p>EXP: {userData && userData.exp}</p>  
        <button onClick={()=>{setInicioLista(idMax); setAlante(1)}}>Adelante</button>
        <button onClick={()=>{setInicioLista(idMin); setAlante(0)}}>Atrás</button>
        </>);
}

export default DeleteService;