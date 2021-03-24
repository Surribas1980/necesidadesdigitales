import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import useAuth from '../shared/hooks/useAuth';
import { useState,useEffect} from 'react';
import { deleteService } from '../http/api';
import GraficaRanking from '../components/GraficaRanking';
import InsertServices from './InsertServices';
import ServisSolucionados from '../components/ServisSolucionados';
import ServiciosSolucionados from '../components/User/ServiciosSolucionados';
import InsertComentarios from './InsertComentarios';
import Comentarios from './Comentarios';
import ModificacionDatos from '../components/User/ModificacionDatos';
import Solucion from '../components/User/Solucion';
import DarPuntuacion from '../components/User/DarPuntuacion';
import '../css/UserAdmin.css'
import DeleteService from '../Pages/DeleteService';
import DeleteMyService from '../components/User/DeleteMyService';
import TitleUserAdmin from '../components/User/TitleUserAdmin';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope,faBars,faHandPointUp} from '@fortawesome/free-solid-svg-icons';

function UserAdmin(){
    const { userData, logOut } = useAuth();
    const [ranking, setRanking] = useState([]);
    const [datosUsuario, setDatosUsuario] = useState([]);
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
    const [menuLateral, setMenuLateral] = useState(false);
    
    useEffect(()=>{
        const datosUser = async ()=>{
            const data = await deleteService("/users/userLogin/",'GET',0,0);
            
            console.log('El ranking',data);
            setDatosUsuario(data['datosUsuario']);
            setRanking(data['ranking']);
            console.log('Servicios solucionados',data['serviSolucionados'][0]);
            setservisSolucionados(data['serviSolucionados'][0]);
            setserviciosNoSolucionados(data['serviciosNoSolucionados'][0]);
            console.log('Servicios No solucionados',data['serviciosNoSolucionados'][0]);
            console.log('numerico: ',data['numComentariosSinver'][0]['count(sinver)']);
            setnumComentariosSinLer(data['numComentariosSinLer'][0]['count(sinleer)']);
            setnumComentariosSinver(data['numComentariosSinver'][0]['count(sinver)']);
            setnumMisSolicitados(data['numMisSolicitados'][0]['count(id_ser)']);
            setnumMisSolucionados(data['numMisSolucionados'][0]['count(id_sol)']);
            setmisSerNoSolucionados(data['misSerNoSolucionados'][0]);
            setmisSerSolucionados(data['misSerSolucionados'][0]);
            setmisSolicitados(data['serv']);
            console.log('Esto es data...',data)
        }
        datosUser();
    },[showMenu]);



    return (<>
        <Router>
            <nav>
            <div className="botonmenulateral">                
                <FontAwesomeIcon onClick={()=>{setMenuLateral(!menuLateral);}} icon={faBars}></FontAwesomeIcon>
            </div>
            <TitleUserAdmin datosusuario={datosUsuario}></TitleUserAdmin> 
        <button onClick={()=>{setShowMenu(!showMenu);}}>Actualizar</button>
            </nav>
            <Route path="/comentario">
                <Comentarios />
            </Route>            
            <Route path="/datospersonales">
                <ModificacionDatos datos={datosUsuario}/>
            </Route>
            <Route path="/darpuntuacion">
                <DarPuntuacion solucionados={misSerSolucionados}></DarPuntuacion>
            </Route>
            <Route path="/darsolucion">
                <Solucion nosolucionados={serviciosNoSolucionados}/>
            </Route>
            <Route path="/solucionados">
                <ServisSolucionados servissolucionados={servesSolucionados}></ServisSolucionados>
            </Route>
            <Route path="/delete/servicios">                 
                    <DeleteService />                  
            </Route>
            <Route path="/insert/servicios">
                    <InsertServices />
            </Route>

            <Route path="/borrar/misservicios">                 
                    <DeleteMyService />                  
            </Route>
            </Router>
    
    
            
        <main>
            <div className="box">
                {menuLateral && <div className="lateral">Eso es otro div</div>}
                {!menuLateral && <div>Este es el otro menú</div>}
                <div className="principal">
                        
                            <div className="cajanumericos">
                                
                                        <div className="datosnumericos">                                    
                                                Comentarios sin ver:
                                            <div className="caja1">
                                                {numComentariosSinver}
                                            </div>
                                                <div className="mensaje">
                                                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                                                </div>
                                        </div>
                                        
                                        <div className="datosnumericos">	
                                        Comentarios sin leer:
                                            <div className="caja1">
                                            {numComentariosSinLer}
                                            </div> 
                                        </div>

                                        <div className="datosnumericos">	
                                        Cantidad de servicios que solucioné: 
                                            <div className="caja1">
                                            {numMisSolucionados}
                                            </div>
                                        </div>

                                        <div className="datosnumericos">            
                                            Cantidad de mis servicios solicitados: 
                                            <div className="caja1">
                                            {numMisSolicitados}
                                            </div>                                        
                                        </div> 
                                
                            </div>

                            <section className="secciones">                                
                                <GraficaRanking valores={ranking}></GraficaRanking>
                            </section>
                        
                            <section className="tabla1">
                                <h1>Servicios solucionados</h1>
                                <ServiciosSolucionados solucionados={servesSolucionados}></ServiciosSolucionados>
                            </section>
                        
                            <section className="tabla1">
                                <h1>Servicios no solucionados</h1>
                                <ServiciosSolucionados solucionados={serviciosNoSolucionados}></ServiciosSolucionados>
                            </section>
                        
                            <section className="tabla1">
                                <h1>Servicios Usuario</h1>
                                <ServiciosSolucionados solucionados={misSolicitados}></ServiciosSolucionados>
                           
                                <h1>Mis servicios no solucionados</h1>
                                <ServiciosSolucionados solucionados={misSerNoSolucionados}></ServiciosSolucionados>
                            </section>
                        
                        
                            <section className="tabla1">
                                <h1>Mis servicios solucionados</h1>
                                <ServiciosSolucionados solucionados={misSerSolucionados}></ServiciosSolucionados>
                            </section>                    
                    </div>
            </div>



        </main>
        
        


    </>);
}

export default UserAdmin;
