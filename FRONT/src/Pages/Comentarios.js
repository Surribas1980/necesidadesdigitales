import { useState,useEffect} from 'react';
import ComentariosLista from '../components/User/ComentariosLista';
import { deleteService } from '../http/api';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import InsertComentarios from './InsertComentarios';

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
            <Router>
                <ul>
                    <Link to="/nada">Recoger en Comentarios</Link>
                    <li><Link to="/insertarcomentario">Hacer Comentario</Link></li>
                </ul>

                <Route path="/insertarcomentario">
                    <InsertComentarios />
                </Route>
                <Route path="/nada">

                </Route>

            </Router>

        <ComentariosLista valores={comentarios}></ComentariosLista>
        </>);
}