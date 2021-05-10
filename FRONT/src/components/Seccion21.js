import '../css/Seccion21.css';

function Seccion21() {
let numeros=[];

for(let i; i<4;i++){
    numeros.push(i);
}

    return(<>
    <div className="dentro2">
        
        <div className="dentro2">
             
            <div className="colorseccion21">

            <div className="bordeado21">
                    <div className="algun21">
                        Un titulo
                    </div>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate
            </div>
                <div className="dentro21">
                    
                    <img className="imagenseccion21" src={`http://localhost:4000/imagenes/imagenes/photo-1.jpg`} alt="imagen"/>
                    
                    <div className="dentro210">
                        Jon
                        
                    </div>
                </div>
                <div className="dentro21">
                    <img className="imagenseccion21" src={`http://localhost:4000/imagenes/imagenes/photo-2.jpg`} alt="imagen"/>
                    <div className="dentro210">
                    Alex
                    </div>
                </div>
                <div className="dentro21">
                    <img className="imagenseccion21" src={`http://localhost:4000/imagenes/imagenes/photo-3.jpg`} alt="imagen"/>
                    <div className="dentro210">
                    Silvia
                    </div>
                </div>
                <div className="dentro21">            
                    <img className="imagenseccion21" src={`http://localhost:4000/imagenes/imagenes/photo-4.jpg`} alt="imagen"/>
                    <div className="dentro210">
                    María
                    </div>
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
