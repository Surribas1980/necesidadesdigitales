function ElementoLista(props){
    console.log('Estoy en elemento lista: ',props.elementos)
    return <li> {props.elementos}</li>

}

export default ElementoLista;