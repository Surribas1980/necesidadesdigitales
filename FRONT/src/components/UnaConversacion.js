import {deleteService} from '../http/api';

import { useState,useEffect} from 'react';
import { useParams } from "react-router";
import ComentariosListaParticipo from '../components/User/ComentariosListaParticipo';
function UnaConversacion(props){
    const [datoscomentariosServicios,setdatoscomentariosServicios] = useState("");
    const [comentarConJoin,setcomentarConJoin] = useState("");
    const [ver,setVer] = useState(false);
    const {id_ser}= useParams();
   

    useEffect(()=>{
        const conv = async ()=>{
            const data = await deleteService("/comentar",'POST',1,id_ser);
            console.log ('datos que entran',data)
            setdatoscomentariosServicios(data['datoscomentariosServicios']);
            setcomentarConJoin(data['comentarConJoin'][0][0]);
            console.log('datos con join en conversaciones',data['comentarConJoin'][0][0])

        }
        conv();
    },[id_ser]);
   
    
console.log('entró en una conversación')
   
    return (<>
       
       

{datoscomentariosServicios && datoscomentariosServicios.length > 0 && <ComentariosListaParticipo elementos={datoscomentariosServicios}></ComentariosListaParticipo>}



        {datoscomentariosServicios.length === 0 ? 'No tiene comentarios':''}
       
    </>);
    
}

export default UnaConversacion;