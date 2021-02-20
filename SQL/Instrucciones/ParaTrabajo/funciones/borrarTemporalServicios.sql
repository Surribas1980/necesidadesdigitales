CREATE DEFINER=`root`@`localhost` PROCEDURE `borrarTemporalServicios`()
BEGIN
drop table servicioslimitada;
END