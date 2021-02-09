/*
El id_usu_soli sería el nº del usuario, ${id}
*/

select titulo_ser,nombre_fich_ser,puntuacion from servicios join solicitar
on servicios.id_ser = solicitar.id_ser_soli
join solucionar on solucionar.id_ser_sol = solicitar.id_ser_soli
where solicitar.id_usu_soli = 1 and solucionar.solucionado = 1;