CREATE DEFINER=`root`@`localhost` PROCEDURE `responderComentarios`(id_co int,id_com int,id_ser_coment int,comentario varchar(500))
BEGIN
insert into comentar (id_usu_co,id_ser_co,comentario,fecha,id_ser_num) values (id_com,id_ser_coment,comentario,now(),id_co);
END