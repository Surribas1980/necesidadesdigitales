/**
 * Sacado de la documentación de react-hook-form, adaptando el siguiente ejemplo
 * https://codesandbox.io/s/6j1760jkjk?file=/src/index.js
 */
import {useForm} from 'react-hook-form';
import { deleteService } from '../http/api';



export default function ListaServicios(props){
    const { register, handleSubmit } = useForm();
    const numIdSer = [];
    let numIdser = {};
    let numIdSerBis;
    
    let creado = {"numero":456,"segundo":"789"};
    console.log(`Estoy en lista de servicios`)
    console.log(props);

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
    {props.valores.map((item) => {
        const fieldName = `servicio[${item}]`;
        return (
            <fieldset name={fieldName} key={item.id_ser}>
                <label>
                <div className="fuerafrom">

                Titulo:<input value={item.titulo_ser} readOnly />
                </div>
                <div className="fuerafrom">
                    Explicación<textarea value={item.expli_ser} readOnly />
                </div>
                    
                    <input type="checkbox" value={item.id_ser} name={`${fieldName}.expli_ser`} ref={register} />
                </label>
            </fieldset>
        );
    })

    }
    <button>Borrar</button>
</form>
      
        </>
    
    
       
        );
}