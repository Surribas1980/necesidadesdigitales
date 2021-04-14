import {Link} from 'react-router-dom';
function Solucionado(props){

    let solucionados = props.solucionados;
    console.log('Estoy en el nuevo:',props.solucionados)
    return(<><h1>Servicios Solucionados</h1>
    {solucionados && solucionados?.map((item,index)=>{
        return(<>
        <div><Link to="/solucionado">{item.titulo_ser}</Link></div>
        </>)
    })}
    </>);
}
export default Solucionado;