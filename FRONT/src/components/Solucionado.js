import { BrowserRouter as Router,Link, Switch, useRouteMatch} from 'react-router-dom';
import UnSolucionado from './UnSolucionado';
function Solucionado(props){

let match = useRouteMatch();

    let solucionados = props.solucionados;
    console.log('Estoy en el nuevo:',props.solucionados)
    console.log('el match', match);
    return(<><h1>Servicios Solucionados</h1>
    {solucionados && solucionados?.map((item,index)=>{
        return(<>
        <div>
            <Link to={`/useradmin${match.url}${item.id_ser}`}>{item.titulo_ser}</Link>
            {console.log('el match.url  ....',match.url)
            }
        </div>
        </>)
    })}
            {/*<Switch>
                <Router path={`/useradmin/${match.path}/:id`}>
                    <UnSolucionado></UnSolucionado>
                </Router>
            </Switch>*/}
    </>);
}
export default Solucionado;