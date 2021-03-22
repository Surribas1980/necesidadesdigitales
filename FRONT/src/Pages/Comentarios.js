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
    const [cantidad,setCantidad]=useState(2);
    const [numpaginamax,setNumPaginaMax]= useState(2);
    const [numpaginamin,setNumPaginaMin]= useState(1);
    let paginacion;
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
   
     paginacion = PagGinar(numServiciosSinSolucion);
     
     
     
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
 		<div className="miscajas" onClick={()=>{
             if(numpaginamin > 0){
                const menosuno = numpaginamin - 1;
                const menosunoenmax = numpaginamax - 1;
                setNumPaginaMin(menosuno);
                setNumPaginaMax(menosunoenmax);
            }
            console.log('En menos uno', numpaginamax,numpaginamin)

        }}>-</div>       
            {
		    
                paginacion?.map((item)=>{
                    

                    if((item <= numpaginamax) && (item >= numpaginamin)){

                        return (<>
                            <div className="miscajas" onClick={()=>{
                                traerServicios(item)
                            }}>{item}</div>
                        </>)
                    }
				
			
                })
		    
            }
		<div className="miscajas" onClick={()=>{
            if(numpaginamax < paginacion.length){
                const menosuno = numpaginamin + 1;
                const menosunoenmax = numpaginamax + 1;
                setNumPaginaMin(menosuno);
                setNumPaginaMax(menosunoenmax);
            }
            console.log('En mas uno', numpaginamax,numpaginamin)
        }}>+</div>
        </>);
}
