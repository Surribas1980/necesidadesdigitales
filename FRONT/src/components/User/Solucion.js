import AportarSolucion from './AportarSolucion';
import {useState} from 'react';
import '../../css/Solucion.css'
export default function Solucion(props){
    const [idServicio,setIdservicio] = useState(0);
    const [irA,setirA]=useState(false);
    const sinsolucionar = props?.nosolucionados;
    console.log('Estoy en solucion', props?.nosolucionados);

    const aSolucionar = (valor)=>{
        console.log('aSolucionar: ',valor)
        setIdservicio(valor);
    }
   
    return (<>
    <table>
        <tbody>

            <tr>
                <th>Nº de servicio</th>
                <th>Puntos de quien solicita</th>                
                <th>AVATAR</th>
                <th>Alias</th>
                <th>Titulo servicio</th>
                <th>Explicación del servicio</th>
                <th>Última puntuacion recibida</th>
            </tr>

        {
            sinsolucionar?.map((item,index)=>{
                return(<>
                            <tr>
                                    <td>{item.id_ser}</td>
                                    <td>{item['puntos(id_usu_soli)']}</td>
                                    <td>
                                     <img className="imagenAvatar" src={`http://localhost:4000/imagenes/fotousuario${item.id_usu_soli}/${item.nomFoto_usu}`} alt="imagen" />
                                    </td>
                                    <td>{item.Solicitador}</td>
                                    <td>{item.titulo_ser}</td>
                                    <td>{item.expli_ser}</td>
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