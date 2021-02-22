import {useState} from 'react';
import { useForm } from 'react-hook-form';

function Formulario(props){
    const { register, handleSubmit } = useForm();
    //const initialSearch = {titulo:'',explicacion:''};
    const [search, setSearch] = useState();

   /* const onsearchChange = (event, field)=>{
        setSearch({...search,[field]:event.target.value});
        console.log(search);
    }*/

    const submitForm = (data) => {
        
        console.log('Enviamos',data.titulo,data.explicacion);
        setSearch(data);
        console.log(search);
        //setSearch(initialSearch);
    }
    return (<><h1>Buscar Servicio</h1>
        <form onSubmit={handleSubmit(submitForm)}>
            <label htmlFor='titulo'>Titulo</label>
            <input id="titulo" ref={register({ required: true})} name="titulo" ></input>
            <label htmlFor='explicacion'>Explicacion</label>
            <input id="explicacion" ref={register({ required: true})} name="explicacion"></input>
            <button>Buscar</button>
        </form> 
    </>);
}

export default Formulario;