CREATE DEFINER=`root`@`localhost` FUNCTION `idMaxServiciosTemporal`() RETURNS int(11)
BEGIN

RETURN (select max(id_ser) from servicioslimitada);
END