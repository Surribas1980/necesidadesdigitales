export default function MisServiSoliUserAdmin(props){

    const misservicios = props?.misservis;

    return (<>
        <table>
            <tbody>
    
                <tr>
                    <th>Nº de servicio</th>
                    <th>Titulo servicio</th>
                    <th>Explicación del servicio</th>
                    
                </tr>
    
            {
                misservicios?.map((item,index)=>{
                    return(<>
                                <tr>
                                        <td>{item.id_ser}</td>                                       
                                        <td>{item.titulo_ser}</td>
                                        <td>{item.expli_ser}</td>
                                </tr>
    
                    </>);
                })
            }
            </tbody>
    
        </table>
        </>);

}