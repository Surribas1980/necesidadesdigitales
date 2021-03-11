import AportarSolucion from './AportarSolucion';
import {useState} from 'react';
export default function Solucion(props){
    const [idServicio,setIdservicio] = useState(0);
    const [irA,setirA]=useState(false);
    const sinsolucionar = props?.nosolucionados;
    console.log('Estoy en solucion', props?.nosolucionados);

    const aSolucionar = (valor)=>{
        console.log('aSolucionar: ',valor)
        setIdservicio(valor);
    }
    sinsolucionar?.map((item)=>{
        console.log('map: ',item.id_ser);
    })
    return (<><h1>Dar solucion</h1>
    <table>
        <tbody>

            <tr>
                <td>Nº de servicio</td>
                <td>Puntos</td>
                <td>Puntos solucion</td>
                <td>Solucionador</td>
                <td>Alias</td>
                <td>Titulo servicio</td>
                <td>Puntuacion recibida</td>
            </tr>

        {
            sinsolucionar?.map((item,index)=>{
                return(<>
                            <tr key ={item.id_ser}>
                                    <td>{item.id_ser}</td>
                                    <td>{item['puntos(id_usu)']}</td>
                                    <td>{item['puntos(id_usu_sol)']}</td>
                                    <td>{item.Solucionador}</td>
                                    <td>{item.nom_usu}</td>
                                    <td>{item.titulo_ser}</td>
                                    <td>{item.puntuacion}</td>
                                    <td><button onClick={()=>{aSolucionar(item.id_ser)}}>Dar solucion</button></td>
                            </tr>

                </>);
            })
        }
        </tbody>

    </table>
       {idServicio && <AportarSolucion id={idServicio}></AportarSolucion>}

    </>);
}