import { useForm } from 'react-hook-form';
import { userLogin } from '../http/api';
import '../css/Login.css';
import {useState} from 'react';
function Register(){
    const { register, handleSubmit } = useForm();
    const [res,setRes] = useState({});


    const  onSubmit = async (data) => {

      const respuesta =  await userLogin(data.mail,data.pwd, data.nomUsuario_usu, data.nom_usu, data.ape1_usu, data.ape2_usu, data.biografia_usu);
      console.log(respuesta);
      setRes(respuesta);
    };

    return (<>
        <form onSubmit = {handleSubmit(onSubmit)}>
            <div className="labelinput">

                <label htmlFor="mail">Email</label>
                <input id="mail" ref={register({ required: true })} name="mail"  />
            </div>
            <div className="labelinput">

                <label htmlFor="pwd">Password</label>
            <input id="pwd" ref={register({ required: true })} name="pwd"  />
            </div>
            <div className="labelinput">

                <label htmlFor="nomUsuario_usu">Alias</label>
                <input id="nomUsuario_usu" ref={register({ required: true })} name="nomUsuario_usu"  />
            </div>
            <div className="labelinput">

                <label htmlFor="nom_usu">Nombre de usuario</label>
                <input id="nom_usu" ref={register({ required: true })} name="nom_usu"  />
            </div>
            <div className="labelinput">

                <label htmlFor="ape1_usu">Apellido 1</label>
                <input id="ape1_usu" ref={register({ required: true })} name="ape1_usu"  />
            </div>
            <div className="labelinput">

                <label htmlFor="ape2_usu">Apellido 2</label>
                <input id="ape2_usu" ref={register({ required: true })} name="ape2_usu"  />
            </div>
            <div className="labelinput">

                <label htmlFor="biografia_usu">Biografía</label>
                <textarea id="biografia_usu" ref={register({ required: true })} name="biografia_usu"  />
            </div>
            <button>Enviar</button>
        </form>
        {res && res.message ? <p>{res.message}</p>:''}
    </>);
}

export default Register;