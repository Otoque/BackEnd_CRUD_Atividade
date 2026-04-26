const mongoose = require("mongoose");

const usuariosSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model("Usuario", usuariosSchema);