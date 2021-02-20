CREATE DEFINER=`root`@`localhost` PROCEDURE `tablaLimitadaServicios`(limite int,valor int,alante int)
BEGIN
if(alante) then
create temporary table if not exists servicioslimitada SELECT * FROM servicios WHERE id_ser >= valor ORDER BY id_ser LIMIT limite;
else
create temporary table if not exists servicioslimitada SELECT * FROM servicios WHERE  id_ser < valor ORDER BY id_ser LIMIT limite , valor;
end if;
END