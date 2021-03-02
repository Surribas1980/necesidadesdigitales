import { useState,useEffect} from 'react';
import ComentariosLista from '../components/User/ComentariosLista';
import ServiciosSolucionados from '../components/User/ServiciosSolucionados';
import { deleteService } from '../http/api';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import InsertComentarios from './InsertComentarios';

export default function Comentarios(){
    const [comentarios,setComentarios] = useState([]);

    useEffect(()=>{
        const comentServicios = async () => {
            const data = await deleteService("/comentar",'GET',0,0);
            console.log('datos : ', data);
            
            
            setComentarios(data['data']);
        }
        comentServicios();
    },[]);
    
    //<ComentariosLista valores={comentarios}></ComentariosLista>
    return (<>
        <h1>Estoy en comentarios</h1>
            <Router>
                <ul>
                    <Link to="/nada">Recoger en Comentarios</Link>
                    <li><Link to="/insertarcomentario">Conversaciones</Link></li>
                    <li><Link to="/comentarios" >Mis conversaciones</Link></li>
                </ul>

                <Route path="/insertarcomentario">
                    <InsertComentarios />
                    <ServiciosSolucionados solucionados={comentarios}></ServiciosSolucionados>
                </Route>
                <Route path="/comentarios">

                </Route>
                <Route path="/nada">

                </Route>

            </Router>

        </>);
}