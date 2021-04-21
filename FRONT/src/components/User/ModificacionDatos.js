import { useForm } from 'react-hook-form';
import {modificacionDatos} from '../../http/api';
import useAuth from '../../shared/hooks/useAuth';
import '../../css/ModificacionDatos.css';
import { useState } from 'react';
export default function ModificacionDatosForm(props){
  const { userData } = useAuth();
  const { register, handleSubmit } = useForm();
  const camposUsuario = props?.datos;
  //https://dev.to/yosraskhiri/make-an-image-preview-in-react-js-301f
  /**el enlace anterior me ayudó al tema de visualizar la imagen previamente */
  const [{alt, src}, setImg] = useState({
    src: '',
    alt: 'Upload an Image'
});

const handleImg = (e) => {
    if(e.target.files[0]) {
        setImg({
            src: URL.createObjectURL(e.target.files[0]),
            alt: e.target.files[0].name
        });    
    }   
}
  console.log('campo id_usu : ',props?.datos['id_usu']);

   const onSubmit = (datos) => {
        
        console.log('Enviamos Datos a modificar: ',datos);
        const respuesta = modificacionDatos('PUT','/users/edit/',datos,userData.id);
        console.log('respuesta',respuesta);
         console.log('Foto: ',datos.nomFoto_usu)
    };

  /*let salidaSinCargaFoto = <>{camposUsuario?.map((item,index)=>{
    return(<> 
    

      <img key={index} src={`http://localhost:4000/imagenes/fotousuario${item.id_usu}/${item.nomFoto_usu}`} alt="imagen"></img>
    
          
    </>);
  })}</>;*/

  return (
    <>
    <div className="modificaciondatos">
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="fuera">
            <div className="dentroform">
                <div className="labelinput">
                  <label htmlFor="nomUsuario_usu" >Nombre</label>
                  <input id="nomUsuario_usu" ref={register({ required: false})} name="nomUsuario_usu"/>
                </div>
                <div className="labelinput">
                  <label htmlFor="nom_usu" >Alias</label>
                  <input id="nom_usu" ref={register({ required: false})} name="nom_usu"></input>
                </div>
                <div className="labelinput">

                  <label htmlFor="ape1_usu" >Apellido 1</label>
                  <input id="ape1_usu" ref={register({ required: false})} name="ape1_usu"></input>
                </div>
                <div className="labelinput">
                  <label htmlFor="ape2_usu" >Apellido 2</label>
                  <input id="ape2_usu" ref={register({ required: false})} name="ape2_usu"></input>
                </div>
                <div className="labelinput">
                  <label htmlFor="biografia_usu" >Biografia</label>
                  <input id="biografia_usu" ref={register({ required: false})} name="biografia_usu"></input>
                </div>
                <div className="labelinput">
                  <label htmlFor="mail">Mail</label>
                  <input id="mail" ref={register({ required: false})} name="mail"></input>
                </div>
                <div className="labelinput">
                  <label htmlFor="pwd" >Password</label>
                  <input id="pwd" ref={register({ required: false})} name="pwd"></input>
                </div>

                      <button>Enviar Datos</button>
            </div>
            
                <div className="paraimagen">
                    {/*
                     salidaSinCargaFoto 
                    */}
                     
                      
                    <label className="botonimagen" htmlFor="nomFoto_usu" >Sube la imagen</label>
                <div>
                      
                      <input onChange={handleImg} id="nomFoto_usu" ref={register({ required: false})} name="nomFoto_usu" type="file"></input>
                    </div>
                    <img src={src} alt={alt} height="500" ></img>
                </div>
            

          </div>
        </form>
    </div>
    </>
  );


}