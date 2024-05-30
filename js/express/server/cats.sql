-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.11.3-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.7.0.6850
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for express
CREATE DATABASE IF NOT EXISTS `express` /*!40100 DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci */;
USE `express`;

-- Dumping structure for table express.cats
CREATE TABLE IF NOT EXISTS `cats` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `sex` varchar(10) DEFAULT NULL,
  `location` varchar(100) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `img_url` varchar(255) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Dumping data for table express.cats: ~6 rows (approximately)
DELETE FROM `cats`;
INSERT INTO `cats` (`ID`, `sex`, `location`, `age`, `img_url`, `name`) VALUES
	(1, 'male', 'Gent', 36, 'https://media1.tenor.com/m/igcX5hdPWD4AAAAC/eating-cats.gif', 'Zorro'),
	(2, 'female', 'Meowville', 24, 'https://media1.tenor.com/m/MFt1WVDeUhUAAAAd/smol-illegally-smol-cat.gif', 'Whiskerina'),
	(3, 'male', 'Purrtown', 48, 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWJoeGhrZmZ5MGZqYW9zdTExdTc1bnptZTRhMjFpcWZpcGU1Y2Y5dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MDJ9IbxxvDUQM/giphy.gif', 'Mr. Paws'),
	(4, 'female', 'Kitty City', 60, 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXJrd21uM2VoMm1nNHRtdTVvajVlOHNrYmV2NnVoazFmM3VrcmMzbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/INUsrrxQW4et2/giphy.gif', 'Princess Fuzzy'),
	(5, 'male', 'Furball Village', 72, 'https://media1.tenor.com/m/tyaej0WHQd0AAAAd/cat-sleep.gif', 'Sir Meowsalot'),
	(6, 'female', 'Clawston', 30, 'https://media1.tenor.com/m/xraDoBV8GlEAAAAC/cat.gif', 'Lady Scratches');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
