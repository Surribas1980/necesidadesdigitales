import {useState,useEffect} from 'react';
import DatosLista from "./DatosLista";

export default function ServiciosUser(props){
    let [elementoVector,setElementoVector] = useState('');
    const elemts = props.solucionados;
    console.log()
    let texto = [];
    let contenido = [];
    let totaltext = [];
    let totalcontenido= [];
    let probar = [];
    
    console.log('Esto es probar: ',probar) 
       /*if(elemts[0]['puntos(id_usu)']){
            console.log('Es solucionados');
        }*/
       
        for(const interno of Object.values((elemts))){
            let i = 1;
            let j = 1;
         //console.log(interno)
                for(const elemntstexto of Object.keys(interno)){
                   
                    console.log('i es :',i)
                    //console.log(elemntstexto);
                    
                    i++;
                    texto.push(elemntstexto);
                   // console.log('Entra en Objetct elemento texto y muestra. Y el tamaño es: ',texto, (elemts.length-1))
                    if(i>=(elemts.length-1)){
                       // console.log('entra en length texto es',texto)
                        totaltext.push(texto);
                        texto = [];
                       
                        //console.log('entra en length y texto y totaltext',texto, totaltext)
                    }
                }
                for(const dentro of Object.values(interno)){
                
                    
                    j++;
                    console.log('Esto es dentro',dentro)
                    contenido.push(dentro)
                    console.log('esto es el contenido guardado: ', contenido)
                    if(j>=(elemts.length-1)){                        
                        totalcontenido.push(contenido);
                       
                        contenido = [];
                    }
                }
        }
        probar.push(totaltext);
        probar.push(totalcontenido);
    console.log('proba: ',probar); 
    console.log('elemento proba',probar[0][0],probar[1][0],probar[1][1])   
    console.log('totaltext',totaltext);
    console.log('contenido',totalcontenido); 
    
    
    console.log('Ahora Estoy en Servicios Solucionados. Esto es elemts, tamaño:  y una puntuacion: ',elemts, elemts.length,elemts[0]);
        const listaServicios = elemts.map((ser)=>{
            return (<p>Solucionador: {ser.Solucionador} <br></br> Solicitante: {ser.nom_usu} <br></br>Titulo: {ser.titulo_ser} <br></br>Puntos usuario: {ser['puntos(id_usu)']} <br></br>Puntos solucionador: {ser['puntos(id_usu_sol)']} <br></br>Puntos del servicio: {ser.puntuacion}<br></br>------------------</p> )
        });

        const salida = totaltext.map((value,index)=>{
            return [value,totalcontenido[index]];
        });
        /*for(let i=0; i<totalcontenido.length-1;i++){
            console.log('Vector total contenido: ',totalcontenido[i]);
            for(let j=0; j<totalcontenido.length-1;j++){
                console.log('Elemento interno: ', totalcontenido[i][j]);
            }
        }*/
       
        const noentiendonada  = totalcontenido.map((vector)=>{
            const valor = vector.map((elemento)=>{
                //setElementoVector(elemento);
                console.log('Entoces estás aquí: ', elemento);
                return elemento;
            })
            console.log('interior de los maps===>>>> ',valor);
            return valor;
        });
        console.log('No entiendo nada: ',noentiendonada);


    return (<>
    <h1>Os servizos solucionados</h1>
        {listaServicios}
        <p>Outro</p>
        {probar[0][0]}
        <p>seguintes</p>
        {
           
           // totalcontenido.map((elemento,index)=>{return <p>--------- {probar[1][index]}  ----   </p>})
            <ul>
                {totalcontenido.map((item,index)=>{
                    return <DatosLista key={index} dato={item} />;

                })}
            </ul>
           
        }   
        <p>A ver que sae</p>
        
        
    
    </>);
}