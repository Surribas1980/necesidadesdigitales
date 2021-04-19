function VerArchivos(props){
    const arch = props.ficheros['losarchivos'];
    const servicio = props.server;
    const usuario = props.user;
    const solucionador = props.nombre;
    const lugar = props.lugar;
    let salida;
    /*for (const valor in arch){
        console.log(`Elementos valor ${valor}=${arch[valor]}`)
    }*/
    console.log('Estoy en ver archivos',arch);
    let solucion = <><h2>Solución realizada por : {solucionador}</h2>
  
    {
        arch?.map((item,index)=>{
            return (<>
            <a href={`http://localhost:4000/mirarservicios/servicios/solucionados/ServicioNº${servicio}/Usuario_${usuario}/${item}`} target="_blank">
             {item}
            </a><br></br>
            
            
            </>)
        })
    }</>;

    let verfich = <><h2>Archivos</h2>
  
    {
        arch?.map((item,index)=>{
            return (<>
            <a href={`http://localhost:4000/mirarservicios/servicios/${servicio}/${item}`} target="_blank">
            {item && item.includes('png') ? <img src={`http://localhost:4000/mirarservicios/servicios/${servicio}/Usuario_${usuario}/${item}`}/> : ''}
            {item && item.includes('pdf') ? <img src={`http://localhost:4000/mirarservicios/imagenes/pdf.svg`}/> : ''}
            {item && item.includes('csv')  ? <img src={`http://localhost:4000/mirarservicios/imagenes/Excel.png`}/> : ''}
            {item && item.includes('docx') ? <img src={`http://localhost:4000/mirarservicios/imagenes/Word.png`}/> : ''}
            <br></br>
            {item}

            </a><br></br>
            </>)
        })
    }</>;

    switch(lugar){
        case 'solucionados': salida = solucion;break;
        case 'verficheros' : salida = verfich;break;
        default: salida = '';
    }

    //<a href={`http://localhost:4000/mirarservicios/servicios/solucionados/ServicioNº127/Usuario_29/DOM.png`} target="_blank" >{arch[0]}</a>
    return (<>
    
            {salida}
    
    </>);
}

export default VerArchivos;