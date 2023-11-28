-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 26, 2023 at 04:18 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `maquiladora_ugc`
--

-- --------------------------------------------------------

--
-- Table structure for table `cortes`
--

CREATE TABLE `cortes` (
  `Folio_interno` varchar(30) NOT NULL,
  `Fecha_pedido` date NOT NULL,
  `Cliente` varchar(50) NOT NULL,
  `Tienda` varchar(30) NOT NULL,
  `Orden` varchar(30) NOT NULL,
  `Modelo` varchar(30) NOT NULL,
  `Descripcion` varchar(200) NOT NULL,
  `Proporcion_corte` varchar(50) NOT NULL,
  `TonoDB` varchar(30) NOT NULL,
  `DoblesDB` varchar(30) NOT NULL,
  `TonoRetazo` varchar(30) NOT NULL,
  `DoblesRetazo` varchar(30) NOT NULL,
  `Cierre` varchar(30) NOT NULL,
  `Guia_hilo` varchar(30) NOT NULL,
  `Guia_calibre` varchar(30) NOT NULL,
  `Presilla_hilo` varchar(30) NOT NULL,
  `Presilla_calibre` varchar(30) NOT NULL,
  `Combinacion_hilo` varchar(30) NOT NULL,
  `Combinacion_calibre` varchar(30) NOT NULL,
  `Sobre_hilo` varchar(30) NOT NULL,
  `Sobre_calibre` varchar(30) NOT NULL,
  `Seguridad_hilo` varchar(30) NOT NULL,
  `Seguridad_calibre` varchar(30) NOT NULL,
  `DelanteroFE` varchar(30) NOT NULL,
  `DelanteroSEA` varchar(50) NOT NULL,
  `DelanteroE` varchar(30) NOT NULL,
  `DelanteroH` varchar(30) NOT NULL,
  `DelanteroFC` varchar(30) NOT NULL,
  `TraseroFE` varchar(30) NOT NULL,
  `TraseroSEA` varchar(30) NOT NULL,
  `TraseroE` varchar(30) NOT NULL,
  `TraseroH` varchar(30) NOT NULL,
  `TraseroFC` varchar(30) NOT NULL,
  `OPFE` varchar(30) NOT NULL,
  `OPSEA` varchar(30) NOT NULL,
  `OPE` varchar(30) NOT NULL,
  `OPH` varchar(30) NOT NULL,
  `OPFC` varchar(30) NOT NULL,
  `TerminacionFE` varchar(30) NOT NULL,
  `TerminacionSEA` varchar(30) NOT NULL,
  `TerminacionE` varchar(30) NOT NULL,
  `TerminacionH` varchar(30) NOT NULL,
  `TerminacionFC` varchar(30) NOT NULL,
  `LavanderiaFE` varchar(30) NOT NULL,
  `LavanderiaSEA` varchar(30) NOT NULL,
  `LavanderiaE` varchar(30) NOT NULL,
  `LavanderiaH` varchar(30) NOT NULL,
  `LavanderiaFC` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cortes`
--

INSERT INTO `cortes` (`Folio_interno`, `Fecha_pedido`, `Cliente`, `Tienda`, `Orden`, `Modelo`, `Descripcion`, `Proporcion_corte`, `TonoDB`, `DoblesDB`, `TonoRetazo`, `DoblesRetazo`, `Cierre`, `Guia_hilo`, `Guia_calibre`, `Presilla_hilo`, `Presilla_calibre`, `Combinacion_hilo`, `Combinacion_calibre`, `Sobre_hilo`, `Sobre_calibre`, `Seguridad_hilo`, `Seguridad_calibre`, `DelanteroFE`, `DelanteroSEA`, `DelanteroE`, `DelanteroH`, `DelanteroFC`, `TraseroFE`, `TraseroSEA`, `TraseroE`, `TraseroH`, `TraseroFC`, `OPFE`, `OPSEA`, `OPE`, `OPH`, `OPFC`, `TerminacionFE`, `TerminacionSEA`, `TerminacionE`, `TerminacionH`, `TerminacionFC`, `LavanderiaFE`, `LavanderiaSEA`, `LavanderiaE`, `LavanderiaH`, `LavanderiaFC`) VALUES
('119CS', '2003-12-23', 'mundo', 'copel', '125', '1cas', 'Es un jower', '45654', '45', '65', '78', '54', '6cm', 'kaki', '132', 'marino', '133', 'azul', '134', 'rojo', '135', 'verde', '1000', '12 dic', 'mundo', 'joki', 'vale', 'manana', '13', 'mundo1', 'joki1', 'asbd', 'mana3', '14', 'mundo2', 'joki12', 'dsas', 'mmana33', '15', 'mundo2', 'joki3', 'dddd', 'manann5', '18', 'mundo3', 'jok4i', 'asdsddd', 'masmdm6');

-- --------------------------------------------------------

--
-- Table structure for table `estilos`
--

CREATE TABLE `estilos` (
  `Modelo` varchar(20) NOT NULL,
  `Descripcion` varchar(150) NOT NULL,
  `Tela` varchar(50) NOT NULL,
  `Tallas` varchar(100) NOT NULL,
  `Guia_hilo` varchar(30) NOT NULL,
  `Guia_calibre` varchar(30) NOT NULL,
  `Presilla_hilo` varchar(30) NOT NULL,
  `Presilla_calibre` varchar(30) NOT NULL,
  `Combinacion_hilo` varchar(30) NOT NULL,
  `Combinacion_calibre` varchar(30) NOT NULL,
  `Sobrehilado_hilo` varchar(30) NOT NULL,
  `Sobrehilado_calibre` varchar(30) NOT NULL,
  `Seguridad_hilo` varchar(30) NOT NULL,
  `Seguridad_calibre` varchar(30) NOT NULL,
  `Cierre` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `estilos`
--

INSERT INTO `estilos` (`Modelo`, `Descripcion`, `Tela`, `Tallas`, `Guia_hilo`, `Guia_calibre`, `Presilla_hilo`, `Presilla_calibre`, `Combinacion_hilo`, `Combinacion_calibre`, `Sobrehilado_hilo`, `Sobrehilado_calibre`, `Seguridad_hilo`, `Seguridad_calibre`, `Cierre`) VALUES
('Cb1234', 'Es un jower', 'Mezclilla', '45, 42, 87', 'kaki', '132', 'marino', '133', 'azul', '134', 'rojo', '135', 'verde', '1000', '6 cm');

-- --------------------------------------------------------

--
-- Table structure for table `hilos`
--

CREATE TABLE `hilos` (
  `Codigo` varchar(20) NOT NULL,
  `Nombre` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `hilos`
--

INSERT INTO `hilos` (`Codigo`, `Nombre`) VALUES
('11', 'KAKI'),
('98', 'MAR');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `Nombre` varchar(50) NOT NULL,
  `Contrasena` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cortes`
--
ALTER TABLE `cortes`
  ADD PRIMARY KEY (`Folio_interno`);

--
-- Indexes for table `estilos`
--
ALTER TABLE `estilos`
  ADD PRIMARY KEY (`Modelo`);

--
-- Indexes for table `hilos`
--
ALTER TABLE `hilos`
  ADD PRIMARY KEY (`Codigo`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`Nombre`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
