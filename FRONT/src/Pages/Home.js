import {useState,useEffect} from 'react';
import Seccion1 from '../components/Seccion1';
import Seccion11 from '../components/Seccion11';
import Seccion2 from '../components/Seccion2';
import Title from '../components/Title';
import '../css/Home.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowCircleUp} from '@fortawesome/free-solid-svg-icons';
import uno from '../shared/img/1.jpg';
import dos from '../shared/img/2.jpg';
import tres from '../shared/img/3.jpg';
import cuatro from '../shared/img/4.jpg';
import {animateScroll as scroll, Element} from 'react-scroll';
import Seccion21 from '../components/Seccion21';
import ElFooter from '../components/ElFooter';
import Graficas from '../Pages/Graficas';
function Home(){
  let [valor,setValor]= useState(1);
  let [otro,setOtro] = useState(1);
  const [seconds, setSeconds] = useState(0);

let scroll_pos;
useEffect(()=>{
  var last_known_scroll_position = 0;
var ticking = false;


function doSomething(scroll_pos) {
  console.log('scroll_pos',scroll_pos);
  
}

window.addEventListener('scroll', function(e) {
  
  /*document.querySelector(".color1").style.backgroundColor = "red";*/
  /*const evn = e.target;
  
  console.log('evn:',evn)*/
  const valor = document.getElementById('contacta');
  const otr2 = document.getElementById('op');
  const tot = document.getElementsByTagName('body');
  let objetocontacta = valor.getBoundingClientRect();
  console.log('objetocontacta',objetocontacta)
  console.log('objetocontacta top',objetocontacta.top,'el bottom:',objetocontacta.bottom)
  last_known_scroll_position = window.scrollY;
  console.log('availHeight:',window.screen.availHeight,'height:',window.screen.height,'windowinnerhei',window.innerHeight,'body',document.body.scrollHeight,'docu',document.documentElement.scrollTop);
  
  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });
  }
  ticking = true;

  if(( objetocontacta.top > 49) && (objetocontacta.bottom < 783)){
    otr2.style.opacity = 1;
  }else{
    otr2.style.opacity = 0;
  }

});

},[]);
  
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

            <img className="imagen0" src={`http://localhost:4000/imagenes/imagenes/banner-bg${valor}.jpg`} alt="imagen"/>
            {/*<img className="imagen" src={`http://localhost:4000/imagenes/imagenes/${valor}640.png`} alt="imagen"/>*/}
          
          </div>
        
          
          <div className="color1" id="conocenos">
            <div className="let">Conócenos</div>
            {/*<Seccion1></Seccion1>*/}
            <Seccion11></Seccion11>
          </div>
          <div className="color2" id="contacta">
            <div id="op">

            <Seccion2></Seccion2>
            </div>
            <Seccion21></Seccion21>
          </div>
          {/*<div className="graficas">
            <div className="dentrograficas">
              <Graficas></Graficas>
            </div>
          </div>*/}
            <div className="arriba">
              <FontAwesomeIcon onClick={()=>scroll.scrollToTop()} icon={faArrowCircleUp}></FontAwesomeIcon>
            </div>
            <ElFooter></ElFooter>
        
          
        </main>
        <footer><b>Designed by me</b></footer>
        
      </body>
       
      </>
    );
}

export default Home;