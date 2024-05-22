const express = require("express")
const app = express()
const porta = 3000

app.use(express.json())
const DBconnect = require("./database/connecton")   
DBconnect()

const router = require("./routes/routes")
app.use(router)



app.listen(porta, ()=>{console.log(`Api rodando na porta ${porta}`)})