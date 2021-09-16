-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-09-2021 a las 17:38:05
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `exercise_bands`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `albumes`
--

CREATE TABLE `albumes` (
  `id` int(11) NOT NULL,
  `name_album` varchar(15) NOT NULL,
  `band` int(2) NOT NULL,
  `publication_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `albumes`
--

INSERT INTO `albumes` (`id`, `name_album`, `band`, `publication_date`) VALUES
(1, 'luz radiante', 1, '2005-05-06'),
(2, 'travesia', 2, '2010-05-06');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bandas_musicales`
--

CREATE TABLE `bandas_musicales` (
  `id` int(2) NOT NULL,
  `name` varchar(15) NOT NULL,
  `members` int(2) NOT NULL,
  `start_date` date NOT NULL,
  `separation_date` date DEFAULT NULL,
  `country` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `bandas_musicales`
--

INSERT INTO `bandas_musicales` (`id`, `name`, `members`, `start_date`, `separation_date`, `country`) VALUES
(1, 'green day', 4, '2002-03-04', '2004-03-04', 'AR'),
(2, 'RHCP', 3, '2010-03-04', NULL, 'COL');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `canciones`
--

CREATE TABLE `canciones` (
  `id` int(2) NOT NULL,
  `name` varchar(15) NOT NULL,
  `duration` int(3) NOT NULL,
  `album` int(2) NOT NULL,
  `banda` int(2) NOT NULL,
  `publication_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `canciones`
--

INSERT INTO `canciones` (`id`, `name`, `duration`, `album`, `banda`, `publication_date`) VALUES
(1, 'luna llena', 120, 1, 1, '2005-05-06'),
(2, 'sonrie', 150, 1, 1, '2005-05-06'),
(3, 'zafar', 60, 2, 2, '2010-05-06'),
(4, 'por mil noches', 140, 2, 2, '2005-05-06');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `albumes`
--
ALTER TABLE `albumes`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `band` (`band`);

--
-- Indices de la tabla `bandas_musicales`
--
ALTER TABLE `bandas_musicales`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `canciones`
--
ALTER TABLE `canciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `banda` (`banda`),
  ADD KEY `album` (`album`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `albumes`
--
ALTER TABLE `albumes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `bandas_musicales`
--
ALTER TABLE `bandas_musicales`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `canciones`
--
ALTER TABLE `canciones`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `albumes`
--
ALTER TABLE `albumes`
  ADD CONSTRAINT `albumes_ibfk_1` FOREIGN KEY (`band`) REFERENCES `bandas_musicales` (`id`);

--
-- Filtros para la tabla `canciones`
--
ALTER TABLE `canciones`
  ADD CONSTRAINT `canciones_ibfk_2` FOREIGN KEY (`banda`) REFERENCES `bandas_musicales` (`id`),
  ADD CONSTRAINT `canciones_ibfk_3` FOREIGN KEY (`album`) REFERENCES `albumes` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
