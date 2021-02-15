import { useForm } from 'react-hook-form';
import { userLogin } from '../http/api';


function Register(){
    const { register, handleSubmit } = useForm();


    const  onSubmit = async (data) => {

      const respuesta =  await userLogin(data.mail,data.pwd, data.nomUsuario_usu, data.nom_usu, data.ape1_usu, data.ape2_usu, data.biografia_usu);
      console.log(respuesta);
    };

    return (
        <form onSubmit = {handleSubmit(onSubmit)}>
            <label htmlFor="mail">Email</label>
            <input id="mail" ref={register({ required: true })} name="mail"  />
            <label htmlFor="pwd">Password</label>
            <input id="pwd" ref={register({ required: true })} name="pwd"  />
            <label htmlFor="nomUsuario_usu">Alias</label>
            <input id="nomUsuario_usu" ref={register({ required: true })} name="nomUsuario_usu"  />
            <label htmlFor="nom_usu">Nombre de usuario</label>
            <input id="nom_usu" ref={register({ required: true })} name="nom_usu"  />
            <label htmlFor="ape1_usu">Apellido 1</label>
            <input id="ape1_usu" ref={register({ required: true })} name="ape1_usu"  />
            <label htmlFor="ape2_usu">Apellido 2</label>
            <input id="ape2_usu" ref={register({ required: true })} name="ape2_usu"  />
            <label htmlFor="biografia_usu">Biografía</label>
            <input id="biografia_usu" ref={register({ required: true })} name="biografia_usu"  />
            <button>Enviar</button>
        </form>

    );
}

export default Register;