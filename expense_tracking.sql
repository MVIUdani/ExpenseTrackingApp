-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3308
-- Generation Time: Oct 27, 2021 at 05:58 PM
-- Server version: 8.0.18
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `expense_tracking`
--

-- --------------------------------------------------------

--
-- Table structure for table `expenses`
--

DROP TABLE IF EXISTS `expenses`;
CREATE TABLE IF NOT EXISTS `expenses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` text COLLATE utf8mb4_general_ci,
  `expense` float DEFAULT NULL,
  `type` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `expenses`
--

INSERT INTO `expenses` (`id`, `description`, `expense`, `type`, `createdAt`, `updatedAt`) VALUES
(2, 'buy 1 kg of sugar and 3 kg of potatoes', 600, 'Foods', '2021-10-25 19:23:20', '2021-10-27 14:43:56'),
(3, 'go to watch movie', 3500, 'Movies', '2021-10-25 19:24:32', '2021-10-26 18:37:12'),
(4, 'buy 5 kg of rice and 400 g milk packet', 1670, 'Foods', '2021-10-26 03:11:56', '2021-10-27 15:43:45'),
(7, 'go to picnic', 5500, 'Travelling', '2021-10-26 04:35:46', '2021-10-26 14:40:11'),
(8, 'buy medicine ', 1350, 'Other', '2021-10-26 16:00:05', '2021-10-26 18:52:37'),
(9, 'buy 10 sausage buns', 250, 'Foods', '2021-10-26 19:14:40', '2021-10-26 19:14:54'),
(10, 'buy 2 cheese pizza and 1 chicken pizza', 5850, 'Foods', '2021-10-26 19:17:38', '2021-10-26 19:17:52'),
(11, 'Go to beach ', 1000, 'Travelling', '2021-10-27 05:50:32', '2021-10-27 05:50:32'),
(12, 'buy small table and chair', 7200, 'Other', '2021-10-27 12:57:22', '2021-10-27 14:11:17'),
(13, 'order online 2 novels', 1700, 'Online Subscriptions', '2021-10-27 12:59:50', '2021-10-27 12:59:50'),
(14, 'buy 1kg of onions', 220, 'Foods', '2021-10-27 14:53:19', '2021-10-27 14:53:19');

-- --------------------------------------------------------

--
-- Table structure for table `monthly_income`
--

DROP TABLE IF EXISTS `monthly_income`;
CREATE TABLE IF NOT EXISTS `monthly_income` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `month` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `income` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `monthly_income`
--

INSERT INTO `monthly_income` (`id`, `month`, `income`) VALUES
(1, 'January', 80000),
(2, 'February', 80000),
(3, 'March', 80000),
(4, 'April', 80000),
(5, 'May', 80000),
(6, 'June', 80000),
(7, 'July', 80000),
(8, 'August', 80000),
(9, 'September', 80000),
(10, 'October', 80000),
(11, 'November', 80000),
(12, 'December', 80000);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
