CREATE DEFINER=`root`@`localhost` PROCEDURE `miBucle`(limite int, id int)
BEGIN
declare valor int;
declare cantidad int;
set valor = limite;
set cantidad = 0;
create temporary table if not exists servicioslimitada SELECT * FROM servicios WHERE id_ser < id ORDER BY id_ser LIMIT valor, id;
set cantidad = (select count(*) from servicioslimitada);

if(cantidad > limite) then 
	while cantidad > limite do 
		create temporary table if not exists servicioslimitada SELECT * FROM servicios WHERE id_ser < id ORDER BY id_ser LIMIT valor, id;
		set cantidad = (select count(*) from servicioslimitada);
		set valor = valor + 1;
			if(cantidad > limite) then 
				drop table servicioslimitada;
			end if;
	
    end while;
else
	while cantidad < limite do
		create temporary table if not exists servicioslimitada SELECT * FROM servicios WHERE id_ser < id ORDER BY id_ser LIMIT valor, id;
		set cantidad = (select count(*) from servicioslimitada);
		set valor = valor - 1;
			if(cantidad < limite) then 
				drop table servicioslimitada;
			end if;
	end while;
end if;

END