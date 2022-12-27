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
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `product_id` bigint NOT NULL AUTO_INCREMENT,
  `product_name` varchar(250) DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  `avatar` varchar(250) DEFAULT NULL,
  `rate` decimal(10,0) DEFAULT NULL,
  `sold` int DEFAULT '0',
  `price` int DEFAULT '0',
  `promo` int DEFAULT '0',
  `description` text,
  `amount` int DEFAULT '0',
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `agent_id` bigint DEFAULT NULL,
  `product_status_id` int DEFAULT NULL,
  `brand_id` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`product_id`),
  CONSTRAINT `product_chk_1` CHECK (((`rate` >= 0) and (`rate` <= 5))),
  CONSTRAINT `product_chk_2` CHECK ((`sold` >= 0)),
  CONSTRAINT `product_chk_3` CHECK ((`price` >= 0)),
  CONSTRAINT `product_chk_4` CHECK ((`promo` >= 0)),
  CONSTRAINT `product_chk_5` CHECK ((`amount` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (2,'Áo hoodie dài tay có mũ nỉ trơn unisex nam nữ có 2 túi trước nhiều màu mặc mùa đông ấm ấp',40,'https://cf.shopee.vn/file/eb94065765a85115e1cd9c6692696d3b',NULL,0,0,0,NULL,0,'2022-12-17 07:30:07',NULL,NULL,NULL),(3,'Chân váy chữ a ngắn xẻ trước kèm quần trong trẻ trung',NULL,NULL,NULL,0,0,0,NULL,0,'2022-12-17 07:30:07',NULL,NULL,NULL),(4,'Áo sơ mi nữ dài tay trắng đi học, đi làm cổ bẻ form rộng vừa, bo nhún cổ tay vải lụa',NULL,NULL,NULL,0,0,0,NULL,0,'2022-12-17 07:30:07',NULL,NULL,NULL),(5,'Áo Hoodie Nỉ Nam Thu Đông Họa Tiết Tay Đấm Zenkonam MEN TOP 185',NULL,NULL,NULL,0,0,0,NULL,0,'2022-12-17 07:30:07',NULL,NULL,NULL),(6,'Áo liền mũ hoodie chữ K họa tiết logo trên áo thời trang Zenko MEN TOP 154',NULL,NULL,NULL,0,0,0,NULL,0,'2022-12-17 07:30:07',NULL,NULL,NULL),(7,'Áo Khoác Nỉ Nam Dài Tay Khóa Kéo Có Mũ Trùm Họa Tiết Chữ K Zenkonam MEN JK 034',NULL,NULL,NULL,0,0,0,NULL,0,'2022-12-17 07:30:07',NULL,NULL,NULL),(8,'Áo khoác liền mũ hoodie chữ R họa tiết logo tay áo thời trang Zenko MEN JK 071 V2',NULL,NULL,NULL,0,0,0,NULL,0,'2022-12-17 07:30:07',NULL,NULL,NULL),(9,'ÁO KHOÁC PHAO NAM BOMBER TRẺ TRUNG CÁ TÍNH CHẦN BÔNG 3 LỚP CỰC ẤM Zenko MEN JK 068',NULL,NULL,NULL,0,0,0,NULL,0,'2022-12-17 07:30:07',NULL,NULL,NULL),(10,'Áo Phao Nam 3 Lớp Khóa Mũ Thời Trang Nam Cao Cấp Zenko MEN JK 069',NULL,NULL,NULL,0,0,0,NULL,0,'2022-12-17 07:30:07',NULL,NULL,NULL),(11,'ÁO KHOÁC KAKI 3 Tầng Chất liệu Kaki Hàn 2 lớp mềm mịn có thể chống nắng chống gió chống bụi chống rét Zenko MEN JK 065',NULL,NULL,NULL,0,0,0,NULL,0,'2022-12-17 07:30:07',NULL,NULL,NULL),(12,'Áo Khoác Nam Nữ Có Mũ Trùm Đầu In Hai Mặt K Kiểu Dáng Trẻ Trung Thời Trang Zenkonam MEN JK 034',NULL,NULL,NULL,0,0,0,NULL,0,'2022-12-17 07:30:07',NULL,NULL,NULL),(13,'Áo khoác nỉ phối mũ thời trang STYLE MARVEN dáng dài in chữ nổi bật phong cách Hàn Quốc trẻ trung - AO KHOAC NAM 9000020',NULL,NULL,NULL,0,0,0,NULL,0,'2022-12-17 07:30:07',NULL,NULL,NULL),(14,'[Mã FATREND18 giảm tới 30k đơn 99k] Áo Khoác Gió Dáng Rộng Phong Cách Hàn Quốc Thời Trang Xuân Thu 2022',NULL,NULL,NULL,0,0,0,NULL,0,'2022-12-17 07:30:07',NULL,NULL,NULL),(15,'Áo Khoác Dáng Dài Qua Gối Dày Dặn Chống Gió Thời Trang Xuân Thu Cho Nam',NULL,NULL,NULL,0,0,0,NULL,0,'2022-12-17 07:30:07',NULL,NULL,NULL),(16,'Áo khoác gió - Áo khoác Kaky Lót Lông thời trang thu đông quảng châu',NULL,NULL,NULL,0,0,0,NULL,0,'2022-12-17 07:30:07',NULL,NULL,NULL),(17,'ÁO KHOÁC NỈ LÓT LÔNG NAM NỮ NÓN TRÙM ĐẦU ẤM ÁP MÙA ĐÔNG CỰC XỊN SÒ HOT CỦA NĂM BAO NGẦU',NULL,NULL,NULL,0,0,0,NULL,0,'2022-12-17 07:30:07',NULL,NULL,NULL);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-27 21:18:57
