import { useState,useEffect} from 'react';
import ComentariosLista from '../components/User/ComentariosLista';
import { deleteService } from '../http/api';
import { BrowserRouter as Router, Route, Link,useHistory } from 'react-router-dom';
import Conversaciones from '../components/Conversaciones';
import '../css/Comentarios.css'
import PagGinar from '../shared/utils/helpers';
import MostrarServiciosComentarios from '../components/MostrarServiciosComentarios';
import ConversacionesParticipo from '../components/User/ConversacionesParticipo';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowAltCircleLeft,faUndo} from '@fortawesome/free-solid-svg-icons';
import ComentariosMenuVertical from '../components/ComentariosMenuVertical';

export default function Comentarios(props){
    let atras = useHistory();
    const [numServiciosSinSolucion,setnumServiciosSinSolucion]=useState(0);
    const [showMenu, setShowMenu]=useState(false);
    const [showSiguiente, setShowSiguiente]=useState(false);
    const [comentarios,setComentarios] = useState([]);
    const [misconversaciones, setMisConversaciones] = useState([]);
    const [miscomentarios,setMisComentarios] = useState([]);
    const [cantidad,setCantidad]=useState(2);
    const [numpaginamax,setNumPaginaMax]= useState(2);
    const [numpaginamin,setNumPaginaMin]= useState(1);
    const [servicios,setServicios] = useState("");
    const [comentariosRecibidos,setcomentariosRecibidos] = useState([]);
    let paginacion;
    const valores = props.numero;
    const donde = props.donde;
    const even = props.evento;
    console.log('numero valores:',valores,'donde:',donde,'evento',even);
    useEffect(()=>{
        const comentServicios = async () => {
            const data = await deleteService("/comentar",'GET',0,0);
            setServicios(data['servicios'][0]);
            console.log('datos : ', data);
            console.log('datos data : ', data['data'][0]);
            console.log('mis conversaciones ',data['datosMisConversaciones'][0][0]);
            console.log('mis comentarios ', data['datosMisComentarios'][0][0]);
            console.log('Cantidad de servicios no solucionados',data['numservicios'][0][0]['count(id_ser)']);
            setnumServiciosSinSolucion(data['numservicios'][0][0]['count(id_ser)']);
            setMisConversaciones(data['datosMisConversaciones'][0][0]);
            setMisComentarios(data['datosMisComentarios'][0][0]);
            setcomentariosRecibidos(data['comentariosRecibidos'][0][0]);
            setComentarios(data['data'][0]);
        }
        comentServicios();

        
    },[showMenu]);
    
  
    
let actualiza = <><div className="mensaje">
<FontAwesomeIcon onClick={()=>{setShowMenu(!showMenu)}} icon={faUndo}></FontAwesomeIcon>
</div></>;
let salida1 = <><div className="separacion"><MostrarServiciosComentarios numservicios={numServiciosSinSolucion} servicios={servicios} paginamax={numpaginamax} paginamin={numpaginamin} ></MostrarServiciosComentarios></div></>; 
let salida2 = <><Conversaciones convergeneral={comentarios}></Conversaciones></>;    
let salida3 = <><ConversacionesParticipo misconvergenericas={comentariosRecibidos}/></>;  
let salida4 = <><ComentariosLista valores={misconversaciones}></ComentariosLista></>; 
let salida;  
switch(even){
    case 1: salida = salida1;break;
    case 2: salida = salida2;break;
    case 3: if(comentariosRecibidos.length > 0){
        salida = salida3;break;
    }else{
        salida = <h4>No tiene comentarios sin leer</h4>;break;
    }
    case 4: salida = salida4;break;
    default: salida = salida1;break;
}
    //<ComentariosLista valores={comentarios}></ComentariosLista>
    return (<>{actualiza}            
            {salida}
        </>);
}
