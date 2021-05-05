import {useState,useEffect} from 'react';
import Seccion1 from '../components/Seccion1';
import Seccion11 from '../components/Seccion11';
import Seccion2 from '../components/Seccion2';
import Title from '../components/Title';
import '../css/Home.css';
function Home(){
  let [valor,setValor]= useState(1);
  let [otro,setOtro] = useState(1);
  const [seconds, setSeconds] = useState(0);


useEffect(() => {
  
    
    if(valor < 3){

      setOtro(valor + 1);
      setValor(otro);
    }
    else{
      setOtro(1);
      setValor(1);
    }
  
}, [seconds]);
useEffect(() => {
  const interval = setInterval(() => {
    
    
    setSeconds(seconds => seconds + 1);
  }, 3000);
  return () => clearInterval(interval);
}, []);
 
    return (
      <>
      <body>
        {/*<Title></Title>*/}
        <main>
       
        <div className="imagenesvarias" id="otros">

          <img className="imagen" src={`http://localhost:4000/imagenes/imagenes/${valor}1280.png`} alt="imagen"/>
          {/*<img className="imagen" src={`http://localhost:4000/imagenes/imagenes/${valor}640.png`} alt="imagen"/>*/}
        
        </div>
      
        
        <div className="color1" id="conocenos">
        <div className="let">Conócenos</div>
        <Seccion1></Seccion1>
        <Seccion11></Seccion11>
        </div>
        <div className="color2" id="contacta">

        <Seccion2></Seccion2>
        </div>
        </main>
        <footer><b>Designed by me</b></footer>
      </body>
       
      </>
    );
}

export default Home;