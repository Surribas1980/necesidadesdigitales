function VerArchivos(props){
    const arch = props.ficheros['losarchivos'];
    const servicio = props.server;
    const usuario = props.user;
    const solucionador = props.nombre;
    /*for (const valor in arch){
        console.log(`Elementos valor ${valor}=${arch[valor]}`)
    }*/
    console.log('Estoy en ver archivos',arch)

    //<a href={`http://localhost:4000/mirarservicios/servicios/solucionados/ServicioNº127/Usuario_29/DOM.png`} target="_blank" >{arch[0]}</a>
    return (<>
    <h2>Solución realizada por : {solucionador}</h2>
  
        {
            arch?.map((item,index)=>{
                return (<>
                <a href={`http://localhost:4000/mirarservicios/servicios/solucionados/ServicioNº${servicio}/Usuario_${usuario}/${item}`} target="_blank">
                 {item}
                </a><br></br>
                </>)
            })
        }
    
    </>);
}

export default VerArchivos;