/*
Mostrar: Lista de servicios no solucionados 
	|	Usuario que lo soluciona	|	Título	|	Puntos

*/
select usuarios.nom_usu as 'Usuario que lo soluciona',servicios.titulo_ser as 'Titulo',puntuacion
from servicios join solucionar
on servicios.id_ser = solucionar.id_ser_sol
join usuarios
on usuarios.id_usu = solucionar.id_usu_sol
where (puntuacion > 0)
group by servicios.id_ser;