import ComentarioListaTd from "./ComentarioListaTd";
import {useState} from 'react';
function ComentarioListaTr(props){
    const [mostrar, setMostrar] = useState(false);
    const [name, setName] = useState("");
    const [name1, setName1] = useState("");
    const lista = props.dato;
    function handleChange(e) {
        if(e.target.name == "text1"){
           setName(e.target.value); 
           console.log('Estoy en comentarios lista tr, es name:',name);
        }
        if(e.target.name == "text2"){
            setName1(e.target.value);
            console.log('Estoy en comentarios lista tr es name',name1);
        }
        
      }
      console.log('Tr--Esto es name 1:...',name1,'Esto es name: ',name)
    return (<><p onClick={()=>{setMostrar(!mostrar)}}>Mostrar en comentarios lista Tr</p>
   
    
    {mostrar && lista.map((item)=>{
        return (<>
                    <tr>
                        <td>{item.id_ser}</td>
                        <td>Hola
                            <div>
                                {<input type="text" name="text1" autoComplete="off" value={name} onChange={handleChange} />}
                            </div>
                            {item.nomUsuario}
                        </td>
                        <td>
                            <div>
                                <input type="text" name="text2" autoComplete="off" value={name1} onChange={handleChange} />
                            </div>
                        {item['buscarUsu(id_usu_co)']}</td>
                    </tr>
        </>)
    })}


    {mostrar && <> <input type="text" name="text1" autoComplete="off" value={name} onChange={handleChange} /> 
    <input type="text" name="text2" autoComplete="off" value={name1} onChange={handleChange} /></>}

    </>)

};

export default ComentarioListaTr;