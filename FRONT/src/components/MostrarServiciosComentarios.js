import InsertComentarios from "../Pages/InsertComentarios";
import { useState} from 'react';
export default function MostrarServiciosComentarios(props){

    const servicios= props?.servicios;
    const numpaginamax=props?.paginamax;
    const numpaginamin = props?.paginamin;
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
            {id && <InsertComentarios id_ser={id}/>}
    </>);
}