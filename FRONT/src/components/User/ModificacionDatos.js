import ModificacionDatosForm from './ModificacionDatosForm';
export default function ModificacionDatos(){
    const campos = ['nomUsuario_usu', 'nom_usu', 'ape1_usu', 'ape2_usu','biografia_usu', 'mail','pwd','nomFoto_usu'];

   

    return (
    <>
        <h1>Estoy en modificacion de datos</h1>
        <ModificacionDatosForm fields = {campos} />
    </>);
}