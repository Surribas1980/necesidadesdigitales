import { useForm } from 'react-hook-form';




export default function AuthForm(props) {
    const { register, handleSubmit } = useForm();    

    const onSubmit = (data) =>{
      console.log('Submit',data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">Email</label>
          <input id="email" ref={register({ required: true})} name="email" />
          <label htmlFor="pwd">Password</label>
          <input id="pwd" ref={register({ required: true})} name="pwd" type="password"/>
          <label htmlFor="nom_usu">Nombre de usuario</label>
          <input id="nom_usu" ref={register({ required: true})} name="nom_usu"/>
          <label htmlFor="nomUsuario_usu">Nombre</label>
          <input id="nomUsuario_usu" ref={register({ required: true})} name="nomUsuario_usu"/>
          <label htmlFor="ape1_usu">Apellido 1</label>
          <input id="ape1_usu" ref={register({ required: true})} name="ape1_usu"/>
          <label htmlFor="ape2_usu">Apellido 2</label>
          <input id="ape2_usu" ref={register({ required: true})} name="ape2_usu"/>
          
          <button>Enviar</button>
        </form>
      );
    }