import { BrowserRouter as Router,Switch, Route,Link,useRouteMatch,useParams } from 'react-router-dom';
import useAuth from '../shared/hooks/useAuth';
import { useState,useEffect} from 'react';
import { deleteService } from '../http/api';
import GraficaRanking from '../components/GraficaRanking';
import InsertServices from './InsertServices';
import ServisSolucionados from '../components/ServisSolucionados';
import Comentarios from './Comentarios';
import ModificacionDatos from '../components/User/ModificacionDatos';
import Solucion from '../components/User/Solucion';
import DarPuntuacion from '../components/User/DarPuntuacion';
import '../css/UserAdmin.css';
import DeleteMyService from '../components/User/DeleteMyService';
import TitleUserAdmin from '../components/User/TitleUserAdmin';
import TitleUserAdminVertical from '../components/User/TitleUserAdminVertical';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope,faBars,faEye,faEyeSlash,faBookOpen,faBook} from '@fortawesome/free-solid-svg-icons';
import ComentariosMenuVertical from '../components/ComentariosMenuVertical';

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
   
    const [showMenu, setShowMenu]=useState(false);
    const [mostrar, setMostrar] = useState(false);
    const [menuLateral, setMenuLateral] = useState(false);
    const [proba,setProba]= useState(0);
    const [donde, setDonde] = useState("");
    const [num, setNum] = useState(0);
   
    const [setComen,setMenuComentario] = useState(0);
    
    
    const [evento,setEvento] = useState(0);
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
        setEvento(0);
        setMenuComentario(0);
        let path = window.location.pathname;
        let lendourl = window.location.search.substring(1);
        let lendoparams = new URLSearchParams(lendourl);
        let valor = lendoparams.get("valor");
        console.log('valor leido',valor);
        
        switch (valor){
            case '1':setEvento(1);break;
            case '2':setEvento(2);break;
            case '3':setEvento(3);break;
            case '4':setEvento(4);break;
            default:setEvento(0);
        }
        
        let verpath = path.slice(1,11);
        console.log('el path es',verpath);
       if(path === '/comentario' || verpath =='comentario'){
        setMenuComentario(1);
        console.log('Entra en Comentario')
       }
    },[showMenu]);
     
    const escuchar = (e,v) =>{
        /*let path = window.location.pathname;
        let verpath = path.slice(1,11);
        console.log('el path es',verpath);
        setMenuComentario(0);
       if(path === '/comentario' || verpath =='comentario'){
        setMenuComentario(1);
        console.log('Entra en Comentario')
       }*/

            const item = e.target;
            
            const valorpasado = item.parentElement.dataset.valor;
            const lugar=item.parentElement.dataset.donde;
            
            if((valorpasado !== null) && (lugar !== null)){
                
                console.log('item.parentElement.dataset.valor',item.parentElement.dataset.valor);
                console.log('item.parentElement.dataset.valor',item.parentElement.dataset.donde);
                setNum(valorpasado);
                setDonde(lugar);
                setEvento(1);
                //setComen(1);
            }

            /*console.log('item.nearestViewportElement.dataset.valor',item.nearestViewportElement.dataset.valor);
            console.log('item.nearestViewportElement.dataset.valor',item.nearestViewportElement.dataset.donde);*/
    }
            
let cajadentrocomentarios = <>
<div className="datosnumericos">   
    <div id="sinver" className="sinver" name="sinver" onClick={escuchar} value={numComentariosSinver} >
        Comentarios sin ver
    </div>                                 

    

<div className="caja1">
    {numComentariosSinver}
</div>
    <div onClick={escuchar} className="mensaje">
    <Link to="/comentario"><FontAwesomeIcon data-donde="sinver" data-valor={numComentariosSinver} icon={faEnvelope}></FontAwesomeIcon></Link>
    {numComentariosSinver > 0 ? <FontAwesomeIcon icon={faEyeSlash}></FontAwesomeIcon> : <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>}
    </div>
</div>

<div className="datosnumericos">
<div id="sin" className="sinler" name="sinler" onClick={escuchar} value={numComentariosSinLer}>
Comentarios sin leer
</div>	

<div className="caja1">
{numComentariosSinLer}
</div> 
<div alt="mensaje" className="mensaje">
    <Link to="/comentario"><FontAwesomeIcon data-donde="sinler" data-valor={numComentariosSinLer} onClick={escuchar} alt="mensaje" icon={faEnvelope}></FontAwesomeIcon></Link>
    {numComentariosSinver > 0 ? <FontAwesomeIcon icon={faBookOpen}></FontAwesomeIcon> : <FontAwesomeIcon icon={faBook}></FontAwesomeIcon>}
    </div>
</div>
</>;       

let cajadentroservicios =<>
                                                                    <div className="datosnumericos">	
                                                                        Cantidad de servicios que solucioné 
                                                                        <div className="caja1">
                                                                        {numMisSolucionados}
                                                                        </div>
                                                                    </div>

                                                                    <div className="datosnumericos">            
                                                                        Cantidad de mis servicios solicitados 
                                                                        <div className="caja1">
                                                                        {numMisSolicitados}
                                                                        </div>                                        
                                                                    </div>
