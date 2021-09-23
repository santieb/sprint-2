const express = require("express");
const app = express();
const PORT = process.env.PORT || 3029;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const bandasRoutes = require("./routes/bandas.route");
const albumesRoutes = require("./routes/albumes.route");
const cancionesRoutes = require("./routes/canciones.route");

app.use('/api/v1/bandas', bandasRoutes);
app.use('/api/v1/albumes', albumesRoutes);
app.use('/api/v1/canciones', cancionesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);

});
