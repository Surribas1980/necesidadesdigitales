import { useForm } from 'react-hook-form';
import { login } from '../http/api';
import decodeTokenData from '../shared/utils/decodeTokenData';



export default function Login() {
  const { register, handleSubmit } = useForm();
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIsInJvbCI6ImFkbWluIiwiaWF0IjoxNjEzMzI3MDg0LCJleHAiOjE2MTM0MTM0ODR9.nQSISekoD4Gohbl1wn_TACE2SctWSsOsDk3auLJaLYQ';
  decodeTokenData(token);

  
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