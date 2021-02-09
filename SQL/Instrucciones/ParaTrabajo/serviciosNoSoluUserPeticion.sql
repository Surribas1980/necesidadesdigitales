/*
Servicios no solucionados
*/

select nom_usu,solicitar.id_usu_soli,nombre_fich_ser,expli_ser,titulo_ser
from usuarios join solicitar
on usuarios.id_usu = solicitar.id_usu_soli
join servicios on servicios.id_ser = solicitar.id_ser_soli
where puntuacion = 0
group by id_ser