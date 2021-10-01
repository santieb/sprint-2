const express = require('express');
const app = express();
const port = 3019;

const users = require('./routes/users.routes')
app.use('/challenge', users);

const products = require('./routes/products.routes')
app.use('/challenge', products);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
