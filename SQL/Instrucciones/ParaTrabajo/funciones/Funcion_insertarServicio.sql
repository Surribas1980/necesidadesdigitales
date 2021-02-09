CREATE PROCEDURE `insertarServicio` (idUsuario int, fecha datetime,titulo varchar(50))
BEGIN
INSERT INTO servicios(expli_ser,fecha_ser_ini,titulo_ser) VALUES (idUsuario,fecha,titulo);
END
