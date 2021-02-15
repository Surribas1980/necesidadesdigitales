import { useForm } from 'react-hook-form';
import { login } from '../http/api';
import useAuth from '../shared/hooks/useAuth';


export default function Login() {
  const { register, handleSubmit } = useForm();
  const authContext = useAuth();

  console.log(`Esto es el autocontexto: ${authContext}`);
  console.log(authContext);

  
  const onSubmit =async (data) =>{
   
    const loginData =await login(data.mail,data.pwd);
    console.log(`Estoy en Login.js ${loginData}`);
    console.log(`Esto es el autocontexto dentro del evento: ${authContext}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="mail">Email</label>
      <input id="mail" ref={register({ required: true})} name="mail" />
 
      <label htmlFor="pwd">Password</label>
      <input id="pwd" ref={register({ required: true})} name="pwd" type="password"/>
      
      <button>Enviar</button>
    </form>
  );
}