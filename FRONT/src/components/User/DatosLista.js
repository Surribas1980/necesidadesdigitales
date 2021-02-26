import ElementoLista from "./ElementoLista";

function DatosLista(props){

    return <li>Lista {props.dato.map((item,index)=>{
        return <ElementoLista key={index} elementos={item} />
    })}</li>

}

export default DatosLista;