import { useForm } from 'react-hook-form';
import {modificacionDatos} from '../../http/api';
import useAuth from '../../shared/hooks/useAuth';

export default function ModificacionDatosForm(){
  const { userData } = useAuth();
  const { register, handleSubmit } = useForm();
 
  const campos = ['nomUsuario_usu', 'nom_usu', 'ape1_usu', 'ape2_usu','biografia_usu', 'mail','pwd','nomFoto_usu'];

   const onSubmit = (datos) => {
        
        console.log('Enviamos Datos a modificar: ',datos);
        const respuesta = modificacionDatos('PUT','/users/edit/',datos,userData.id);
        console.log('respuesta',respuesta);
         console.log('Foto: ',datos.nomFoto_usu)
    };

  

  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="nomUsuario_usu" >Nombre de usuario</label>
            <input id="nomUsuario_usu" ref={register({ required: false})} name="nomUsuario_usu"/>
            <label htmlFor="nom_usu" >Alias</label>
            <input id="nom_usu" ref={register({ required: false})} name="nom_usu"></input>
            <label htmlFor="ape1_usu" >Apellido 1</label>
            <input id="ape1_usu" ref={register({ required: false})} name="ape1_usu"></input>
            <label htmlFor="ape2_usu" >Apellido 2</label>
            <input id="ape2_usu" ref={register({ required: false})} name="ape2_usu"></input>
            <label htmlFor="biografia_usu" >Biografia</label>
            <input id="biografia_usu" ref={register({ required: false})} name="biografia_usu"></input>
            <label htmlFor="mail">Mail</label>
            <input id="mail" ref={register({ required: false})} name="mail"></input>
            <label htmlFor="pwd" >Password</label>
            <input id="pwd" ref={register({ required: false})} name="pwd"></input>
            <label htmlFor="nomFoto_usu" >Imagen</label>
            <input id="nomFoto_usu" ref={register({ required: false})} name="nomFoto_usu" multiple type="file"></input>
            <button>Enviar Datos</button>
        </form>
    </>
  );


}