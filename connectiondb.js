const confg = require('./config');

const mongoose = require("mongoose")
const connectToDatabase = function() {

    mongoose.connect(confg.mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {
        if (err) {
            console.log("Falló la conexión")

        } else {
            console.log("Conexión exitosa")
        }

    })
}

module.exports = { connectToDatabase }