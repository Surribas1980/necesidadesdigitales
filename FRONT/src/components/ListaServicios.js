export default function ListaServicios(props){

    console.log(props.valores);
    //<>{props.servicios.map((servicio)=>{return <p>servicio.titulo_ser</p>})}</>
    return (<><h1>Lista de servicios</h1> 
    {props.valores.map((servicio)=>{return <p>{servicio.titulo_ser}</p>})}</>
       
        );
}