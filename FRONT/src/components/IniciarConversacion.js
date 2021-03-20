import {useEffect,useState} from 'react';
function IniciarConversacion(){
    const [servicios,setServicios] = useState("");
    let [nummaxservicios,setNumMaxServicios] = useState(0);

    useEffect(()=>{
        console.log('numeromax',nummaxservicios)
    },[nummaxservicios]);

   

return (<><h1>{nummaxservicios}</h1>
<button onClick={()=>{
   const valor = nummaxservicios + 1; 
        
setNumMaxServicios(valor);
}}>Actualizar 1</button>
</>)

}

export default IniciarConversacion;