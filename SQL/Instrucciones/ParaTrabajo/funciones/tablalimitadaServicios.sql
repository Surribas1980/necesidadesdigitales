CREATE DEFINER=`root`@`localhost` PROCEDURE `tablaLimitadaServicios`(limite int,valorId int,alante int)
BEGIN
declare limiteIdMax int;
declare limiteIdMin int;
if(alante) then
	create temporary table if not exists servicioslimitada SELECT * FROM servicios WHERE id_ser > valorId ORDER BY id_ser LIMIT limite;
else
	create temporary table if not exists servicioslimitada SELECT * FROM servicios WHERE  id_ser < valorId ORDER BY id_ser LIMIT limite;
end if;
END