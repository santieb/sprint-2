const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const televisorRoutes = require("./routes/routes");

app.use("/api/v1/televisores", televisorRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
