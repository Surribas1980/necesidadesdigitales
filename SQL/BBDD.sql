CREATE DATABASE IF NOT EXISTS serviciosDigitales CHARACTER SET="utf8mb4" COLLATE="utf8mb4_unicode_ci";

USE serviciosDigitales;
/*
OBSERVACIONES

    TABLA USUARIOS

        > Los campos "nomUsuario_usu" y "mail" serán únicos y no nulos. Afectará en su "end-point"
        adaddffgsgs
*/
CREATE TABLE IF NOT EXISTS usuarios (
    id_usu INT AUTO_INCREMENT,
	nomFoto_usu VARCHAR(50) UNIQUE,
	nomUsuario_usu VARCHAR(50) UNIQUE NOT NULL,
    nom_usu VARCHAR(50) NOT NULL,
	ape1_usu VARCHAR(50),
	ape2_usu VARCHAR(50),
	biografia_usu VARCHAR(500),
    mail VARCHAR(50) UNIQUE NOT NULL,
    pwd VARCHAR(512) DEFAULT NULL,
    rol ENUM("admin","normal") DEFAULT "normal" NOT NULL, 
    activado TINYINT DEFAULT NULL,
    borrado TINYINT DEFAULT NULL,
    lastAuthUpdate DATETIME,
    codigoRegistro VARCHAR(100) DEFAULT NULL,
    CONSTRAINT usuarios_pk PRIMARY KEY (id_usu)

)  ENGINE=INNODB;
CREATE TABLE IF NOT EXISTS servicios (
    id_ser INT AUTO_INCREMENT,
    nombre_fich_ser varchar(50) NOT NULL,
    expli_ser VARCHAR(500),
    fecha_ser_ini DATETIME,
    fecha_ser_fin DATETIME,
    titulo_ser VARCHAR(50),
    puntuacion FLOAT,
    
    CONSTRAINT servicios_pk PRIMARY KEY (id_ser)
) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS solucionar ( 
	id_sol INT AUTO_INCREMENT,
    id_usu_sol INT,
    id_ser_sol INT,
    solucionado TINYINT,
    nomFich VARCHAR(50) UNIQUE,
    comentarioSolucion VARCHAR(500),
    fecha_solucion DATETIME,
    CONSTRAINT solucionar1_pk PRIMARY KEY (id_sol),
    CONSTRAINT solucionar1_fk1 
		FOREIGN KEY(id_usu_sol) REFERENCES usuarios(id_usu) ON DELETE CASCADE,
	CONSTRAINT solucionar1_fk2
		FOREIGN KEY(id_ser_sol) REFERENCES servicios(id_ser) ON DELETE CASCADE
)ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS solicitar ( 
	id_soli INT AUTO_INCREMENT,
    id_usu_soli INT NOT NULL,
    id_ser_soli INT UNIQUE NOT NULL,
    CONSTRAINT solicitar_pk PRIMARY KEY (id_soli),
    CONSTRAINT solicitar_fk1 
		FOREIGN KEY(id_usu_soli) REFERENCES usuarios(id_usu) ON DELETE CASCADE,
	CONSTRAINT solicitar_fk2
		FOREIGN KEY(id_ser_soli) REFERENCES servicios(id_ser) ON DELETE CASCADE
)ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS comentar ( 
	id_co INT AUTO_INCREMENT,
    id_usu_co INT NOT NULL,
    id_ser_co INT NOT NULL,
    comentario VARCHAR(200),
    sinver TINYINT DEFAULT 1,
    sinleer TINYINT DEFAULT 1,
    fecha  DATETIME,

    CONSTRAINT comentar_pk PRIMARY KEY (id_co),
    CONSTRAINT comentar_fk1 
		FOREIGN KEY(id_usu_co) REFERENCES usuarios(id_usu) ON DELETE CASCADE,
	CONSTRAINT comentar_fk2
		FOREIGN KEY(id_ser_co) REFERENCES servicios(id_ser) ON DELETE CASCADE
)ENGINE=INNODB;
