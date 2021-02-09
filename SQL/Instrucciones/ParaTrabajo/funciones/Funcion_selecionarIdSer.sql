CREATE FUNCTION `idServicio` (explicacion varchar(150))
RETURNS INTEGER
BEGIN

RETURN (SELECT id_ser FROM servicios WHERE expli_ser = explicacion);
END
