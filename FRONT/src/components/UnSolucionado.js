import { useParams } from "react-router";
import { deleteService } from '../http/api';
import VerArchivos from "./VerArchivos";
import {useState} from 'react';
function UnSolucionado(props){
    const servissolucionados = props.servissolucionados;
    const [archivos,setArchivos] = useState();
    const [usuario, setUsuario] = useState(0);
    const [servicio, setServicio] = useState(0);
    const [nombreSolucionador, setNombreSolucionador] = useState("");
    const {id}= useParams();
    let elsolucionado;
    console.log('en un solucionado',servissolucionados)
    if(servissolucionados !== undefined){
        servissolucionados?.map((item,index)=>{
            if(item.id_ser == id){
                elsolucionado = item;
                console.log('el solucionado', elsolucionado)
            }
        })
    }
    
    const irA = async (Servicio,Solucionador,nombreSolucionador)=>{
        console.log('irA',Servicio,Solucionador);
        const url = `/archivos/solucionados/${Servicio}/${Solucionador}`;
          const data = await deleteService(url,'GET',0,0);
          setArchivos(data);
          setUsuario(Solucionador);
          setServicio(Servicio);
          setNombreSolucionador(nombreSolucionador);
          console.log('Isto é o que recollo', data);
          
    }

    return(<><div>estoy en un solucionado {id}</div>
    {elsolucionado && 
        <div>
            <div>{elsolucionado.Solucionador}</div>
            <div>{elsolucionado.titulo_ser}</div>
            <div>{elsolucionado.expli_ser}</div>
            <div>{elsolucionado['puntos(id_usu_soli)']}</div>
            <button onClick={()=>{irA(elsolucionado.id_ser,elsolucionado.id_usu_sol,elsolucionado.Solucionador)}}>ver</button>
        </div>
        
    }
    {archivos && <VerArchivos lugar={'solucionados'} ficheros={archivos} user={usuario} server={servicio} nombre={nombreSolucionador}></VerArchivos>}
    </>);
}
export default UnSolucionado;