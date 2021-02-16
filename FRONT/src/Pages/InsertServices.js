import { useForm } from 'react-hook-form';
import { newEntry } from '../http/api';
import useAuth from '../shared/hooks/useAuth';



export default function InsertServices() {
  const { register, handleSubmit } = useForm();
  const {userData} = useAuth();
  console.log(`Este es el usuario que está ahora ${userData.id}`);
  const onSubmit = (data) =>{
    console.log(data.titulo);
    console.log(data.explicacion);
   // console.log(data.ficheros.files.length);
    console.log(data.ficheros);
    console.log(data.ficheros[0]);
    console.log(data.ficheros[1].name);

    newEntry(data,userData.id);
   // console.log(data.ficheros.files[0]);
  };
//un comentario
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="titulo">Titulo</label>
      <input id="titulo" ref={register({ required: true})} name="titulo" />
 
      <label htmlFor="explicacion">Explicación</label>
      <input id="explicacion" ref={register({ required: true})} name="explicacion"/>
      <label htmlFor="ficheros">Ficheros</label>
      <input id="ficheros" ref={register({ required: true})} name="ficheros" multiple type="file"/>
      
      <button>Enviar</button>
      <p>ID: {userData && userData.id}</p>
    <p>EXP: {userData && userData.exp}</p>
    </form>
    
    </>
    
  );
}