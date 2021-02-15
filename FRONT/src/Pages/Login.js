import { useForm } from 'react-hook-form';
import { login } from '../http/api';
import useAuth from '../shared/hooks/useAuth';


export default function Login() {
  const { register, handleSubmit } = useForm();
  const {userData, logIn} = useAuth();
console.log(userData);
  const onSubmit = async (data) =>{
     login(data.mail,data.pwd);
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