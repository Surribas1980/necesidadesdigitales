/*
	El id del usuario se pone en el campo solicitar.id_usu_soli = ${id}
    La salida es el servicio del usuario no solucionado
*/
select titulo_ser,nombre_fich_ser,puntuacion 
from servicios join solicitar
on servicios.id_ser = solicitar.id_ser_soli
where solicitar.id_usu_soli = 3 and puntuacion = 0;