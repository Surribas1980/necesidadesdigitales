import {useForm} from 'react-hook-form';
import useAuth from '../shared/hooks/useAuth';
import { newEntry } from '../http/api';

export default function InsertComentarios (props){
    const {register, handleSubmit} = useForm();
    

    const onSubmit = (data)=>{
        const valordevuelt = newEntry(data,0);
        console.log(valordevuelt);
    }


    return(<>
    <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="id_ser">Id Servicio con el que se inicia la conversación {props?.id_ser}</label>
        <input id="id_ser" type="hidden" ref={register({required: true})} name="id_ser" value={props?.id_ser}/>
        <label htmlFor="comentario">Comentario</label>
        <textarea id="comentario" ref={register({required: true})} name="comentario"/>
        <button>Enviar comentario</button>
        
    </form>
    </>);
}