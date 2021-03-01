CREATE DEFINER=`root`@`localhost` PROCEDURE `ordenar_comentarios`(valorIdco int,valorIdser int)
BEGIN
select * from comentar where (id_co_num = valorIdco OR id_co_num=0) and id_ser_co=valorIdser order by fecha;
END