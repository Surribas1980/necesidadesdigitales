export default function ServiciosUser(props){
    const elemts = props.servicios;
        const listaServicios = elemts.map((ser)=>{
            return (<p key={ser.id_ser}>{ser.id_ser} {ser.titulo_ser} {ser.expli_ser}</p> )
        });
    return (<>
    <h1>Os meus servizos</h1>
        {listaServicios}
    </>);
}