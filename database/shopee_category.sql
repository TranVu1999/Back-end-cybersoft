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
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `category_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(250) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `level` int DEFAULT '1',
  `parent_id` int DEFAULT NULL,
  `category_status_id` int DEFAULT NULL,
  `priority` int DEFAULT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=139 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Thời Trang Nữ',1,NULL,1,NULL),(2,'Thời Trang Nam',1,NULL,1,NULL),(3,'Sắc Đẹp',1,NULL,1,NULL),(4,'Phụ Kiện Thời Trang',1,NULL,1,NULL),(5,'Thiết Bị Điện Gia Dụng',1,NULL,1,NULL),(6,'Giày Dép Nam',1,NULL,1,NULL),(7,'Điện Thoại & Phụ Kiện',1,NULL,1,NULL),(8,'Du Lịch & Hành Lý',1,NULL,1,NULL),(9,'Túi Ví Nữ',1,NULL,1,NULL),(10,'Giày Dép Nữ',1,NULL,1,NULL),(11,'Túi Ví Nam',1,NULL,1,NULL),(12,'Đồng Hồ',1,NULL,1,NULL),(13,'Thiết Bị Âm Thanh',1,NULL,1,NULL),(14,'Thực Phẩm & Đồ Uống',1,NULL,1,NULL),(15,'Chăm Sóc Thú Cưng',1,NULL,1,NULL),(16,'Mẹ & Bé',1,NULL,1,NULL),(17,'Thời Trang Trẻ Em',1,NULL,1,NULL),(18,'Cameras & Flycam',1,NULL,1,NULL),(19,'Nhà cửa & Đời sống',1,NULL,1,NULL),(20,'Thể Thao & Dã Ngoại',1,NULL,1,NULL),(21,'Văn Phòng Phẩm',1,NULL,1,NULL),(52,'Áo',2,1,NULL,NULL),(53,'Quần',2,1,NULL,NULL),(54,'Quần đùi',2,1,NULL,NULL),(55,'Váy',2,1,NULL,NULL),(56,'Quần jeans',2,1,NULL,NULL),(57,'Đầm',2,1,NULL,NULL),(58,'Váy cưới',2,1,NULL,NULL),(59,'Đồ liền thân',2,1,NULL,NULL),(60,'Áo khoác',2,1,NULL,NULL),(61,'Áo len',2,1,NULL,NULL),(62,'Hoodie và Áo nỉ',2,1,NULL,NULL),(63,'Bộ',2,1,NULL,NULL),(64,'Đồ ngủ',2,1,NULL,NULL),(65,'Đồ bầu',2,1,NULL,NULL),(66,'Đồ truyền thống',2,1,NULL,NULL),(67,'Áo Khoác ngoài',3,30,NULL,NULL),(68,'Áo Vest',3,30,NULL,NULL),(69,'Áo nỉ',3,32,NULL,NULL),(70,'Áo hoodies',3,32,NULL,NULL),(71,'Bộ đồ đôi',3,33,NULL,NULL),(72,'bộ đồ gia đình',3,33,NULL,NULL),(73,'đồ lẻ',3,33,NULL,NULL),(74,'Pỵama',3,34,NULL,NULL),(75,'Váy ngủ',3,34,NULL,NULL),(76,'Áo choàng ngủ',3,34,NULL,NULL),(77,'Quần đùi',2,2,NULL,NULL),(78,'Áo',2,2,NULL,NULL),(79,'Đồ ngủ',2,2,NULL,NULL),(80,'Áo sơ mi',3,48,NULL,NULL),(81,'Áo polo',3,48,NULL,NULL),(82,'Áo thun',3,48,NULL,NULL),(83,'Áo ba lỗ',3,48,NULL,NULL),(84,'Bốt',2,10,NULL,NULL),(85,'Giày thể thao/ sneaker',2,10,NULL,NULL),(86,'Giày đế bằng',2,10,NULL,NULL),(87,'Giày cao gót',2,10,NULL,NULL),(88,'Giày đế xuồng',2,10,NULL,NULL),(89,'Xăng-đan và dép',2,10,NULL,NULL),(90,'Phụ kiện & chăm sóc giày',2,10,NULL,NULL),(91,'Bốt đi mưa',3,54,NULL,NULL),(92,'Bốt thời trang',3,54,NULL,NULL),(93,'Giày bale',3,56,NULL,NULL),(94,'Giày lười',3,56,NULL,NULL),(95,'Giày Oxford & Giày buộc dây',3,56,NULL,NULL),(96,'Giày sục & Giày búp bê',3,56,NULL,NULL),(97,'Xăng-đan đế bằng',3,59,NULL,NULL),(98,'Dép kẹp/ dép xỏ ngón',3,59,NULL,NULL),(99,'Dép mát-xa',3,59,NULL,NULL),(100,'Dép đi trong nhà',3,59,NULL,NULL),(101,'Đồ khử mùi giày',3,60,NULL,NULL),(102,'Miếng lót giày',3,60,NULL,NULL),(103,'Cây đón gót & Giữ form giày',3,60,NULL,NULL),(104,'Đồ chăm sóc và làm sạch giày',3,60,NULL,NULL),(105,'Dây giày',3,60,NULL,NULL),(106,'Ba lô',2,11,NULL,NULL),(107,'Cặp laptop',2,11,NULL,NULL),(108,'Tui tote',2,11,NULL,NULL),(109,'Cặp sách công sở',2,11,NULL,NULL),(110,'Ví cầm tay',2,11,NULL,NULL),(111,'Túi đeo hông & Túi đeo ngực',2,11,NULL,NULL),(112,'Túi đep chéo',2,11,NULL,NULL),(113,'Bóp/ Ví',2,11,NULL,NULL),(114,'Túi & cặp đựng laptop',3,77,NULL,NULL),(115,'Túi chống sốc laptop',3,77,NULL,NULL),(116,'Ba lô laptop',3,77,NULL,NULL),(117,'Ví đựng thẻ',3,83,NULL,NULL),(118,'Ví đựng tiền xu',3,83,NULL,NULL),(119,'Ví đựng điện thoại & chìa khóa',3,83,NULL,NULL),(120,'Ví gập đôi & gập ba',3,83,NULL,NULL),(121,'Ví dài',3,83,NULL,NULL),(122,'Máy tính bảng',2,7,NULL,NULL),(123,'Điện thoại ',2,7,NULL,NULL),(124,'Thiết bị đeo thông minh',2,7,NULL,NULL),(125,'Phụ kiện',2,7,NULL,NULL),(126,'Tai nghe nhét tai & chụp tai',2,13,NULL,NULL),(127,'Máy nghe nhạc',2,13,NULL,NULL),(128,'Micro thu âm',2,13,NULL,NULL),(129,'Amply và điều chỉnh âm',2,13,NULL,NULL),(130,'Dàn âm thanh',2,13,NULL,NULL),(131,'Cáp âm thanh/ video',2,13,NULL,NULL),(132,'MP4 & MPR4',3,97,NULL,NULL),(133,'Cd, DVD & Bluray',3,97,NULL,NULL),(134,'Máy ghi âm',3,97,NULL,NULL),(135,'Radio & Cát-sét',3,97,NULL,NULL),(136,'Loa',3,100,NULL,NULL),(137,'Hệ thống âm thanh giải trí',3,100,NULL,NULL),(138,'Thu sóng AV',3,100,NULL,NULL);
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-27 21:18:52
