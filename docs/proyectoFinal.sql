-- MariaDB dump 10.19  Distrib 10.4.18-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: proyectofinal
-- ------------------------------------------------------
-- Server version	10.4.18-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `asesoria`
--

DROP TABLE IF EXISTS `asesoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `asesoria` (
  `id_asesoria` smallint(6) NOT NULL AUTO_INCREMENT,
  `id_materia` tinyint(4) DEFAULT NULL,
  `id_horario` tinyint(4) DEFAULT NULL,
  `modalidad` varchar(15) DEFAULT NULL,
  `ubicacion` varchar(40) DEFAULT NULL,
  `calificacion` tinyint(4) DEFAULT NULL,
  `dia` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id_asesoria`),
  KEY `id_materia` (`id_materia`),
  KEY `id_horario` (`id_horario`),
  CONSTRAINT `asesoria_ibfk_1` FOREIGN KEY (`id_materia`) REFERENCES `materia` (`id_materia`),
  CONSTRAINT `asesoria_ibfk_2` FOREIGN KEY (`id_horario`) REFERENCES `horario` (`id_horario`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asesoria`
--

LOCK TABLES `asesoria` WRITE;
/*!40000 ALTER TABLE `asesoria` DISABLE KEYS */;
INSERT INTO `asesoria` VALUES (1,1,5,'2','pendiente',0,27),(2,1,5,'1','pendiente',0,22);
/*!40000 ALTER TABLE `asesoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `asesoriahasusuario`
--

DROP TABLE IF EXISTS `asesoriahasusuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `asesoriahasusuario` (
  `id_AhU` smallint(6) NOT NULL AUTO_INCREMENT,
  `NumCuenta` varchar(9) DEFAULT NULL,
  `id_asesoria` smallint(6) DEFAULT NULL,
  `id_tipoAsistente` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id_AhU`),
  KEY `NumCuenta` (`NumCuenta`),
  KEY `id_asesoria` (`id_asesoria`),
  KEY `id_tipoAsistente` (`id_tipoAsistente`),
  CONSTRAINT `asesoriahasusuario_ibfk_1` FOREIGN KEY (`NumCuenta`) REFERENCES `usuario` (`numCuenta`),
  CONSTRAINT `asesoriahasusuario_ibfk_2` FOREIGN KEY (`id_asesoria`) REFERENCES `asesoria` (`id_asesoria`),
  CONSTRAINT `asesoriahasusuario_ibfk_3` FOREIGN KEY (`id_tipoAsistente`) REFERENCES `tipoasistente` (`id_tipoAsistente`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asesoriahasusuario`
--

LOCK TABLES `asesoriahasusuario` WRITE;
/*!40000 ALTER TABLE `asesoriahasusuario` DISABLE KEYS */;
INSERT INTO `asesoriahasusuario` VALUES (7,'320266241',2,1);
/*!40000 ALTER TABLE `asesoriahasusuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colegio`
--

DROP TABLE IF EXISTS `colegio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `colegio` (
  `id_Colegio` tinyint(4) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_Colegio`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colegio`
--

LOCK TABLES `colegio` WRITE;
/*!40000 ALTER TABLE `colegio` DISABLE KEYS */;
INSERT INTO `colegio` VALUES (1,'\"EDUCACIÓN FÍSICA\"'),(2,'\"EDUCACIÓN ESTÉTICA Y ARTÍSTICA\"'),(3,'\"MORFOFISIOLOGÍA\"'),(4,'\"BIOLOGÍA\"'),(5,'\"CIENCIAS SOCIALES\"'),(6,'\"DIBUJO\"'),(7,'\"FILOSOFÍA\"'),(8,'\"FÍSICA\"'),(9,'\"GEOGRAFÍA\"'),(10,'\"HISTORIA\"'),(11,'\"LENGUAS VIVAS\"'),(12,'\"LETRAS CLÁSICAS\"'),(13,'\"LITERATURA\"'),(14,'\"MATEMÁTICAS\"'),(15,'\"PSICOLOGÍA\"'),(16,'\"QUÍMICA\"'),(17,'\"INFORMÁTICA\"'),(18,'\"OPCIONES TÉCNICAS\"'),(19,'\"ORIENTACIÓN\"'),(20,'\"CÓMPUTO\"');
/*!40000 ALTER TABLE `colegio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colegiohasmateria`
--

DROP TABLE IF EXISTS `colegiohasmateria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `colegiohasmateria` (
  `id_ChM` int(11) NOT NULL AUTO_INCREMENT,
  `id_Colegio` tinyint(4) DEFAULT NULL,
  `id_materia` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id_ChM`),
  KEY `id_Colegio` (`id_Colegio`),
  KEY `id_materia` (`id_materia`),
  CONSTRAINT `colegiohasmateria_ibfk_1` FOREIGN KEY (`id_Colegio`) REFERENCES `colegio` (`id_Colegio`),
  CONSTRAINT `colegiohasmateria_ibfk_2` FOREIGN KEY (`id_materia`) REFERENCES `materia` (`id_materia`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colegiohasmateria`
--

LOCK TABLES `colegiohasmateria` WRITE;
/*!40000 ALTER TABLE `colegiohasmateria` DISABLE KEYS */;
INSERT INTO `colegiohasmateria` VALUES (1,14,1),(2,8,2),(3,13,3),(4,10,4),(5,7,5),(6,9,6),(7,6,7),(8,11,8),(9,11,9),(10,2,10),(11,1,11),(12,19,12),(13,17,13),(14,14,14),(15,16,15),(16,4,16),(17,3,17),(18,10,18),(19,12,19),(20,11,20),(21,11,21),(22,11,22),(23,11,23),(24,11,24),(25,11,25),(26,7,26),(27,1,27),(28,2,28),(29,19,29),(30,13,30),(31,14,31),(32,5,32),(33,13,33),(34,11,34),(35,11,35),(36,11,36),(37,11,37),(38,11,38),(39,11,39),(40,15,40),(41,6,41),(42,8,42),(43,16,43),(44,4,44),(45,9,45),(46,5,46),(47,5,47),(48,10,48),(49,7,49),(50,14,50),(51,14,51),(52,8,52),(53,16,53),(54,15,54),(55,10,55),(56,5,56),(57,5,57),(58,9,58),(59,9,59),(60,6,60),(61,8,61),(62,14,62),(63,4,63),(64,14,64),(65,12,65),(66,12,66),(67,6,67),(68,3,68),(69,7,69),(70,10,70),(71,17,71),(72,5,72),(73,8,73),(74,8,74),(75,18,75),(76,18,76),(77,18,77),(78,18,78),(79,18,79),(80,2,80),(81,2,81),(82,2,82),(83,2,83),(84,2,84),(85,2,85),(86,2,86),(87,2,87),(88,2,88),(89,2,89),(90,2,90),(91,2,91),(92,2,92),(93,2,93),(94,2,94),(95,2,95),(96,2,96),(97,2,97),(98,2,98),(99,2,99),(100,2,100);
/*!40000 ALTER TABLE `colegiohasmateria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `horario`
--

DROP TABLE IF EXISTS `horario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `horario` (
  `id_horario` tinyint(4) NOT NULL AUTO_INCREMENT,
  `horaInicio` time DEFAULT NULL,
  `horaFinal` time DEFAULT NULL,
  PRIMARY KEY (`id_horario`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `horario`
--

LOCK TABLES `horario` WRITE;
/*!40000 ALTER TABLE `horario` DISABLE KEYS */;
INSERT INTO `horario` VALUES (1,'07:00:00','07:50:00'),(2,'07:50:00','08:40:00'),(3,'08:40:00','09:30:00'),(4,'09:30:00','10:20:00'),(5,'10:20:00','11:10:00'),(6,'11:10:00','12:00:00'),(7,'12:00:00','12:50:00'),(8,'12:50:00','13:40:00'),(9,'13:40:00','14:30:00'),(10,'14:30:00','15:20:00'),(11,'15:20:00','16:10:00'),(12,'16:10:00','17:00:00'),(13,'17:00:00','17:50:00'),(14,'17:50:00','18:40:00'),(15,'18:40:00','19:30:00'),(16,'19:30:00','20:20:00'),(17,'20:20:00','21:10:00'),(18,'07:00:00','08:40:00'),(19,'07:50:00','09:30:00'),(20,'08:40:00','10:20:00'),(21,'09:30:00','11:10:00'),(22,'10:20:00','12:00:00'),(23,'11:10:00','12:50:00'),(24,'12:00:00','13:40:00'),(25,'12:50:00','14:30:00'),(26,'13:40:00','15:20:00'),(27,'14:30:00','16:10:00'),(28,'15:20:00','17:00:00'),(29,'16:10:00','17:50:00'),(30,'17:00:00','18:40:00'),(31,'17:50:00','19:30:00'),(32,'18:40:00','20:20:00'),(33,'19:30:00','21:10:00');
/*!40000 ALTER TABLE `horario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materia`
--

DROP TABLE IF EXISTS `materia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `materia` (
  `id_materia` tinyint(4) NOT NULL AUTO_INCREMENT,
  `materia` varchar(35) DEFAULT NULL,
  PRIMARY KEY (`id_materia`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materia`
--

LOCK TABLES `materia` WRITE;
/*!40000 ALTER TABLE `materia` DISABLE KEYS */;
INSERT INTO `materia` VALUES (1,'MATEMATICAS IV\r'),(2,'FISICA III\r'),(3,'LENGUA ESPAÑOLA\r'),(4,'HISTORIA UNIVERSAL III\r'),(5,'LOGICA\r'),(6,'GEOGRAFIA\r'),(7,'DIBUJO II\r'),(8,'LENGUA EXTRAN. INGLES IV\r'),(9,'LENGUA EXTRAN. FRANCES IV\r'),(10,'ED. ESTETICA-ARTISTICA IV\r'),(11,'EDUCACION FISICA IV\r'),(12,'ORIENTACION EDUCATIVA IV\r'),(13,'INFORMATICA\r'),(14,'MATEMATICAS V\r'),(15,'QUIMICA III\r'),(16,'BIOLOGIA IV\r'),(17,'EDUCACION PARA LA SALUD\r'),(18,'HISTORIA DE MEXICO II\r'),(19,'ETIMOLOGIAS GRECOLATINAS\r'),(20,'L. EXTRANJERA INGLES V\r'),(21,'L. EXTRANJERA FRANCES V\r'),(22,'L. EXTRANJERA ITALIANO I\r'),(23,'L. EXTRANJERA ALEMAN I\r'),(24,'L. EXTRANJERA INGLES I\r'),(25,'L. EXTRANJERA FRANCES I\r'),(26,'ETICA\r'),(27,'EDUCACION FISICA V\r'),(28,'ED. ESTETICA-ARTISTICA V\r'),(29,'ORIENTACION EDUCATIVA V\r'),(30,'LITERATURA UNIVERSAL\r'),(31,'MATEMATICAS VI AREA I Y II\r'),(32,'DERECHO\r'),(33,'LITERATURA MEX. E IB.\r'),(34,'INGLES VI\r'),(35,'FRANCES VI\r'),(36,'ALEMAN II\r'),(37,'ITALIANO II\r'),(38,'INGLES II\r'),(39,'FRANCES II\r'),(40,'PSICOLOGIA\r'),(41,'DIBUJO CONSTRUCTIVO II\r'),(42,'FISICA IV AREA I\r'),(43,'QUIMICA IV AREA I\r'),(44,'BIOLOGIA V\r'),(45,'GEOGRAFIA ECONOMICA\r'),(46,'INT. AL EST. C. S. Y ECO.\r'),(47,'PROBS. SOC. Y POL. Y ECO.\r'),(48,'HISTORIA DE LA CULTURA\r'),(49,'HISTORIA DE LAS DOC. FIL.\r'),(50,'MATEMATICAS VI AREA III\r'),(51,'MATEMATICAS VI AREA IV\r'),(52,'FISICA IV AREA II\r'),(53,'QUIMICA IV AREA II\r'),(54,'HIGIENE MENTAL\r'),(55,'REVOLUCION MEXICANA\r'),(56,'CONT. Y GEST. ADMINISTRAT\r'),(57,'PENS. FILOSOFICO EN MEXIC\r'),(58,'GEOLOGIA Y MINEROLOGIA\r'),(59,'GEOGRAFIA POLITICA\r'),(60,'MODELADO II\r'),(61,'FISICO-QUIMICA\r'),(62,'TEMAS SELECTOS DE MATEM.\r'),(63,'TEMAS SELECTOS DE BIOLOG.\r'),(64,'ESTADISTICA Y PROBABILID.\r'),(65,'LATIN\r'),(66,'GRIEGO\r'),(67,'COMUNICACION VISUAL\r'),(68,'TEMAS SEL. MORFOL. Y FIS.\r'),(69,'ESTETICA\r'),(70,'HISTORIA DEL ARTE\r'),(71,'INFORMAT. APLI. C. E IND.\r'),(72,'SOCIOLOGIA\r'),(73,'COSMOGRAFÍA\r'),(74,'ASTRONOMIA\r'),(75,'O. T. COMPUTACION V\r'),(76,'O.T. CONTABILIDAD\r'),(77,'O. T. COMPUTACION VI\r'),(78,'O. T. ENSEÑANZA DE INGLES\r'),(79,'O.T. HISTOPATOLOGÍA\r'),(80,'FOTOGRAFÍA\r'),(81,'PINTURA\r'),(82,'ESCULTURA\r'),(83,'GRABADO\r'),(84,'CERÁMICA\r'),(85,'DANZA CLÁSICA\r'),(86,'DANZA CONTEMPORÁNEA\r'),(87,'DANZA ESPAÑOLA\r'),(88,'DANZA REGIONAL\r'),(89,'BANDA\r'),(90,'CORO\r'),(91,'CLARINETE\r'),(92,'FLAUTA\r'),(93,'GUITARRA\r'),(94,'ESTUDIANTINA\r'),(95,'PIANO\r'),(96,'SAXOFÓN\r'),(97,'TROMPETA\r'),(98,'ORATORIA\r'),(99,'TEATRO\r'),(100,'CINE\r');
/*!40000 ALTER TABLE `materia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materiahasusuario`
--

DROP TABLE IF EXISTS `materiahasusuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `materiahasusuario` (
  `id_MhU` tinyint(4) NOT NULL AUTO_INCREMENT,
  `id_materia` tinyint(4) DEFAULT NULL,
  `NumCuenta` varchar(9) DEFAULT NULL,
  PRIMARY KEY (`id_MhU`),
  KEY `id_materia` (`id_materia`),
  KEY `NumCuenta` (`NumCuenta`),
  CONSTRAINT `materiahasusuario_ibfk_1` FOREIGN KEY (`id_materia`) REFERENCES `materia` (`id_materia`),
  CONSTRAINT `materiahasusuario_ibfk_2` FOREIGN KEY (`NumCuenta`) REFERENCES `usuario` (`numCuenta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materiahasusuario`
--

LOCK TABLES `materiahasusuario` WRITE;
/*!40000 ALTER TABLE `materiahasusuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `materiahasusuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reporte`
--

DROP TABLE IF EXISTS `reporte`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reporte` (
  `id_reporte` smallint(6) NOT NULL AUTO_INCREMENT,
  `id_tipoReporte` tinyint(4) DEFAULT NULL,
  `id_asesoria` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`id_reporte`),
  KEY `id_tipoReporte` (`id_tipoReporte`),
  KEY `id_asesoria` (`id_asesoria`),
  CONSTRAINT `reporte_ibfk_1` FOREIGN KEY (`id_tipoReporte`) REFERENCES `tiporeporte` (`id_tipoReporte`),
  CONSTRAINT `reporte_ibfk_2` FOREIGN KEY (`id_asesoria`) REFERENCES `asesoria` (`id_asesoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reporte`
--

LOCK TABLES `reporte` WRITE;
/*!40000 ALTER TABLE `reporte` DISABLE KEYS */;
/*!40000 ALTER TABLE `reporte` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipoasistente`
--

DROP TABLE IF EXISTS `tipoasistente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipoasistente` (
  `id_tipoAsistente` tinyint(4) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id_tipoAsistente`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipoasistente`
--

LOCK TABLES `tipoasistente` WRITE;
/*!40000 ALTER TABLE `tipoasistente` DISABLE KEYS */;
INSERT INTO `tipoasistente` VALUES (1),(2);
/*!40000 ALTER TABLE `tipoasistente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tiporeporte`
--

DROP TABLE IF EXISTS `tiporeporte`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tiporeporte` (
  `id_tipoReporte` tinyint(4) NOT NULL AUTO_INCREMENT,
  `falta` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id_tipoReporte`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tiporeporte`
--

LOCK TABLES `tiporeporte` WRITE;
/*!40000 ALTER TABLE `tiporeporte` DISABLE KEYS */;
INSERT INTO `tiporeporte` VALUES (1,'nPresento\r'),(2,'abuso\r'),(3,'acoso\r'),(4,'spam\r'),(5,'datosFalsos\r');
/*!40000 ALTER TABLE `tiporeporte` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipousuario`
--

DROP TABLE IF EXISTS `tipousuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipousuario` (
  `id_tipoUsuario` tinyint(4) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id_tipoUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipousuario`
--

LOCK TABLES `tipousuario` WRITE;
/*!40000 ALTER TABLE `tipousuario` DISABLE KEYS */;
INSERT INTO `tipousuario` VALUES (1),(2);
/*!40000 ALTER TABLE `tipousuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `numCuenta` varchar(9) NOT NULL,
  `id_tipoUsuario` tinyint(4) DEFAULT NULL,
  `añoInscripcion` smallint(6) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `numTelefono` varchar(25) DEFAULT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `numStrike` tinyint(4) DEFAULT NULL,
  `contraseña` varchar(255) NOT NULL,
  `sal` varchar(20) DEFAULT NULL,
  `rutaImagen` varchar(50) DEFAULT NULL,
  `calificacionTotal` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`numCuenta`),
  UNIQUE KEY `email` (`email`),
  KEY `id_tipoUsuario` (`id_tipoUsuario`),
  CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`id_tipoUsuario`) REFERENCES `tipousuario` (`id_tipoUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES ('320266241',1,2019,'Eduardoandreco2004@gmail.com','5580190120','Andreco',0,'contraseña','asasdasdasd','./ruta',10);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuariohashorarios`
--

DROP TABLE IF EXISTS `usuariohashorarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuariohashorarios` (
  `id_UhH` int(11) NOT NULL AUTO_INCREMENT,
  `id_horario` tinyint(4) DEFAULT NULL,
  `numCuenta` varchar(9) DEFAULT NULL,
  PRIMARY KEY (`id_UhH`),
  KEY `id_horario` (`id_horario`),
  KEY `numCuenta` (`numCuenta`),
  CONSTRAINT `usuariohashorarios_ibfk_1` FOREIGN KEY (`id_horario`) REFERENCES `horario` (`id_horario`),
  CONSTRAINT `usuariohashorarios_ibfk_2` FOREIGN KEY (`numCuenta`) REFERENCES `usuario` (`numCuenta`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuariohashorarios`
--

LOCK TABLES `usuariohashorarios` WRITE;
/*!40000 ALTER TABLE `usuariohashorarios` DISABLE KEYS */;
INSERT INTO `usuariohashorarios` VALUES (1,1,'320266241'),(2,5,'320266241');
/*!40000 ALTER TABLE `usuariohashorarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuariohasmateria`
--

DROP TABLE IF EXISTS `usuariohasmateria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuariohasmateria` (
  `id_UhM` tinyint(4) NOT NULL AUTO_INCREMENT,
  `id_materia` tinyint(4) DEFAULT NULL,
  `numCuenta` varchar(9) DEFAULT NULL,
  PRIMARY KEY (`id_UhM`),
  KEY `id_materia` (`id_materia`),
  KEY `numCuenta` (`numCuenta`),
  CONSTRAINT `usuariohasmateria_ibfk_1` FOREIGN KEY (`id_materia`) REFERENCES `materia` (`id_materia`),
  CONSTRAINT `usuariohasmateria_ibfk_2` FOREIGN KEY (`numCuenta`) REFERENCES `usuario` (`numCuenta`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuariohasmateria`
--

LOCK TABLES `usuariohasmateria` WRITE;
/*!40000 ALTER TABLE `usuariohasmateria` DISABLE KEYS */;
INSERT INTO `usuariohasmateria` VALUES (1,1,'320266241'),(2,2,'320266241');
/*!40000 ALTER TABLE `usuariohasmateria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuariohasreporte`
--

DROP TABLE IF EXISTS `usuariohasreporte`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuariohasreporte` (
  `id_UhR` tinyint(4) NOT NULL AUTO_INCREMENT,
  `id_reporte` smallint(6) DEFAULT NULL,
  `NumCuenta` varchar(9) DEFAULT NULL,
  PRIMARY KEY (`id_UhR`),
  KEY `id_reporte` (`id_reporte`),
  KEY `NumCuenta` (`NumCuenta`),
  CONSTRAINT `usuariohasreporte_ibfk_1` FOREIGN KEY (`id_reporte`) REFERENCES `reporte` (`id_reporte`),
  CONSTRAINT `usuariohasreporte_ibfk_2` FOREIGN KEY (`NumCuenta`) REFERENCES `usuario` (`numCuenta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuariohasreporte`
--

LOCK TABLES `usuariohasreporte` WRITE;
/*!40000 ALTER TABLE `usuariohasreporte` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuariohasreporte` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-09 23:02:31
