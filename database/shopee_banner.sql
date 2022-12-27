-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: shopee
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `banner`
--

DROP TABLE IF EXISTS `banner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `banner` (
  `banner_id` int NOT NULL AUTO_INCREMENT,
  `img_url` varchar(250) DEFAULT NULL,
  `link_to` varchar(250) DEFAULT NULL,
  `priority` int DEFAULT NULL,
  `type` enum('slider','banner') DEFAULT NULL,
  PRIMARY KEY (`banner_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `banner`
--

LOCK TABLES `banner` WRITE;
/*!40000 ALTER TABLE `banner` DISABLE KEYS */;
INSERT INTO `banner` VALUES (1,'https://cf.shopee.vn/file/60fffb35fe05987b6a36d3488c0b90d7_xxhdpi',NULL,1,'slider'),(2,'https://cf.shopee.vn/file/60fffb35fe05987b6a36d3488c0b90d7_xxhdpi',NULL,2,'slider'),(3,'https://cf.shopee.vn/file/60fffb35fe05987b6a36d3488c0b90d7_xxhdpi',NULL,3,'slider'),(4,'https://cf.shopee.vn/file/60fffb35fe05987b6a36d3488c0b90d7_xxhdpi',NULL,4,'slider'),(5,'https://cf.shopee.vn/file/60fffb35fe05987b6a36d3488c0b90d7_xxhdpi',NULL,5,'slider'),(6,'https://cf.shopee.vn/file/60fffb35fe05987b6a36d3488c0b90d7_xxhdpi',NULL,6,'slider'),(7,'https://cf.shopee.vn/file/81ffbb060115bd7f07b3f5e8d8782f8d_xxhdpi',NULL,7,'slider'),(8,'https://cf.shopee.vn/file/457a26a288143056706a32e2e882af96_xxhdpi',NULL,8,'slider'),(9,'https://cf.shopee.vn/file/728400c32e5f8eda32115a9223060fa6_xxhdpi',NULL,9,'slider'),(10,'https://cf.shopee.vn/file/60fffb35fe05987b6a36d3488c0b90d7_xxhdpi',NULL,10,'slider'),(11,'https://cf.shopee.vn/file/215e7df735b93fa123c172d22be132ff_xxhdpi',NULL,11,'slider'),(12,'https://cf.shopee.vn/file/8f34f602d87a9e53b396a0b78c95961b_xxhdpi',NULL,12,'slider');
/*!40000 ALTER TABLE `banner` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-27 21:18:50
