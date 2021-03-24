import {useState,useEffect} from 'react';
import DatosLista from "./DatosLista";
import '../../css/ServiciosSolucionados.css';

export default function ServiciosUser(props){
    
    const elemts = props.solucionados;
    
    let probarConObj = [];
    let probarConObjVal = [];
    

let titulo;
        for(const interno of Object.values((elemts))){
            let i = 1;
            titulo=Object.getOwnPropertyNames(interno).sort();
      

         Object.getOwnPropertyNames(interno).forEach((val) => {
            i++;
         
            let valor = interno[val];
            probarConObj.push(valor);
            if(i>(titulo.length)){
                probarConObjVal.push(probarConObj);
                probarConObj = [];
            }
          });
               
        }
        
 
    probarConObjVal.push(titulo);
    probarConObjVal.reverse();
    


    return (<>
    
       
        {
           

                <table >
                    
                    <thead>
                    </thead>
                    <tbody>
                        {
                        probarConObjVal.map((item,index)=>{
                            
                            return (<tr key={index}> {item?.map((valor,index)=>{
                                return <td> {valor}</td>
                            })}</tr>)

                        })
                        }

                    </tbody>
                </table>
         
           // totalcontenido.map((elemento,index)=>{return <p>--------- {probar[1][index]}  ----   </p>})
           
        }   
      
        
        
    
    </>);
}