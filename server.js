const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const usuariosRoutes = require("./routes/usuarioRoutes");
const errorHandler = require("./middlewares/errorHandler")

const app = express();

app.use(cors());
app.use(express.json());
app.use(errorHandler);

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Mongo conectado"))
    .catch(err => console.log(err));

app.use("/usuarios", usuariosRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
});