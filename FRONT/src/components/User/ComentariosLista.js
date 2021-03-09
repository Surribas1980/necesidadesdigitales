import ComentarioListaTr from "./ComentariosListaTr";

/**
 * Esta función debe sacar para poder realizar la tabla final, el 'length' de los títulos
 * debido en esta ocasión cómo los estoy sacando desde la bbdd, no me viene con el tamaño
 * ya que, los estoy sacando con el alias, y parece que no puedo obtenerlo de manera directa.
 * Después de estar probando, la única opción que parece que tiene que ser tratando de obtener
 * por separado los objetos, para así obtener dicho tamaño.
 * 
 * De ahí en esta ocasión, que se realize de esta manera.
 */
import {useState} from 'react';
export default function ComentariosLista(props){
    const [mostrar, setMostrar] = useState(false);
    const [name, setName] = useState("");
    const [name1, setName1] = useState("");
    const listaConversaciones = props?.valores;
    let titulo;
    let valores = [];
    let valoresTotal =[];
    console.log('Lista de conversaciones ',listaConversaciones)
    for (const interno of Object.values(listaConversaciones)){
        console.log('Esto es interno: ', interno)
        titulo=Object.getOwnPropertyNames(interno).sort();
        for(const valores of Object.values(interno)){
            console.log('Esto son los valores: ', valores);
        }
    }
    console.log('Esto es titulo: ', titulo)
    /*let vectorDatos = Object.values(listaComentarios);
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
    console.log('Valores Total',valoresTotal);*/
    
function handleChange(e) {
    if(e.target.name == "text1"){
       setName(e.target.value); 
       console.log(name);
    }
    if(e.target.name == "text2"){
        setName1(e.target.value);
        console.log(name1);
    }
    
  }
console.log('Esto es name 1:...',name1,'Esto es name: ',name)
    return (<>
    <h2>Lista de mis conversaciones</h2>
    <button onClick={()=>{setMostrar(!mostrar)}}>Mostrar conversaciones</button>
    {mostrar && <ComentarioListaTr dato={listaConversaciones} ></ComentarioListaTr>}
   
    </>);
}