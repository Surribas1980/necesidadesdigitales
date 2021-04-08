import { useForm } from 'react-hook-form';
import '../css/Login.css'
import useAuth from '../shared/hooks/useAuth';


export default function Login() {
  const { register, handleSubmit } = useForm();
  const {sigIn} = useAuth();

  const onSubmit =  (data) =>{
     const dato = sigIn(data.mail,data.pwd);
     console.log('recogido en login: ',dato);
  };
//un comentario
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="labelinput">

      <label htmlFor="mail">Email</label>
      <input id="mail" ref={register({ required: true})} name="mail" />
 
      </div>
      <div className="labelinput">

        <label htmlFor="pwd">Password</label>
        <input id="pwd" ref={register({ required: true})} name="pwd" type="password"/>
      </div>
      
      <button>Enviar</button>
    </form>
    
    </>
    
  );
}