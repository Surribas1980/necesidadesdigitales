import { useState,useEffect} from 'react';
import ComentariosLista from '../components/User/ComentariosLista';
import { deleteService } from '../http/api';

export default function Comentarios(){
    const [comentarios,setComentarios] = useState([]);

    useEffect(()=>{
        const comentServicios = async () => {
            const data = await deleteService("/comentar",'GET',0,0);
            console.log('datos : ', data);
            setComentarios(data);
        }
        comentServicios();
    },[]);

    return (<>
        <h1>Estoy en comentarios</h1>
        <ComentariosLista valores={comentarios}></ComentariosLista>
        </>);
}