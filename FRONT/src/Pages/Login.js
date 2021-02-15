import { useForm } from 'react-hook-form';
import useAuth from '../shared/hooks/useAuth';


export default function Login() {
  const { register, handleSubmit } = useForm();
  const {userData, sigIn} = useAuth();
console.log(userData);
  const onSubmit = (data) =>{
     sigIn(data.mail,data.pwd);
  };
//un comentario
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="mail">Email</label>
      <input id="mail" ref={register({ required: true})} name="mail" />
 
      <label htmlFor="pwd">Password</label>
      <input id="pwd" ref={register({ required: true})} name="pwd" type="password"/>
      
      <button>Enviar</button>
    </form>
    <p>ID: {userData && userData.id}</p>
    <p>EXP: {userData && userData.exp}</p>
    </>
    
  );
}