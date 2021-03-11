CREATE DEFINER=`root`@`localhost` PROCEDURE `deTemporal`()
BEGIN
select id_ser,puntos(id_usu_soli),buscarUsu(id_usu_soli) as 'Solucionador',nom_usu,titulo_ser,puntuacion from temporal ;
drop table temporal;
END