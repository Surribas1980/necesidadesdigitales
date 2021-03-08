import { useForm } from 'react-hook-form';
import {insertarSolucion} from '../../http/api';

export default function AportarSolucion(props){
    const {register, handleSubmit} = useForm();
    let id= props.id;
 

    const onSubmit = (data) => {
        console.log('estoy en onSubmit',data);
        insertarSolucion('POST','/user/solution/',data);    
        
    };

    return (<><h2>Inserte la solución al servicio {id}</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
        
        <label htmlFor="ficheros">Inserte los ficheros</label>
        <input id="ficheros" ref={register({required: true})} name="ficheros" multiple type="file"></input>
        <input id="id_ser" ref={register({required: false})} name="id_ser" type="hidden" value={id}></input>
        <button>Enviar</button>
    </form>
    </>);
}