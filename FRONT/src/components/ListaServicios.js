/**
 * Sacado de la documentación de react-hook-form, adaptando el siguiente ejemplo
 * https://codesandbox.io/s/6j1760jkjk?file=/src/index.js
 */
import {useForm} from 'react-hook-form';
import { deleteService } from '../http/api';
import '../css/ListaServicios.css';


export default function ListaServicios(props){
    const { register, handleSubmit } = useForm();
    const numIdSer = [];
    let numIdser = {};
    const datos = props.valores[0];
    let numIdSerBis;
    
    let creado = {"numero":456,"segundo":"789"};
    console.log(`Estoy en lista de servicios`)
    console.log('Datos en Lista servicios',props);
    console.log('valores:',datos);
    if (typeof datos === typeof {}){
        const convertir = Object.values(datos);
        console.log('Convirtiendo',convertir);
    }

    props.valores?.map((item) => {

        console.log('el valor pasado:', item);

    })
    const onSubmit = (data)=>{
       
        console.log('Esto es data',data);
        console.log('Esto es data.servicio: ',data.servicio);
        for(const valor in data.servicio){
            console.log(`${valor} = ${data.servicio[valor]}`)
            
            for(const dentro in data.servicio[valor]){
                console.log(`${dentro} = ${data.servicio[valor][dentro]}`)
                numIdSer.push(data.servicio[valor]);
                numIdSerBis = data.servicio[valor][dentro];
                 
            }
        }
        console.log(`Esto es el vector: ${numIdSer}`)
        console.log(numIdSer);
        console.log(numIdSer[0]);
        console.log('O que quero mandar?',numIdSerBis);
        console.log(numIdser);
       
        console.log(creado.numero)
        console.log(JSON.stringify(creado.numero))
        let respuesta = deleteService('/servicios/borrar','DELETE',1,numIdSerBis);
        console.log('Esto lo que me viene del servidor: ',respuesta);
    }


    //<>{props.servicios.map((servicio)=>{return <p>servicio.titulo_ser</p>})}</>
    return (<><h1>Lista de servicios</h1> 
    

                    <form onSubmit={handleSubmit(onSubmit)}>
                {props.valores?.map((item) => {
                    const fieldName = `servicio[${item}]`;
                    return (
                        <fieldset name={fieldName} key={item.id_ser}>
                                <div className="fora">

                                    <div className="dentro">
                                        <div className="paratitulo">

                                            <label className="titulo" >Titulo</label>
                                            
                                            <input value={item.titulo_ser} readOnly />                        
                                        </div>
                                        <hr></hr>
                                        <div className="paratitulo">

                                            <label className="titulo">Explicación</label> 
                                            
                                            <textarea value={item.expli_ser} readOnly />                                                 
                                        </div>
                                    <hr></hr>
                                        <div className="paratitulo">
                                            <label className="titulo">Borrar</label> 
                                            
                                            <input type="checkbox" value={item.id_ser} name={`${fieldName}.expli_ser`} ref={register} />
                                        </div>
                                    </div>
                                </div>
                                
                            
                        
                        </fieldset>
                    );
                })

                }
                <button>Borrar</button>
            </form>
    
        </>
    
    
       
        );
}