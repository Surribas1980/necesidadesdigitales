CREATE DEFINER=`root`@`localhost` PROCEDURE `buscarValor`(valor1 varchar(20),valor2 varchar(20))
BEGIN
select * from servicioslimitada where titulo_ser like concat('%',valor1,'%') or expli_ser like concat('%',valor2,'%');
END