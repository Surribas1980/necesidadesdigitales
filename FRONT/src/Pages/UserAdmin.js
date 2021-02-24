import useAuth from '../shared/hooks/useAuth';
import { useState,useEffect} from 'react';
import { deleteService } from '../http/api';
import GraficaRanking from '../components/GraficaRanking';

function UserAdmin(){
    const { userData, logOut } = useAuth();
    const [ranking, setRanking] = useState([]);
    const [valor, setValor] = useState(0);

    useEffect(()=>{
        const datosUser = async ()=>{
            const data = await deleteService("/users/userLogin/",'GET',0,0);
            
            console.log('El ranking',data['ranking']);
            setRanking(data['ranking']);
            console.log('Esto es data...',data)
        }
        datosUser();
    },[]);



    return (<><h1>Estoy en UserAdmin</h1>
    <p>ID: {userData && userData.id}</p>
        <p>EXP: {userData && userData.exp}</p>
        <button onClick={logOut}>LOG OUT!</button>
        <button onClick={()=>{
                        console.log('Valor es: ',valor);
                        if(valor === 0)
                        {
                            setValor(1);
                        }
                        else{
                            setValor(0);
                        }
        }
            }>Actualizar</button>
        <GraficaRanking valores={ranking}></GraficaRanking>
    </>);
}

export default UserAdmin;