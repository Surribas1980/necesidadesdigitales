import '../css/Seccion21.css';

function Seccion21() {
let numeros=[];

for(let i; i<4;i++){
    numeros.push(i);
}

    return(<>
    <div className="dentro2">
        <div className="dentro2">
            <h1>Directivos</h1>
            <h4>At variations of passages of Lorem Ipsum available, but the majority have suffered alteration..</h4>
            
            <div className="colorseccion21">
                <div className="dentro21">
                    
                    <img className="imagenseccion21" src={`http://localhost:4000/imagenes/imagenes/photo-1.jpg`} alt="imagen"/>
                    Jon
                </div>
                <div className="dentro21">
                    <img className="imagenseccion21" src={`http://localhost:4000/imagenes/imagenes/photo-2.jpg`} alt="imagen"/>
                    Alex
                </div>
                <div className="dentro21">
                    <img className="imagenseccion21" src={`http://localhost:4000/imagenes/imagenes/photo-3.jpg`} alt="imagen"/>
                    Silvia
                </div>
                <div className="dentro21">            
                    <img className="imagenseccion21" src={`http://localhost:4000/imagenes/imagenes/photo-4.jpg`} alt="imagen"/>
                    María
                </div>
        </div>
            {/*<section className="seccion21">
                    <div className="titulo1"><b><u>Sobre nosotros</u></b></div>
                    Llevamos años trabajando con personas, las cuales están muy contentas con estas plataformas
            </section>
            <section className="seccion21">
                    Con esta plataforma podrás, leer los trabajos que han seleccionado como <i>correctos</i> con lo que podrás aprender más. Al mismo tiempo
                    podrás puntuarlo, viendo como se sitúan en un ranking
                    <div className="icono1"><FontAwesomeIcon icon={faPoll}></FontAwesomeIcon></div>
            </section>*/}
        </div>
    </div>
    </>);


}
export default Seccion21;
