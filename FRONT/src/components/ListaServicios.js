import {useForm} from 'react-hook-form';
export default function ListaServicios(props){
    const { register, handleSubmit } = useForm();

    console.log(`Estoy en lista de servicios`)
    console.log(props);

    const onSubmit = async (data)=>{

    }


    //<>{props.servicios.map((servicio)=>{return <p>servicio.titulo_ser</p>})}</>
    return (<><h1>Lista de servicios</h1> 
    
    <ul>

        {props.valores.map((servicio)=>{return <li key={servicio.id_ser}>{servicio.titulo_ser}</li>})}
        </ul>
<form onSubmit={handleSubmit(onSubmit)}>
    {props.valores.map((item) => {
        const fieldName = `servicio[${item}]`;
        return (
            <fieldset name={fieldName} key={fieldName}>
                <label>
                    Valor 1:
                    <input type="checkbox" name={`${fieldName}.expli_ser`} ref={register} />{fieldName.expli_ser}
                </label>
            </fieldset>
        );
    })

    }
    <button>Enviar</button>
</form>
      
        </>
    
    
       
        );
}