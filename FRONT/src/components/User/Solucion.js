import AportarSolucion from './AportarSolucion';
import {useState} from 'react';
import '../../css/Solucion.css';
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
    <div className="tabla1">

        <div className="caja">
            <div className="caja">
                {
                    sinsolucionar?.map((item,index)=>{

                        return(<>
                                    <div className="caja">
                                        <div className="comienzo">
                                            <div className="caja3">
                                                <div className="caja2">Id</div>
                                                <div className="bordear">{item.id_ser}</div>
                                            </div>
                                            <div className="caja3">
                                                <div className="caja2">Puntos_User</div>
                                                <div className="bordear">{item['puntos(id_usu_soli)']}</div>
                                            </div>
                                            <div className="caja3">
                                                <div className="caja2">AVATAR</div>
                                                <div className="bordear"><img className="imagenAvatar" src={`http://localhost:4000/imagenes/fotousuario${item.id_usu_soli}/${item.nomFoto_usu}`} alt="imagen" /></div>
                                            </div>
                                            <div className="caja3">
                                                <div className="caja2">Alias</div>
                                                <div className="bordear">{item.Solicitador}</div>
                                            </div>
                                            <div className="caja3">
                                                <div className="caja2">Titulo</div>
                                                <div className="bordear">{item.titulo_ser}</div>
                                            </div>
                                            <div className="caja3">
                                                <div className="caja2">Explicación</div>
                                                <div className="bordear">{item.expli_ser}</div>
                                            </div>
                                            <div className="caja3">
                                                <div className="caja2">Solucionar</div>
                                                <button onClick={()=>{aSolucionar(item.id_ser)}}>Dar solucion</button>
                                            </div>
                                        </div>
                                    </div>
                        </>)

                    })
                }
            </div>
        </div>
    </div>
    
       {idServicio && <AportarSolucion id={idServicio}></AportarSolucion> ? <AportarSolucion id={idServicio}></AportarSolucion> : " "}

    </>);
}