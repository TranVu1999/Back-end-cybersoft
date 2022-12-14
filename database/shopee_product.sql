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
INSERT INTO `product` VALUES (2,'??o hoodie d??i tay c?? m?? n??? tr??n unisex nam n??? c?? 2 t??i tr?????c nhi???u m??u m???c m??a ????ng ???m ???p',40,'https://cf.shopee.vn/file/eb94065765a85115e1cd9c6692696d3b',NULL,0,0,0,NULL,0,'2022-12-17 07:30:07',NULL,NULL,NULL),(3,'Ch??n v??y ch??? a ng???n x??? tr?????c k??m qu???n trong tr??? trung',NULL,NULL,NULL,0,0,0,NULL,0,'2022-12-17 07:30:07',NULL,NULL,NULL),(4,'??o s?? mi n??? d??i tay tr???ng ??i h???c, ??i l??m c??? b??? form r???ng v???a, bo nh??n c??? tay v???i l???a',NULL,NULL,NULL,0,0,0,NULL,0,'2022-12-17 07:30:07',NULL,NULL,NULL),(5,'??o Hoodie N??? Nam Thu ????ng H???a Ti???t Tay ?????m Zenkonam MEN TOP 185',NULL,NULL,NULL,0,0,0,NULL,0,'2022-12-17 07:30:07',NULL,NULL,NULL),(6,'??o li???n m?? hoodie ch??? K h???a ti???t logo tr??n ??o th???i trang Zenko MEN TOP 154',NULL,NULL,NULL,0,0,0,NULL,0,'2022-12-17 07:30:07',NULL,NULL,NULL),(7,'??o Kho??c N??? Nam D??i Tay Kh??a K??o C?? M?? Tr??m H???a Ti???t Ch??? K Zenkonam MEN JK 034',NULL,NULL,NULL,0,0,0,NULL,0,'2022-12-17 07:30:07',NULL,NULL,NULL),(8,'??o kho??c li???n m?? hoodie ch??? R h???a ti???t logo tay ??o th???i trang Zenko MEN JK 071 V2',NULL,NULL,NULL,0,0,0,NULL,0,'2022-12-17 07:30:07',NULL,NULL,NULL),(9,'??O KHO??C PHAO NAM BOMBER TR??? TRUNG C?? T??NH CH???N B??NG 3 L???P C???C ???M Zenko MEN JK 068',NULL,NULL,NULL,0,0,0,NULL,0,'2022-12-17 07:30:07',NULL,NULL,NULL),(10,'??o Phao Nam 3 L???p Kh??a M?? Th???i Trang Nam Cao C???p Zenko MEN JK 069',NULL,NULL,NULL,0,0,0,NULL,0,'2022-12-17 07:30:07',NULL,NULL,NULL),(11,'??O KHO??C KAKI 3 T???ng Ch???t li???u Kaki H??n 2 l???p m???m m???n c?? th??? ch???ng n???ng ch???ng gi?? ch???ng b???i ch???ng r??t Zenko MEN JK 065',NULL,NULL,NULL,0,0,0,NULL,0,'2022-12-17 07:30:07',NULL,NULL,NULL),(12,'??o Kho??c Nam N??? C?? M?? Tr??m ?????u In Hai M???t K Ki???u D??ng Tr??? Trung Th???i Trang Zenkonam MEN JK 034',NULL,NULL,NULL,0,0,0,NULL,0,'2022-12-17 07:30:07',NULL,NULL,NULL),(13,'??o kho??c n??? ph???i m?? th???i trang STYLE MARVEN d??ng d??i in ch??? n???i b???t phong c??ch H??n Qu???c tr??? trung - AO KHOAC NAM 9000020',NULL,NULL,NULL,0,0,0,NULL,0,'2022-12-17 07:30:07',NULL,NULL,NULL),(14,'[M?? FATREND18 gi???m t???i 30k ????n 99k] ??o Kho??c Gi?? D??ng R???ng Phong C??ch H??n Qu???c Th???i Trang Xu??n Thu 2022',NULL,NULL,NULL,0,0,0,NULL,0,'2022-12-17 07:30:07',NULL,NULL,NULL),(15,'??o Kho??c D??ng D??i Qua G???i D??y D???n Ch???ng Gi?? Th???i Trang Xu??n Thu Cho Nam',NULL,NULL,NULL,0,0,0,NULL,0,'2022-12-17 07:30:07',NULL,NULL,NULL),(16,'??o kho??c gi?? - ??o kho??c Kaky L??t L??ng th???i trang thu ????ng qu???ng ch??u',NULL,NULL,NULL,0,0,0,NULL,0,'2022-12-17 07:30:07',NULL,NULL,NULL),(17,'??O KHO??C N??? L??T L??NG NAM N??? N??N TR??M ?????U ???M ??P M??A ????NG C???C X???N S?? HOT C???A N??M BAO NG???U',NULL,NULL,NULL,0,0,0,NULL,0,'2022-12-17 07:30:07',NULL,NULL,NULL);
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
