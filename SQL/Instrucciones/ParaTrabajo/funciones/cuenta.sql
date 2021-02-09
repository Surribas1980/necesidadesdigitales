CREATE FUNCTION `contar` (campo char(10),id int)
RETURNS INTEGER
BEGIN
RETURN (select count(campo) from comentar join usuarios
on usuarios.id_usu = comentar.id_usu_co
where campo = 1 and id_usu_co = id);
END
