function ElementoLista(props){
    console.log('Estoy en elemento lista: ',props.elementos)
    return (
    <>
        <td> {props.elementos}</td>
    </>)

}

export default ElementoLista;