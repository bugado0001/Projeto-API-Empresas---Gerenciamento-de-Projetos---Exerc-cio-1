const mongoose = require("mongoose")
require("dotenv").config()

const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_HOST = process.env.DB_HOST
const DB_NAME = process.env.DB_NAME

//Conectar ao banco de dados

function main(){
    mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`)
.then(()=> console.log("Conectado com o banco mogoloide"))
.catch(()=> console.log("Erro ao conectar ao banco"))
}


module.exports = main
