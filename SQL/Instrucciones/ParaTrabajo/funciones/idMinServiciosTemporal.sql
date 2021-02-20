CREATE DEFINER=`root`@`localhost` FUNCTION `idMinServiciosTemporal`() RETURNS int(11)
BEGIN
RETURN (select min(id_ser) from servicioslimitada);
END