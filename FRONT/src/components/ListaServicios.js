export default function ListaServicios(props){

    console.log(props);
    //<>{props.servicios.map((servicio)=>{return <p>servicio.titulo_ser</p>})}</>
    return (props.servicios.map((servicio)=>{return <p>servicio.titulo_ser</p>}));
}