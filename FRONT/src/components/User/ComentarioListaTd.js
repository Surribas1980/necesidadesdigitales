import {useState} from 'react';
import InsertComentarios from '../../Pages/InsertComentarios';
function ComentarioListaTd(props){
    const [formulario,setFormulario] = useState(false);
    console.log('Estoy comentarioslistaTd: ', props.elementos)
    return (<>
        <h1>Estoy en comentario lista</h1>
       
    </>);
}

export default ComentarioListaTd;