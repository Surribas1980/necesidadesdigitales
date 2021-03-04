import { useState,useEffect} from 'react';
import ComentariosLista from '../components/User/ComentariosLista';
import ServiciosSolucionados from '../components/User/ServiciosSolucionados';
import { deleteService } from '../http/api';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import InsertComentarios from './InsertComentarios';

export default function Comentarios(){
    const [comentarios,setComentarios] = useState([]);
    const [misconversaciones, setMisConversaciones] = useState([]);
    const [miscomentarios,setMisComentarios] = useState([]);
    useEffect(()=>{
        const comentServicios = async () => {
            const data = await deleteService("/comentar",'GET',0,0);
            console.log('datos : ', data);
            console.log('datos data : ', data['data'][0]);
            console.log('mis conversaciones ',data['datosMisConversaciones'][0][0]);
            console.log('mis comentarios ', data['datosMisComentarios'][0][0]);
            setMisConversaciones(data['datosMisConversaciones'][0][0]);
            setMisComentarios(data['datosMisComentarios'][0][0]);
            setComentarios(data['data'][0]);
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
                    <li><Link to="/miscomentarios" >Mis comentarios</Link></li>
                </ul>

                <Route path="/insertarcomentario">
                    <InsertComentarios />
                    <ServiciosSolucionados solucionados={comentarios}></ServiciosSolucionados>
                </Route>
                <Route path="/miscomentarios">
                    <ServiciosSolucionados solucionados={miscomentarios}></ServiciosSolucionados>
                </Route>
                <Route path="/nada">

                </Route>

            </Router>
        <ComentariosLista valores={misconversaciones}></ComentariosLista>
        </>);
}