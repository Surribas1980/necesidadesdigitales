export default function DarPuntuacion(){ 
    let ventana;
    let abrirVentana = (idServicio)=>{
        let configuracion_ventana = "height=300,width=300,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
        const dir = "C:\\Users\\Israel\\Documents\\HACKBOSS\\Trabajo\\Necesidades_digitales\\ProyectoNecesidadesDigitales\\BACK\\docs\\servicios\\solucionados\\";
        window.open(dir,"myWindow",
        configuracion_ventana);
    }

    return(<><h1>Estoy en dar puntuación</h1>
    <button >Ver solución</button>
    </>);
}