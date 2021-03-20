import { useState,useEffect} from 'react';
import ComentariosLista from '../components/User/ComentariosLista';
import ServiciosSolucionados from '../components/User/ServiciosSolucionados';
import { deleteService } from '../http/api';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import InsertComentarios from './InsertComentarios';
import Conversaciones from '../components/Conversaciones';
import IniciarConversacion from '../components/IniciarConversacion';
import '../css/Comentarios.css'
import PagGinar from '../shared/utils/helpers';

export default function Comentarios(){
    const [numServiciosSinSolucion,setnumServiciosSinSolucion]=useState(0);
    const [showMenu, setShowMenu]=useState(false);
    const [comentarios,setComentarios] = useState([]);
    const [misconversaciones, setMisConversaciones] = useState([]);
    const [miscomentarios,setMisComentarios] = useState([]);
    const paginacion = [];
    useEffect(()=>{
        const comentServicios = async () => {
            const data = await deleteService("/comentar",'GET',0,0);
            console.log('datos : ', data);
            console.log('datos data : ', data['data'][0]);
            console.log('mis conversaciones ',data['datosMisConversaciones'][0][0]);
            console.log('mis comentarios ', data['datosMisComentarios'][0][0]);
            console.log('Cantidad de servicios no solucionados',data['numservicios'][0][0]['count(id_ser)']);
            setnumServiciosSinSolucion(data['numservicios'][0][0]['count(id_ser)']);
            setMisConversaciones(data['datosMisConversaciones'][0][0]);
            setMisComentarios(data['datosMisComentarios'][0][0]);
            setComentarios(data['data'][0]);
        }
        comentServicios();
    },[showMenu]);
    for(let i=0; i< numServiciosSinSolucion; i++){
        paginacion.push(i);
    }
    let valor = PagGinar(numServiciosSinSolucion);
    console.log('esto es el valor de la funcion', valor);

    const traerServicios = (valor)=>{

        console.log('eso es el valor:',valor)

    }
    
    //<ComentariosLista valores={comentarios}></ComentariosLista>
    return (<>
            <Router>
            
            { 
                <nav>
                    <div className="header-item">

                        <Link to="/iniciarconversacion">Iniciar conversacion</Link>
                    </div>
                        <div className="header-item">

                        <Link to="/insertarcomentario">Conversaciones</Link>
                        </div>
                        
                
                        <div className="header-item">

                            <Link to="/misconversaciones">Mis conversaciones</Link>
                        </div>
            
                        <button onClick={()=>{setShowMenu(!showMenu)}}>Actualizar sección de comentarios</button>
                </nav>
            }
                
                

                <Route path="/insertarcomentario">
                    <Conversaciones convergeneral={comentarios}></Conversaciones>                    
                </Route>
                
                <Route path="/misconversaciones">
                    <ComentariosLista valores={misconversaciones}></ComentariosLista>
                </Route>
                <Route path="/iniciarconversacion">
                    <InsertComentarios />
                   <IniciarConversacion />
                </Route>
                
            </Router>
        
            {
                paginacion?.map((item)=>{
                    return (<>
                        <div className="miscajas" onClick={()=>{
                            traerServicios(item)
                        }}>{item}</div>
                    </>)
                })
            }

        </>);
}