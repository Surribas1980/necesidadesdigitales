import { useState,useEffect} from 'react';
import {deleteService} from '../../http/api';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../../css/DarPuntuacion.css';
import MisServNoSol from './MisServNoSol';
import MisSolDesc from './MisSolDesc';
import MisServSol from './MisServSol';
export default function DarPuntuacion(props){ 
    const servsolucionados = props.solucionados;
    const [misServNoSol,setmisSerNoSol] = useState([]);
    const [misSolDesc, setmisSolDesc] = useState([]);
    
    useEffect(()=>{
        const pedirmisServicios = async ()=>{

            const misServicios = await deleteService('misservicios','GET',0,0);
            console.log('misServicios ',misServicios);
            setmisSerNoSol(misServicios['misServiciosNoSolucionadosConSolucionadores'][0])
            setmisSolDesc(misServicios['misSolucionesDescartadas'][0]);

        }

        pedirmisServicios();
    }
    ,[]);
    

    return(<>
    <Router>

            <nav>
                <div className="header-item1">
                    <Link  to = "/missolucionados">Mis servicios solucionados</Link>
                </div>
                <div className="header-item1">
                    <Link to ="/misservisnosol">Elección de las soluciones</Link>
                </div>
               
            </nav>
    
        <Route path="/misservisnosol">
            <MisSolDesc nosolucionados={misSolDesc}></MisSolDesc>
        </Route>
        
        <Route path="/missolucionados">
            <MisServSol missolucionados={servsolucionados}></MisServSol>
        </Route>
    </Router>
    </>);
}