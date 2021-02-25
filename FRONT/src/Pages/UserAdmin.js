import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import useAuth from '../shared/hooks/useAuth';
import { useState,useEffect} from 'react';
import { deleteService } from '../http/api';
import GraficaRanking from '../components/GraficaRanking';
import InsertServices from './InsertServices';
import ServiciosUser from '../components/User/ServiciosUser';
import ServiciosSolucionados from '../components/User/ServiciosSolucionados';

function UserAdmin(){
    const { userData, logOut } = useAuth();
    const [ranking, setRanking] = useState([]);
    const [misSolicitados, setmisSolicitados] = useState([]);
    const [servesSolucionados, setservisSolucionados] = useState([]);
    const [valor, setValor] = useState(0);
    const [showMenu, setShowMenu]=useState(false);

    useEffect(()=>{
        const datosUser = async ()=>{
            const data = await deleteService("/users/userLogin/",'GET',0,0);
            
            console.log('El ranking',data['ranking']);
            setRanking(data['ranking']);
            setmisSolicitados(data['serv']);
            setservisSolucionados(data['serviSolucionados']);
            console.log('Esto es data...',data)
        }
        datosUser();
    },[]);



    return (<>
        <Router>
            <button onClick={() => setShowMenu(!showMenu)}>Menú</button>
            {showMenu && <div>Esto é o menu</div>}
            <ul>
                <li>
                    <Link to="/darsolucion">Página dar solucion</Link>    
                </li>
                <li>
                    <Link to="/servicio">Solicitar servicio</Link>
                </li>
            </ul>
            <Route path="/darsolucion">
                
            </Route>
            <Route path="/servicio">
                <InsertServices />
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
       <ServiciosUser servicios={misSolicitados}></ServiciosUser>
        <GraficaRanking valores={ranking}></GraficaRanking>
        <ServiciosSolucionados solucionados={servesSolucionados}></ServiciosSolucionados>
    </>);
}

export default UserAdmin;