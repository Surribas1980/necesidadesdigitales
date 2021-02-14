import { useForm } from 'react-hook-form';
import { login } from '../http/api';

export default function Login() {
  const { register, handleSubmit } = useForm();

  
  const onSubmit =async (data) =>{
   
    const loginData =await login(data.mail,data.pwd);
    console.log(loginData);
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