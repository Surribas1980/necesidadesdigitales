import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default function AuthForm(props) {
  const { register, handleSubmit, errors } = useForm();
  const [errorMessage, setErrorMessage] = useState('');
  const [statusMessage, setstatusMessage] = useState('');

  const onSubmit = async (data) => {
    try {
      const serverResponse = await props.onSubmit(data.email, data.password);
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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email</label>
      <input id="email" name="email" ref={register({ required: true })} />
      <label htmlFor="password">Password</label>
      <input id="password" type="password" name="password" ref={register({ required: true, minLength: 1 })} />
      <input type="submit" />
      {statusMessage.length > 0 && <p className="status-ok">{statusMessage}</p>}
      {errorMessage.length > 0 && <p className="error">{errorMessage}</p>}
    </form>
  );
}