export default function MostrarServiciosComentarios(props){

    const servicios= props?.servicios;
    const numpaginamax=props?.paginamax;
    const numpaginamin = props?.paginamin;
    console.log('Servicios en Mostrar servicios',servicios,'Nummax:',numpaginamax,'Numin',numpaginamin);
    servicios?.map((item)=>{return console.log('En servicios mostrar valores: ',item)});
    return(<>
    <table>
                <thead>
                    <tr>
                        <th>Id del servicio</th>
                        <th>Título del servicio</th>
                        <th>Explicación del servicio</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        servicios?.map((item,index)=>{

                            if((index <= numpaginamax) && (index >= numpaginamin))
                            {
                                return(<>
                                        <tr>
                                            <td>{item.id_ser}</td>
                                            <td>{item.expli_ser}</td>
                                            <td>{item.titulo_ser}</td>
                                        </tr>
                                     </>)
                            }
                            
                        })
                    }
                </tbody>
            </table>
    </>);
}