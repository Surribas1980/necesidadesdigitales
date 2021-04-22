import { useForm } from 'react-hook-form';
import '../css/Login.css'
import useAuth from '../shared/hooks/useAuth';
import { useState } from 'react';

export default function Login() {
  const { register, handleSubmit } = useForm();
  const {sigIn} = useAuth();
  const [errorMessage, setErrorMessage] = useState('');
  const [statusMessage, setstatusMessage] = useState('');

  const onSubmit = async  (data) =>{
     /*const dato = sigIn(data.mail,data.pwd);
     console.log('recogido en login: ',dato);*/

     try {
      const serverResponse = await sigIn(data.mail, data.pwd);
      if (errorMessage.length > 0) {
        setErrorMessage('');
      }
      if (serverResponse.message) {
        setstatusMessage(serverResponse.message);
      }
    } catch (error) {
      setErrorMessage(error);
    }
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
      {statusMessage.length > 0 && <p className="status-ok">{statusMessage}</p>}
      {errorMessage.length > 0 && <p className="error">{errorMessage}</p>}
    </form>
    </>
    
  );
}