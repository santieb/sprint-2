const express = require('express');
const app = express();
// Setup server port
const port = process.env.PORT ||3027;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', (req, res) => {
  res.send("Hello World");
});

// Require employee routes
const mensajeRoutes = require('./routes/mensajes.route')
// using as middleware
app.use('/api/v1/mensajes', mensajeRoutes)

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
