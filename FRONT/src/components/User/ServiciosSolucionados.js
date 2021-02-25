export default function ServiciosUser(props){
    const elemts = props.solucionados;
    let texto = [];
    let contenido = [];
    let totaltext = [];
    let totalcontenido= [];
    const probar = [[],[]];
       /*if(elemts[0]['puntos(id_usu)']){
            console.log('Es solucionados');
        }*/
        console.log('hola')
        for(const interno of Object.values((elemts))){
            let i = 1;
            let j = 1;
         console.log(interno)
                for(const elemntstexto of Object.keys(interno)){
                    i++;
                    console.log('i es :',i)
                    console.log(elemntstexto);
                    texto.push(elemntstexto);
                    console.log('Entra en Objetct elemento texto y muestra. Y el tamaño es: ',texto, (elemts.length-1))
                    if(i>=(elemts.length-1)){
                        console.log('entra en length texto es',texto)
                        totaltext.push(texto);
                        texto = [];
                        console.log('entra en length y texto y totaltext',texto, totaltext)
                    }
                }
                for(const dentro of Object.values(interno)){
                    j++;
                    console.log(dentro)
                    contenido.push(dentro)
                    if(j>=(elemts.length-1)){
                        totalcontenido.push(dentro);
                        contenido = [];
                    }
                }
        }
        
    console.log('totaltext',totaltext)    
    console.log('Ahora Estoy en Servicios Solucionados. Esto es elemts, tamaño:  y una puntuacion: ',elemts, elemts.length,elemts[0]);
        const listaServicios = elemts.map((ser)=>{
            return (<p>Solucionador: {ser.Solucionador} <br></br> Solicitante: {ser.nom_usu} <br></br>Titulo: {ser.titulo_ser} <br></br>Puntos usuario: {ser['puntos(id_usu)']} <br></br>Puntos solucionador: {ser['puntos(id_usu_sol)']} <br></br>Puntos del servicio: {ser.puntuacion}<br></br>------------------</p> )
        });
    return (<>
    <h1>Os servizos solucionados</h1>
        {listaServicios}
    </>);
}