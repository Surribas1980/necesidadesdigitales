import InsertComentarios from "../Pages/InsertComentarios";
import { useState} from 'react';
import PagGinar from '../shared/utils/helpers';
export default function MostrarServiciosComentarios(props){

    const servicios= props?.servicios;
    const cantidad = props?.numservicios;
    const paginacion = PagGinar(cantidad);
    const [numpaginamax,setNumPaginaMax]= useState(2);
    const [numpaginamin,setNumPaginaMin]= useState(1);
    const [id,setId]=useState(0);

    console.log('Servicios en Mostrar servicios',servicios,'Nummax:',numpaginamax,'Numin',numpaginamin);

        const irA = (id,nota)=>{
            if(nota !== 'Tiene conversacion'){
                setId(id);
            }
            console.log('Tiene conversacion')
        }

    //servicios?.map((item)=>{return console.log('En servicios mostrar valores: ',item)});
    return(<>
    <table>
                <thead>
                    <tr>
                        <th>Observación</th>
                        <th>Id del servicio</th>
                        <th>Título del servicio</th>
                        <th>Explicación del servicio</th>
                        <th>Iniciar conversacion</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        servicios?.map((item,index)=>{

                            if((index <= numpaginamax) && (index >= numpaginamin))
                            {
                                return(<>
                                        <tr>
                                            <td>{item.Nota}</td>
                                            <td>{item.id_ser}</td>
                                            <td>{item.expli_ser}</td>
                                            <td>{item.titulo_ser}</td>
                                            <td><button onClick={()=>{irA(item.id_ser,item.Nota)}}>Iniciar conversación</button></td>
                                        </tr>
                                     </>)
                            }
                            
                        })
                    }
                </tbody>
            </table>
            <hr></hr>
            <div className="miscajas" onClick={()=>{
            if(numpaginamin > 0){
               const menosuno = numpaginamin - 1;
               const menosunoenmax = numpaginamax - 1;
               setNumPaginaMin(menosuno);
               setNumPaginaMax(menosunoenmax);
               
           }
           console.log('En menos uno', numpaginamax,numpaginamin)

       }}>{'<'}</div>{  
        paginacion?.map((item)=>{
            

            if((item <= numpaginamax) && (item >= numpaginamin)){

                return (<><div className="miscajas">{item}</div></>)
            }
        
    
        })
    }<div className="miscajas" onClick={()=>{
        if(numpaginamax < paginacion.length){
            const menosuno = numpaginamin + 1;
            const menosunoenmax = numpaginamax + 1;
            setNumPaginaMin(menosuno);
            setNumPaginaMax(menosunoenmax);
            
        }
        console.log('En mas uno', numpaginamax,numpaginamin)
    }}>{'>'}</div>
            {id && <InsertComentarios id_ser={id}/> ? <InsertComentarios id_ser={id}/> : ''}
    </>);
}