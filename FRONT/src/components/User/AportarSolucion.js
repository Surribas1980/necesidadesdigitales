import { useForm } from 'react-hook-form';
import { insertarSolucion } from '../../http/api';
import {useState} from 'react';

export default function AportarSolucion(props){
    const {register, handleSubmit} = useForm();
    //const {id,setId}=useState(0);
    let id= props.id;
    //setId(props.id);

    const onSubmit = (data)=>{
        //insertarSolucion('POST','/user/solution/',data,id);
    }

    return (<>
    <form onSubmit={onSubmit(handleSubmit)}>
        <br></br>Id:{id}<br></br>
        <label htmlFor="ficheros">Inserte los ficheros</label>
        <input id="ficheros" ref={register({required: true})} name="ficheros" multiple type="file"></input><br></br>
        Entrada: <input id="id_ser" ref={register({required: false})} name="id_ser" type="hidden" value={id}></input>
    </form>
    </>);
}