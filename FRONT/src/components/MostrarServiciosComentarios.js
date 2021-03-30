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
        console.log('La url es la pulsada estoy en MostrarServiciosComentarios y el path es:',window.document.location.pathname);
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

                            if((index <= (numpaginamax+1)) && (index >= numpaginamin))
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

                const menosuno = numpaginamin - 1;
                const menosunoenmax = numpaginamax - 1;
            if(menosuno > 0){
               setNumPaginaMin(menosuno);
               setNumPaginaMax(menosunoenmax);
               
           }
           console.log('En menos uno', numpaginamax,numpaginamin)

       }}>{'<'}</div>{  
        paginacion?.map((item,index)=>{
            

            if((item <= (numpaginamax+1)) && (item >= numpaginamin)){

                return (<><div
                    onClick={()=>{
                        if(item === numpaginamax){
                            const menosuno = numpaginamax;
                            const menosunoenmax = numpaginamax + 1;
                            if(menosunoenmax < paginacion.length){
                                setNumPaginaMin(menosuno);
                                setNumPaginaMax(menosunoenmax);
                            }
                            
                        }
                        if(item === (numpaginamax+1)){
                            const menosuno = numpaginamax+1;
                            const menosunoenmax = numpaginamax + 2;
                            if(menosunoenmax > 0 && menosunoenmax < paginacion.length){
                                setNumPaginaMin(menosuno);
                                setNumPaginaMax(menosunoenmax);
                            }
                            
                        }
                        
                    }}
                    className="miscajas">{item}</div></>)
            }
        
    
        })
    }<div className="miscajas" onClick={()=>{

        const menosuno = numpaginamin + 1;
        const menosunoenmax = numpaginamax + 1;
        if(menosunoenmax < paginacion.length){
            setNumPaginaMin(menosuno);
            setNumPaginaMax(menosunoenmax);
            
        }
        
    }}>{'>'}</div>
    <h3>Hay {paginacion.length} servicios</h3>
            {id && <InsertComentarios id_ser={id}/> ? <InsertComentarios id_ser={id}/> : ''}
    </>);
}