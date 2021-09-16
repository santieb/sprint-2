-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensaje`
--

CREATE TABLE `mensaje` (
  `id_mensaje` int(2) NOT NULL,
  `texto_mensaje` varchar(200) NOT NULL,
  `fecha_mensaje` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_usuario` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `mensaje`
--

INSERT INTO `mensaje` (`id_mensaje`, `texto_mensaje`, `fecha_mensaje`, `id_usuario`) VALUES
(1, 'hola cómo están, estoy probando esta nueva app', '2020-11-11 01:46:20', 1),
(2, 'estoy dando clases', '2020-11-11 01:51:19', 1),
(3, 'esta app está muy chevere', '2020-11-11 02:25:45', 5),
(4, 'Colombia gana el viernes contra uruguay', '2020-11-11 02:30:06', 1),
(5, '<h1>holaaa!</h1>', '2020-11-11 02:32:09', 1),
(6, '<script>alert(\'hacked\');</script>', '2020-11-11 02:41:53', 1),
(7, 'scripthajajaja)/script', '2020-11-11 02:36:00', 1),
(8, 'scripthacked)/script', '2020-11-11 02:40:38', 1),
(9, 'scripthacked)/script', '2020-11-11 02:43:44', 1),
(10, 'yacasiterminaelsemestre', '2020-11-11 02:50:16', 9),
(11, 'estoy desde internet', '2020-11-12 02:19:53', 1),
(12, 'Profe ayuda por favor con la conexión a la base de datos ', '2020-11-12 02:23:03', 10);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `mensaje`
--
ALTER TABLE `mensaje`
  ADD PRIMARY KEY (`id_mensaje`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `mensaje`
--
ALTER TABLE `mensaje`
  MODIFY `id_mensaje` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `mensaje`
--
ALTER TABLE `mensaje`
  ADD CONSTRAINT `mensaje_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;