export default function ServisSolucionados(props){
    const lista = props?.servissolucionados;
    lista?.map((item)=>{return console.log('valores: ',item)})
    return (<><h2>Estoy en servicios solucionados</h2>
    {
        <table>
            <thead>
                <tr>
                    <th>Lo solicita</th>
                    <th>Lo soluciona</th>
                    <th>Avatar quien lo solicita</th>
                    <th>Avatar quien lo soluciona</th>
                    <th>Titulo del servicio</th>
                    <th>Puntución dada</th>
                </tr>
            </thead>
            <tbody>
                {
                    lista?.map((item)=>{
                        return (<>
                        <tr>
                            <td>
                                {item.Solicitador}
                            </td>
                            <td>
                                {item.Solucionador}
                            </td>
                            <td>
                            <img src={`http://localhost:4000/imagenes/fotousuario${item.id_usu_soli}/${item['buscarFoto(id_usu_soli)']}`} />
                            </td>
                            <td>
                            <img src={`http://localhost:4000/imagenes/fotousuario${item.id_usu_sol}/${item['buscarFoto(id_usu_sol)']}`} />
                              
                            </td>
                            <td>
                                {item.titulo_ser}
                            </td>
                            <td>
                                {item.puntuacion}
                            </td>
                        </tr>
                        </>)
                    })
                }
            </tbody>
        </table>
    }
    </>);
}