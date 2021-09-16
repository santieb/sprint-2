const express = require("express");
const app = express();
const PORT = process.env.PORT || 3028;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const mensajeRoutes = require("./routes/mensajes.route");

app.use('/api/v1/mensajes', mensajeRoutes)


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);

});
