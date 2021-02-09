/*
Mostrar: Ranking básico
	|	Usuario que lo soluciona	|	Puntos totales
*/
-- servicios.titulo_ser as 'Titulo', 
select usuarios.nom_usu as 'Usuario que lo soluciona',sum(puntuacion) as 'Puntos totales'
from servicios inner join solucionar
on servicios.id_ser = solucionar.id_ser_sol
join usuarios
on usuarios.id_usu = solucionar.id_usu_sol
where solucionar.solucionado = 1
group by usuarios.id_usu
order by sum(puntuacion) desc