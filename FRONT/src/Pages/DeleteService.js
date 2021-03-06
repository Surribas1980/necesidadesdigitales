import {useState, useEffect} from 'react';
import BuscarServicio from '../components/BuscarServicio';
import {useForm} from 'react-hook-form';
import ListaServicios from '../components/ListaServicios';
import {enviarDatos} from '../http/api';
import useAuth from '../shared/hooks/useAuth';

function DeleteService(){
    const { register, handleSubmit } = useForm();
    const [search1, setSearch1] = useState('');
    const [search2, setSearch2] = useState('');
    const [servicios, setServices] = useState([]);
    const [limite, setLimite] = useState(5);
    const [inicioLista, setInicioLista] = useState(0);
    const [alante, setAlante] = useState(1);
    const [valoresform, setValoresForm] = useState();
    
    const {userData} = useAuth();
    const text1 = 'idMinServiciosTemporal()';
    const text2 = 'idMaxServiciosTemporal()';
    const [idMin,setIdMin]=useState(0);
    const [idMax,setIdMax]=useState(limite);
    
    //const { register, handleSubmit } = useForm();


    useEffect(() => {
        const listarServicios = async () => {
            //const numServicios = await deleteService('/servicios','GET',0,null); 
            const numServicios = await enviarDatos(limite,inicioLista,alante,search1,search2,0);
            if(search2 || search1){
              setServices(numServicios['resultbbdd'][0]);
              console.log('Trae datos: ',numServicios['resultbbdd'][0])  
            }else{
              setServices(numServicios['resultbbdd']);  
            }
            
            console.log(numServicios);
            //console.log('La tabla: ',numServicios['resultbbdd']);
            for(const i1 in numServicios){
               // console.log(`Estoy en el primer nivel ${i1} = ${numServicios[i1]}`);
                for(const i2 in numServicios[i1]){
                   // console.log(`Estoy en el segundo nivel ${i2} = ${numServicios[i1][i2]}`);
                    for(const i3 in numServicios[i1][i2]){
                        //console.log(`Estoy en el tercer nivel ${i3}=${numServicios[i1][i2][i3]}`);
                        if(i3 === text1){
                           // console.log('lo detectó')
                            setIdMin(numServicios[i1][i2][i3]);
                            console.log('IdMin: ',idMin);
                        }
                        if(i3 === text2){
                            setIdMax(numServicios[i1][i2][i3]);
                            console.log('IdMax: ',idMax)
                        }

                    }
                }
            }
            //setServices(numServicios.data);
           
        }
        listarServicios();
    },[limite,inicioLista,alante,search1,search2]);

    const submitForm = async (data) => {
        
        //console.log('Enviamos',data.titulo,data.explicacion);
        let valor = data.titulo + data.explicacion;
        setSearch1(data.titulo);
        setSearch2(data.explicacion);
        console.log('Valor que envío: ',valor);
        const numServicios = await enviarDatos(limite,inicioLista,alante,search1,search2,0);
        //setSearch(initialSearch);
        console.log('con datos buscados:', numServicios);
        if(search2 || search1){
            setServices(numServicios['resultbbdd'][0]);
            console.log('Trae datos: ',numServicios['resultbbdd'][0])  
          }else{
            setServices(numServicios['resultbbdd']);  
          }
          
          console.log(numServicios);
          //console.log('La tabla: ',numServicios['resultbbdd']);
          for(const i1 in numServicios){
             // console.log(`Estoy en el primer nivel ${i1} = ${numServicios[i1]}`);
              for(const i2 in numServicios[i1]){
                 // console.log(`Estoy en el segundo nivel ${i2} = ${numServicios[i1][i2]}`);
                  for(const i3 in numServicios[i1][i2]){
                      //console.log(`Estoy en el tercer nivel ${i3}=${numServicios[i1][i2][i3]}`);
                      if(i3 === text1){
                         // console.log('lo detectó')
                          setIdMin(numServicios[i1][i2][i3]);
                          console.log('IdMin: ',idMin);
                      }
                      if(i3 === text2){
                          setIdMax(numServicios[i1][i2][i3]);
                          console.log('IdMax: ',idMax)
                      }

                  }
              }
          }
    }
    
    return (<>
             <h1>Borrar Servicio</h1>
          <p>ID: {userData && userData.id}</p>
        <p>EXP: {userData && userData.exp}</p>  
        <button onClick={()=>{setInicioLista(idMax);
            console.log('El idMax que entra en setInicioLista: ',idMax)
            setAlante(1)}}>Adelante</button>
        <button onClick={
            ()=>{setInicioLista(idMin);
        console.log('El idMin que entra en setInicioLista: ',idMin)
             setAlante(0)}}>Atrás</button>   

        <form onSubmit={handleSubmit(submitForm)}>
            <label htmlFor='titulo'>Titulo</label>
            <input id="titulo" ref={register({ required: false})} name="titulo" ></input>
            <label htmlFor='explicacion'>Explicacion</label>
            <input id="explicacion" ref={register({ required: false})} name="explicacion"></input>
            <button>Buscar</button>
        </form>    	
        
        <ListaServicios valores={servicios}></ListaServicios>
        </>);
}

export default DeleteService;