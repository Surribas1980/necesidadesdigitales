select  count(id_ser) 
from servicios join solicitar
  on servicios.id_ser = solicitar.id_ser_soli
  where solicitar.id_usu_soli = 2;