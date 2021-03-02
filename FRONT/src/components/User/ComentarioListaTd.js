import {useState} from 'react';
import InsertComentarios from '../../Pages/InsertComentarios';
function ComentarioListaTd(props){
    const [formulario,setFormulario] = useState(false);
    return (<>
        <td>{props.elementos}</td>
       
    </>);
}

export default ComentarioListaTd;