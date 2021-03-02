import {useForm} from 'react-hook-form';
import useAuth from '../shared/hooks/useAuth';
import { newEntry } from '../http/api';

export default function InsertComentarios (){
    const {register, handleSubmit} = useForm();
    

    const onSubmit = (data)=>{
        const valordevuelt = newEntry(data,0);
        console.log(valordevuelt);
    }


    return(<><h2>Hacer un comentario en cualquier conversación</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="id_ser">Id Servicio</label>
        <input id="id_ser" ref={register({required: true})} name="id_ser"/>
        <label htmlFor="idConversacion">Id Conversacion</label>
        <input id="idConversacion" ref={register({required: true})} name="idConversacion" />
        <label htmlFor="comentario">Comentario</label>
        <textarea id="comentario" ref={register({required: true})} name="comentario"/>
        <button>Enviar comentario</button>
        
    </form>
    </>);
}