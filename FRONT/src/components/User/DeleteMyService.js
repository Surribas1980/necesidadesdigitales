import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import ListaServicios from '../ListaServicios';
import { enviarDatos } from '../../http/api';
import '../../css/DeleteMyService.css'

function DeleteMyService() {
    const initialState = { titulo: '', explicacion: '' };
    const [buscarForm, setbuscarForm] = useState(initialState);
    const { register, handleSubmit } = useForm();
    const [search1, setSearch1] = useState('');
    const [search2, setSearch2] = useState('');
    const [servicios, setServices] = useState([]);
    const [limite, setLimite] = useState(3);
    const [inicioLista, setInicioLista] = useState(0);
    const [alante, setAlante] = useState(1);
    const [valoresform, setValoresForm] = useState();
    const [idMaximoServicio, setidMaximoServicio] = useState(0)
    const [idMinimoServicio, setidMinimoServicio] = useState(0)
    const text1 = 'idMinServiciosTemporal()';
    const text2 = 'idMaxServiciosTemporal()';
    const [idMin, setIdMin] = useState(0);
    const [idMax, setIdMax] = useState(limite);
    const [actualiza,setActualiza] = useState(false);

    
    //const { register, handleSubmit } = useForm();


    useEffect(() => {
        const listarServicios = async () => {
            //const numServicios = await deleteService('/servicios','GET',0,null); 
            const numServicios = await enviarDatos(limite, inicioLista, alante, search1, search2, 1);
            setidMaximoServicio(numServicios['idMax'][0]['max(id_ser)'])
            setidMinimoServicio(numServicios['idMin'][0]['min(id_ser)'])
           
            setServices(numServicios['resultbbdd'][0]);

            console.log('Isto é o que entra en deletemyservices', numServicios);
            console.log('lo que paso a servicios:', numServicios['resultbbdd'])

            //console.log('La tabla: ',numServicios['resultbbdd']);
            for (const i1 in numServicios) {
                // console.log(`Estoy en el primer nivel ${i1} = ${numServicios[i1]}`);
                for (const i2 in numServicios[i1]) {
                    // console.log(`Estoy en el segundo nivel ${i2} = ${numServicios[i1][i2]}`);
                    for (const i3 in numServicios[i1][i2]) {
                        //console.log(`Estoy en el tercer nivel ${i3}=${numServicios[i1][i2][i3]}`);
                        if (i3 === text1) {
                            // console.log('lo detectó')
                            setIdMin(numServicios[i1][i2][i3]);
                            console.log('IdMin: ', idMin);
                        }
                        if (i3 === text2) {
                            setIdMax(numServicios[i1][i2][i3]);
                            console.log('IdMax: ', idMax)
                        }

                    }
                }
            }
            //setServices(numServicios.data);

        }
        listarServicios();
    }, [limite, inicioLista, alante, search1, search2,actualiza]);

    const submitForm = async (data) => {

        //console.log('Enviamos',data.titulo,data.explicacion);


        console.log('Valor que envío: ', data.titulo, data.explicacion);
        //setSearch(initialSearch);

        const numServicios = await enviarDatos(limite, inicioLista, alante, data.titulo, data.explicacion, 0);
        //setSearch(initialSearch);
        console.log('con datos buscados:', numServicios);
        console.log('lo que quiero:', numServicios.resultbbdd[0][0]);
        console.log('Tamaño:', numServicios.resultbbdd[0].length);
        
        console.log('array?',Object.values(numServicios.resultbbdd[0]));
        const recibidos = Object.values(numServicios.resultbbdd[0]);
        setServices(recibidos);


        /*if(search2 || search1){
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
          */
    }
console.log('inicio lista',inicioLista);
//console.log('lo que quiero:', numServicios.resultbbdd[0][0]);
    return (<>

        <h1>Lista de servicios</h1>

        <div className="listaservicios">
        
        <div className="fuerafromdelete">
            <form onSubmit={handleSubmit(submitForm)}>
                <div className="formulario">
                    <div className="dentrofromdelete">
                        <label htmlFor='titulo'>Titulo</label>
                        <input id="titulo" ref={register({ required: false, minLenght: 2 })} name="titulo" ></input>
                    </div>
                </div>
                <div className="explicacion">
                    <div className="dentrofromdelete">
                        <label htmlFor='explicacion'>Explicacion</label>
                        <input id="explicacion" ref={register({ required: false, minLenght: 2 })} name="explicacion"></input>
                    </div>
                </div>
                <button>Buscar</button>
            </form>
        </div>
        
            <ListaServicios valores={servicios}></ListaServicios>
            <div className="adianteatras">
                <button onClick={() => {
                    if (idMax < idMaximoServicio) {
                        setInicioLista(idMax);
                        setAlante(1)
                    }
                }}>Adelante</button>
                <button onClick={
                () => {
                    if (idMin > idMinimoServicio) {
                        setInicioLista(idMin);
                        setAlante(0);
                    }


                }}>Atrás</button>
                <button onClick={()=>{setActualiza(!actualiza)}}>Actualiza</button>
            </div>
        </div>
    </>);
}

export default DeleteMyService;