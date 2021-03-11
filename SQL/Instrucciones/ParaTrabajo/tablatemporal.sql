CREATE DEFINER=`root`@`localhost` PROCEDURE `tablatemporal`(valor int)
BEGIN
if(valor) then
create temporary table if not exists temporal select * from servicios join solicitar on
id_ser = id_ser_soli
left join usuarios on id_usu = id_soli where puntuacion > 2.5;
else
create temporary table if not exists temporal select * from servicios join solicitar on
id_ser = id_ser_soli
left join usuarios on id_usu = id_soli where puntuacion < 2.5;
end if;
END