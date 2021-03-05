import { useState } from 'react';
import {modificacionDatos} from '../../http/api';
import useAuth from '../../shared/hooks/useAuth';

export default function ModificacionDatosForm(props){
  const { userData } = useAuth();
  const datos = props.fields;
  const initialState = datos.reduce((accumulator, field) => {
    accumulator[field] = '';
    return accumulator;
  }, {});

  const [campos, setCampos] = useState(initialState);

  const updateCampos = (event, field) => {
    setCampos({ ...campos, [field]: event.target.value });
    console.log('Estoy en el formulario',campos);
  };
   const onSubmitDatos = (event) => {
        event.preventDefault();
        console.log('Enviamos Datos a modificar: ',campos);
        const respuesta = modificacionDatos('PUT','/users/edit/',campos,userData.id);
        console.log('respuesta',respuesta);
         console.log('Foto: ',campos.nomFoto_usu)
    };

  

  return (
    <><div>
    {

    }
    </div>

      <h1>Dynamic</h1>
      <form onSubmit={onSubmitDatos} encType="multipart/form-data" >
        {datos.map((field) => {
          return (
            <><div key={field}>
              <label htmlFor={field}>{field}</label>
               
              <input
                onChange={(event) => {
                  updateCampos(event, field);
                }}
                id={field}
                name={field}
              />
             <div>{
                 (field === 'nomFoto_usu') ? <input id="nomFoto_usu" name="nomFoto_usu" onChange={(event) => {
                  updateCampos(event, field);
                }} multiple type="file" />: console.log('hola')
             }</div>
            </div></>
          );
        })}
        Foto: {<input id="nomFoto_usu" name="nomFoto_usu" multiple type="file" />}<br></br>
        <button type="submit">Enviar</button>
      </form>
    </>
  );


}