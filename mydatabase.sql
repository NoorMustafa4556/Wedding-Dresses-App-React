-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 08, 2025 at 02:59 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mydatabase`
--

-- --------------------------------------------------------

--
-- Table structure for table `dresses`
--

CREATE TABLE `dresses` (
  `DressID` int(11) NOT NULL,
  `DressName` varchar(255) DEFAULT NULL,
  `Gender` varchar(50) DEFAULT NULL,
  `Price` decimal(10,2) DEFAULT NULL,
  `Description` text DEFAULT NULL,
  `ImageURL` text DEFAULT NULL,
  `Size` varchar(50) DEFAULT NULL,
  `Availability` tinyint(1) DEFAULT NULL,
  `DressColor` varchar(100) DEFAULT NULL,
  `Fabric` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `dresses`
--

INSERT INTO `dresses` (`DressID`, `DressName`, `Gender`, `Price`, `Description`, `ImageURL`, `Size`, `Availability`, `DressColor`, `Fabric`) VALUES
(1, 'Golden Dulha Sherwani', 'Male', 95000.00, 'A majestic golden sherwani with intricate embroidery, perfect for the groom.', 'golden-dulha-sherwani.jpg', 'Large', 1, 'Golden', 'Silk'),
(2, 'Golden Dulha Sherwani', 'Male', 95000.00, 'A majestic golden sherwani with intricate embroidery, perfect for the groom.', 'golden-dulha-sherwani.jpg', 'Large', 1, 'Golden', 'Silk'),
(3, 'Red Dulha Sherwani', 'Male', 98000.00, 'A traditional red sherwani with golden embroidery for the groom.', 'red-dulha-sherwani.jpg', 'Large', 1, 'Red', 'Velvet'),
(4, 'White Walima Suit for Dulha', 'Male', 75000.00, 'A sophisticated white walima suit for the groom.', 'white-walima-suit.jpg', 'Medium', 1, 'White', 'Chiffon'),
(5, 'Red Bridal Lehenga', 'Female', 120000.00, 'A stunning red bridal lehenga with gold zari work.', 'red-bridal-lehenga.jpg', 'Small', 1, 'Red', 'Net'),
(20, 'sahsv', 'Male', 216859.00, 'asfhnsvdujvbnx zkzhdfvwrebdfkxcn jqifghbetn cv', NULL, 'Medium', NULL, 'sdndsv', 'dvnsdv'),
(21, 'Suit', 'Male', 2999.00, 'Hello', NULL, 'Medium', NULL, 'Green', 'Silk');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dresses`
--
ALTER TABLE `dresses`
  ADD PRIMARY KEY (`DressID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dresses`
--
ALTER TABLE `dresses`
  MODIFY `DressID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
