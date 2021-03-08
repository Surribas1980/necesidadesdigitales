import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import useAuth from '../shared/hooks/useAuth';
import { useState,useEffect} from 'react';
import { deleteService } from '../http/api';
import GraficaRanking from '../components/GraficaRanking';
import InsertServices from './InsertServices';
import ServiciosUser from '../components/User/ServiciosUser';
import ServiciosSolucionados from '../components/User/ServiciosSolucionados';
import InsertComentarios from './InsertComentarios';
import Comentarios from './Comentarios';
import ModificacionDatos from '../components/User/ModificacionDatos';
import Solucion from '../components/User/Solucion';
import DarPuntuacion from '../components/User/DarPuntuacion';


function UserAdmin(){
    const { userData, logOut } = useAuth();
    const [ranking, setRanking] = useState([]);
    const [servesSolucionados, setservisSolucionados] = useState([]);
    const [serviciosNoSolucionados,setserviciosNoSolucionados]=useState([]);
    const [numComentariosSinver,setnumComentariosSinver]=useState(0);
    const [numComentariosSinLer,setnumComentariosSinLer]=useState(0);
    const [numMisSolucionados,setnumMisSolucionados]=useState(0);
    const [numMisSolicitados,setnumMisSolicitados]=useState(0);
    const [misSerNoSolucionados,setmisSerNoSolucionados]=useState([]);
    const [misSolicitados, setmisSolicitados] = useState([]);
    const [misSerSolucionados,setmisSerSolucionados]=useState([]);
    const [valor, setValor] = useState(0);
    const [showMenu, setShowMenu]=useState(false);
    const [mostrar, setMostrar] = useState(false);

    useEffect(()=>{
        const datosUser = async ()=>{
            const data = await deleteService("/users/userLogin/",'GET',0,0);
            
            console.log('El ranking',data);
            
            setRanking(data['ranking']);
            console.log('Servicios solucionados',data['serviSolucionados'][0]);
            setservisSolucionados(data['serviSolucionados'][0]);
            setserviciosNoSolucionados(data['serviciosNoSolucionados'][0]);
            console.log('numerico: ',data['numComentariosSinver'][0]['count(sinver)']);
            setnumComentariosSinLer(data['numComentariosSinLer'][0]['count(sinleer)']);
            setnumComentariosSinver(data['numComentariosSinver'][0]['count(sinver)']);
            setnumMisSolicitados(data['numMisSolicitados'][0]['count(id_ser)']);
            setnumMisSolucionados(data['numMisSolucionados'][0]['count(id_sol)']);
            setmisSerNoSolucionados(data['misSerNoSolucionados']);
            setmisSerSolucionados(data['misSerSolucionados']);
            setmisSolicitados(data['serv']);
            console.log('Esto es data...',data)
        }
        datosUser();
    },[]);



    return (<>
        <Router>
            <button onClick={() => setShowMenu(!showMenu)}>Menú</button>
            {showMenu && <div>Esto é o menu</div>}
            
             
            <ul>     
                 <Link to="/useradmin">Recoger</Link>
                <li>
                    <Link to="/servicio">Solicitar servicio</Link>
                </li>
                <li>
                    <Link to = "/comentario">Comentarios</Link>
                </li>
                <li>
                    <Link to = "/datospersonales">Modificacion de datos personales</Link>
                </li>
                <li>
                    <Link to= "/darsolucion">Dar posible solucion</Link>
                </li>
                <li>
                    <Link to= "/darpuntuacion">Dar puntuación</Link>
                </li>
            </ul>
            <Route path="/darsolucion">
            </Route>
            <Route path="/comentario">
                <Comentarios />
            </Route>
            <Route path="/servicio">
                <InsertServices />
            </Route>
            <Route path="/datospersonales">
                <ModificacionDatos />
            </Route>
            <Route path="/darpuntuacion">
                <DarPuntuacion></DarPuntuacion>
            </Route>
            <Route path="/darsolucion">
                <Solucion nosolucionados={serviciosNoSolucionados}/>
            </Route>
        </Router>
    
    <h1>Estoy en UserAdmin</h1>
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
        <p onClick={()=>{setMostrar(!mostrar)}}>Mostrar</p>
        {mostrar && <p>Esto es otro dato</p>}
        <h1>Gráfica</h1>
        <GraficaRanking valores={ranking}></GraficaRanking>
          
        <h1>Servicios solucionados</h1>
        <ServiciosSolucionados solucionados={servesSolucionados}></ServiciosSolucionados>

        <h1>Servicios no solucionados</h1>
        <ServiciosSolucionados solucionados={serviciosNoSolucionados}></ServiciosSolucionados>

        <h1>Servicios Usuario</h1>
        <ServiciosSolucionados solucionados={misSolicitados}></ServiciosSolucionados>

        <h1>Mis servicios no solucionados</h1>
        <ServiciosSolucionados solucionados={misSerNoSolucionados}></ServiciosSolucionados>

        <h1>Mis servicios solucionados</h1>
        <ServiciosSolucionados solucionados={misSerSolucionados}></ServiciosSolucionados>
        <h1>Datos numéricos</h1>
        Comentarios sin ver: {numComentariosSinver}
        <br></br>
        Comentarios sin leer: {numComentariosSinLer}
        <br></br>
        Cantidad de servicios que solucioné: {numMisSolucionados}
        <br></br>
        Cantidad de mis servicios solicitados: {numMisSolicitados}
        
        


    </>);
}

export default UserAdmin;