</>;
let sinvermenu = <><div className="mensaje">
<Link to="/comentario"><div onClick={escuchar} name="sinler" value={numComentariosSinLer} className="caja1"><FontAwesomeIcon data-donde="sinler" data-valor={numComentariosSinLer} onClick={escuchar} alt="mensaje" icon={faEnvelope}></FontAwesomeIcon></div></Link>
        {numComentariosSinver > 0 ? <FontAwesomeIcon icon={faBookOpen}/> : <FontAwesomeIcon icon={faBook}/>}
<div className="caja1">
            {numComentariosSinLer}
</div> 
</div></>;
let sinlermenu = <>
<div className="mensaje">
<Link to="/comentario"><div onClick={escuchar} name="sinver" value={numComentariosSinver} className="caja1"><FontAwesomeIcon onClick={escuchar} name="sinler" value={numComentariosSinLer} data-donde="sinver" data-valor={numComentariosSinver} icon={faEnvelope}></FontAwesomeIcon></div> </Link>
        {numComentariosSinver > 0 ? <FontAwesomeIcon icon={faEyeSlash}/> : <FontAwesomeIcon icon={faEye}/>}
<div className="caja1">
        {numComentariosSinver}
</div> 
</div></>;
return (<>    
            
        <main>
            <body>
            <Router>
                
                    <nav className="navegacion">
                        
                            <div className="esconderlateral">
                                <div className="botonmenulateral">                
                                    <FontAwesomeIcon onClick={()=>{setMenuLateral(!menuLateral);}} icon={faBars}></FontAwesomeIcon>
                                </div>
                            </div>
                                
                            <div className="esconder">
                                <div onClick={()=>{setShowMenu(!showMenu)}}>

                                        <TitleUserAdmin datosusuario={datosUsuario}></TitleUserAdmin> 
                                </div>
                            </div>
                            <div className="siempre">

                                {sinlermenu}
                                {sinvermenu}
                                <button onClick={()=>{setShowMenu(!showMenu);}}>Actualizar</button>
                        
                            </div>
                    </nav>
                <div className="centrar">

                    <div className="box">
                                    
                                {menuLateral &&
                                        <div className="esconderlateral">
                                            <div onClick={()=>{setShowMenu(!showMenu)}} className="lateral">                                        
                                                <TitleUserAdminVertical fun={escuchar} datosusuario={datosUsuario}></TitleUserAdminVertical>
                                            </div>                                
                                        </div>
                                }
                                {/*selecMisServi && <TitleMisServicios /> ? <TitleMisServicios /> : ''*/}
                                <div className="esconder">

                                    {setComen && <ComentariosMenuVertical /> ? 
                                    
                                    <div onClick={()=>{setShowMenu(!showMenu)}}><ComentariosMenuVertical/></div>
                                    : ''
                                    
                                    }
                                </div>
                                <div className="centrar">

                                        <div className="principal">
                                        
                                            <div className="englobanumericos">
                                                <div className="cajanumericos">
                                                            
                                                                {/*setComen && cajadentrocomentarios ? cajadentrocomentarios : ''*/}  
                                                                {!setComen && cajadentroservicios ? cajadentroservicios : ''}
                                                                
                                                                     
                                                            
                                                </div> 
                                            </div> 
                                            <hr></hr>  
                                            <hr></hr>
                                                        <Switch>

                                                            <Route path="/comentario">
                                                                
                                                                    
                                                                    <Comentarios evento={evento} donde={donde} numero={num}/> 
                                                                    
                                                                
                                                            </Route>            
                                                            <Route path="/datospersonales">
                                                                <ModificacionDatos datos={datosUsuario}/>
                                                            </Route>
                                                            <Route path="/darpuntuacion">
                                                                
                                                                    
                                                                    <DarPuntuacion misservis={misSolicitados} solucionados={misSerSolucionados}></DarPuntuacion>
                                                            
                                                            </Route>
                                                            <Route path="/darsolucion">
                                                                <div className="lassecciones">

                                                                    <Solucion nosolucionados={serviciosNoSolucionados}/>
                                                                </div>
                                                            </Route>
                                                            <Route path="/solucionados">
                                                                <div className="lassecciones">
                                                                <ServisSolucionados servissolucionados={servesSolucionados}></ServisSolucionados>
                                                                </div>
                                                            </Route>
                                                            <Route path="/ranking">
                                                            <div className="lassecciones">
                                                                <GraficaRanking valores={ranking}></GraficaRanking>
                                                            </div>
                                                            </Route>
                                                            <Route path="/insert/servicios">
                                                                    <InsertServices />
                                                            </Route>

                                                            <Route path="/borrar/misservicios">
                                                            
                                                                    <DeleteMyService />                  
                                                                                
                                                            </Route>
                                                        </Switch>                    
                                            
                                            
                                                    
                                                        
                                                                            
                                        </div>
                                </div>
                    </div>
                </div>                        

            </Router>

            </body>
            
        
        </main>
        
        

    </>);
}

export default UserAdmin;
