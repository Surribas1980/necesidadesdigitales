import ElementoLista from "./ElementoLista";

function DatosLista(props){

    return (<tr> {props.dato?.map((item,index)=>{
        return <ElementoLista key={index} elementos={item} />
    })}</tr>)

}

export default DatosLista;