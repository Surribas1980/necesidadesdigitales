import { useForm } from 'react-hook-form';
import { newEntry } from '../http/api';
import useAuth from '../shared/hooks/useAuth';



export default function InsertServices() {
  const { register, handleSubmit } = useForm();
  const {userData} = useAuth();
  console.log(`Este es el usuario que está ahora ${userData.id}`);
  const onSubmit = (data) =>{
/*
    const prop = 0;
    console.log(data.titulo);
    console.log(data.explicacion);
    console.log(data.ficheros.files.length);// me da error
    console.log(data.ficheros);
    console.log(data.ficheros[0]);
    console.log(data.ficheros[0].name);//ESTO OK!!!
    console.log(data.ficheros[prop].name);

    for(const valor of Object.values(data.ficheros)){
      console.log(`Estoy en Object ${valor}`);
      console.log(valor)
      console.log(valor.name);
      
    }

    for(const prop in data.ficheros){
      console.log(`Prop : ${prop}=${data.ficheros[prop].name}`);
      for(const nombre in data.ficheros[prop]){
        console.log(`Dentro de ${data.ficheros[prop][nombre]}`)
        for(const valor in data.ficheros[prop][nombre]){
          console.log(`Dentro de ${data.ficheros[prop][nombre]}: el valor es ${valor}`)
        }
      }

    }
    */
    newEntry(data);
    //console.log(data.ficheros.file);
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