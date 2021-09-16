--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(2) NOT NULL,
  `nombre_completo` varchar(40) NOT NULL,
  `correo` varchar(40) NOT NULL,
  `celular` bigint(10) NOT NULL,
  `clave` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre_completo`, `correo`, `celular`, `clave`) VALUES
(1, 'santiago Bernal', 'exactlimon@gmail.com', 3161234567, '0c909a141f1f2c0a1cb602b0b2d7d050'),
(2, 'sergin ladino', 'sladino@uc.edu.co', 3101234567, 'a4832fa801254e7725ac224e8d8dc60c'),
(3, 'Julano', 'detal@gmail.com', 3101234568, '4558968a2556a6bae141bd50e1b6e9f8'),
(4, 'Jaber', 'jgiraldo@uc.edu.co', 3101234545, 'ef4e92c0733004df5fcea5f9b08f3fd2'),
(5, 'Andrés Mariscal', 'amariscal@uc.edu.co', 3101236789, '32f80793c90448564fc358c41b36c2a8'),
(8, 'Pedro Toro', 'ptro@uc.edu.co', 3101234549, 'd48b24de25346388fa938ac0402628a1'),
(9, 'lorena', 'aotalvaro@uc.edu.co', 3203456789, '79ee28eb2d2024b2fe70df4da5202106'),
(10, 'JorgeCorrea', 'jcorrea@uc.edu.co', 3176491083, '89a37d335252117b93dfae1b70a1229e');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `correo` (`correo`),
  ADD UNIQUE KEY `celular` (`celular`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

