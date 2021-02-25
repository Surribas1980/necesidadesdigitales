export default function AuthOut(props){
    const elemts = props.variables;
    const objeto = {};
        if(elemts ==  objeto['solucionados'] ){

        }
        const lista = elemts.map((ser)=>{
            return (<p>Solucionador: {ser.Solucionador} <br></br> Solicitante: {ser.nom_usu} <br></br>Titulo: {ser.titulo_ser} <br></br>Puntos usuario: {ser['puntos(id_usu)']} <br></br>Puntos solucionador: {ser['puntos(id_usu_sol)']} <br></br>Puntos del servicio: {ser.puntuacion}<br></br>------------------</p> )
        });
    return (<>
    <h1>Salida</h1>
        {lista}
    </>);
}