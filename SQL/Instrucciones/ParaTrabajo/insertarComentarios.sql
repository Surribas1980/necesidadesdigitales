CREATE DEFINER=`root`@`localhost` PROCEDURE `insertarComentarios`(idSerBuscado int,idConversacion int,idUser int,comentario varchar(500))
BEGIN
declare servicioConComentario int;
set servicioConComentario = (select idSerBuscado in (SELECT id_ser_co FROM comentar));
if(servicioConComentario) then
	insert into comentar (id_usu_co,id_ser_co,comentario,fecha,id_co_num) values (idUser,idSerBuscado,comentario,now(),idConversacion);
else
	insert into comentar (id_usu_co,id_ser_co,comentario,fecha) values (idUser,idSerBuscado,comentario,now());
end if;
END