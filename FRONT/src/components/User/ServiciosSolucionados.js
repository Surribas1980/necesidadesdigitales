export default function ServiciosUser(props){
    const elemts = props.solucionados;
        const listaServicios = elemts.map((ser)=>{
            return (<p>Solucionador: {ser.Solucionador} <br></br> Solicitante: {ser.nom_usu} <br></br>Titulo: {ser.titulo_ser} <br></br>Puntos usuario: {ser['puntos(id_usu)']} <br></br>Puntos solucionador: {ser['puntos(id_usu_sol)']} <br></br>Puntos del servicio: {ser.puntuacion}<br></br>------------------</p> )
        });
    return (<>
    <h1>Os servizos solucionados</h1>
        {listaServicios}
    </>);
}