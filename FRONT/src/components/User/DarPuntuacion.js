import { useState,useEffect} from 'react';
import {deleteService} from '../../http/api';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../../css/DarPuntuacion.css';
import MisServNoSol from './MisServNoSol';
import MisSolDesc from './MisSolDesc';
export default function DarPuntuacion(){ 
    const [misServNoSol,setmisSerNoSol] = useState([]);
    const [misSolDesc, setmisSolDesc] = useState([]);
    const [showMenu, setShowMenu]=useState(false);
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
    

    return(<><h1>Estoy en dar puntuación</h1>
    <Router>

    <button onClick={()=>{setShowMenu(!showMenu)}}>Ver menús</button>
    {
        showMenu &&
            <nav>
                <div className="header-item1">
                    <Link to ="misservisnosol">Posibles soluciones</Link>
                </div>
                <div className="header-item1">
                    <Link to = "missolucionesdescartadas">Mis soluciones descartadas</Link>
                </div>
            </nav>
    }
        <Route path="misservisnosol">
            <MisSolDesc nosolucionados={misServNoSol}></MisSolDesc>
        </Route>
        <Route path="missolucionesdescartadas">
            <MisServNoSol descartadas={misSolDesc}></MisServNoSol>
        </Route>
    </Router>
    </>);
}