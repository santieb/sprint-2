const express = require("express");
const app = express();
const PORT = process.env.PORT || 3028;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const bands = require("./routes/bands");

app.use('/bands', bands)


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);

});
