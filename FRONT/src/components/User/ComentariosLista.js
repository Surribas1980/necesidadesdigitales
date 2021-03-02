/**
 * Esta función debe sacar para poder realizar la tabla final, el 'length' de los títulos
 * debido en esta ocasión cómo los estoy sacando desde la bbdd, no me viene con el tamaño
 * ya que, los estoy sacando con el alias, y parece que no puedo obtenerlo de manera directa.
 * Después de estar probando, la única opción que parece que tiene que ser tratando de obtener
 * por separado los objetos, para así obtener dicho tamaño.
 * 
 * De ahí en esta ocasión, que se realize de esta manera.
 */
export default function ComentariosLista(props){

    const listaComentarios = props.valores;
    let titulo;
    let valores = [];
    let valoresTotal =[];
    console.log('Lista de comentarios ',listaComentarios)
    let vectorDatos = Object.values(listaComentarios);
    console.log('vector de datos: ',vectorDatos)

    for(const interno of Object.values(listaComentarios)){
        console.log('esto es interno',interno)
        for(const titulos of Object.values(interno)){
            console.log('esto es titulos ',titulos)
            titulo=Object.getOwnPropertyNames(titulos).sort();
        }
        for(const titulos of Object.values(interno)){
            let i = 1;
            
            Object.getOwnPropertyNames(titulos).forEach((val)=>{
                i++;
                console.log(val+'->'+titulos[val])
                console.log('Estoy dentro: ',titulo,titulo.length);
                let elemento = titulos[val];
                valores.push(elemento);
                console.log('valores dentro',valores)
                if(i>titulo.length){
                    console.log('el valor i',i)
                    valoresTotal.push(valores);
                    valores = [];
                    console.log('Valores total', valoresTotal)
                    console.log('Valores dentro del if',valores)
                
                }
            })
        }
    }
    valoresTotal.push(titulo);
    valoresTotal.reverse();
    console.log('Valores Total',valoresTotal);
    
    return (<><h1>Estoy en lista de comentarios</h1></>);
}