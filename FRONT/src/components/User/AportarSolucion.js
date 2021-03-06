import { useForm } from 'react-hook-form';
import { insertarSolucion } from '../../http/api';
import {useState} from 'react';

export default function AportarSolucion(props){
    const {register, handleSubmit} = useForm();
    const {id,setId}=useState(0);
    //setId(props.id);

    const onSubmit = (data)=>{
        //insertarSolucion('POST','/user/solution/',data,id);
    }

    return (<>
    <form onSubmit={onSubmit(handleSubmit)}>
        <label htmlFor="ficheros">Inserte los ficheros</label>
        <input id="ficheros" ref={register({required: true})} name="ficheros" multiple type="file"></input>
    </form>
    </>);
}